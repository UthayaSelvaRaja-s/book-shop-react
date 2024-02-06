import React from "react";
import { useState ,useEffect} from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,Card, message } from 'antd';
import pic from './assets/logo1.jpg'
import bg from './assets/BG.jpg'
import { useNavigate } from "react-router-dom";


function UserLogin(props){
    let User = "bookshop";
    let key =  "123456"
    const navigate = useNavigate()
    let[userName,setUserName]=useState();
    let[passWord,SetPassWord]=useState();
    let[error,setError]=useState(false)
    let[userInvalid,setUserInvalid]=useState(false)
    function check(){
      if(User===userName && key===passWord && userName!="" && passWord!=""){
        props.nextPage(true)
        navigate('/store')
      }if(User!=userName && key!=passWord){
        setUserInvalid(true)
      }
      else{
        // props.nextPage(false)
        setError(true)
      }
    }

    return(
        <div>
            <div className="bg" style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>

            <Card style={{ width:300,height:400,display:"flex",alignItems:"center",justifyItems:"center",border:"none",borderLeft:"2px solid rgba(255, 255, 255, 0.6)",borderTop:"2px solid rgba(255, 255, 255, 0.6) ",boxShadow:"3px 3px 5px 5px rgba(255, 255, 255, 0.6)",background:"transparent"}}>
            <img src={pic}  alt="logo" width={100} height={100} style={{marginLeft:"35%",borderRadius:"10px",marginBottom:"10px"}} /><br/>
            <Form name="normal_login" className="login-form"initialValues={{ remember: true }}>
           <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
           
            <Input style={{width:"110%"}} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" onChange={(e1)=>setUserName(e1.target.value)} />
        </Form.Item>
      <Form.Item name="passord" rules={[{ required: true, message: 'Please input your Password!'}]}>
      
        <Input style={{width:"110%"}} prefix={<LockOutlined className="site-form-item-icon" />}type="password" placeholder="Password" onChange={(e2)=>SetPassWord(e2.target.value)}/>
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle><Checkbox style={{color:"white"}}>Remember me</Checkbox>
        </Form.Item>
        <a style={{color:"white"}} className="login-form-forgot" href="">Forgot password</a> 
        </Form.Item>
      <Form.Item>
        <Button style={{width:"50%"}} type="primary" htmlType="submit" className="login-form-button" onClick={check}> Log in </Button> Or <a style={{color:"white"}} href="">register now!</a>
      </Form.Item>
    </Form>
   </Card>

                
            </div>

        </div>
    )
}
export default UserLogin;