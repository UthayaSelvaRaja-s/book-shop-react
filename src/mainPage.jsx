import React, { useState } from 'react';
import pic from './assets/logo1.jpg'
import { UserOutlined,BookOutlined,BookFilled ,ShoppingCartOutlined,HeartOutlined,
  ReadOutlined,HomeOutlined,ContactsOutlined,FacebookOutlined,WhatsAppOutlined,MailOutlined,YoutubeOutlined,InfoCircleOutlined,SearchOutlined } from '@ant-design/icons';
import { Layout, Menu, Space,Image ,Input, Button, Drawer,} from 'antd';
import Cardlist from './Cardlist';
import { useNavigate } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;



function Main(){


    let [isDrawerOpen,setIsDrawerOpen]=useState(false);
    let searchInput='';
    const [search,setSearch]=useState('')
    let [card,setCard]=useState(false)
    const navigate=useNavigate();
    const [category,setCategory]=useState('');

    function sendState(openDrawer){
        openDrawer(true);
    }


    function getItem(label, key, icon,children) {
        return { key,icon,children, label,};
      }
      const items = [
        
        getItem('BOOKS','/books',<BookOutlined />,[
            getItem('ALL BOOKS','all',<ReadOutlined/>),
            getItem('TAMILBOOKS','tamil',<BookFilled/>),
            getItem('ENGLISHBOOKS','english',<BookFilled/>)]),
        getItem('WISHLIST','wish',<HeartOutlined />),
        
        ];
        const item1 =[    
            getItem(<img src={pic} width={70} style={{borderRadius:"10px",marginTop:"29px"}}></img>),
         getItem(<div style={{fontSize: 16, color: '#1677ff',width:"400px",marginBottom:"2px"}}><Input style={{height:'2rem',width:'275px'}} onChange={(e)=>{searchInput=(e.target.value)}} type='text'/> 
         <Button style={{}} onClick={()=>{setSearch((pervState)=>{   
                return pervState=searchInput
         });}}><SearchOutlined /></Button></div>),
                getItem('USER', '/user', <UserOutlined style={{fontSize:"20px"}}/>),
                getItem('','/cart',<ShoppingCartOutlined onClick={()=>{setIsDrawerOpen(true)}} style={{fontSize:"20px"}}/>),
                getItem('ABOUT US','/about',<InfoCircleOutlined style={{fontSize:"20px"}}/>),
                getItem('CONTACT US','/contact',<ContactsOutlined  style={{fontSize:"20px"}}/>,[
          
                    getItem('G-MAIL',"/mail",<MailOutlined/>),
                    getItem('FACEBOOK',"/facebook",<FacebookOutlined/>),
                    getItem('WHATSAPP','/whatsapp',<WhatsAppOutlined/>),
                    getItem('YOUTUBE','/youtube',<YoutubeOutlined/>)
                  
                ])
            ]
    return(
        <React.Fragment>
            <div style={{backgroundColor:"white"}}>
            <Layout>
               <Header style={{width:"100vw",padding:"0",display:"flex",justifyContent:"flex-end",height:'5.5rem',backgroundColor:"white",zIndex:"9999"}}> 
                <Menu onClick={(key)=>navigate(key.key=="/cart"?'/':key.key)} mode='horizontal'style={{width:"110%", height:'5.5rem',paddingLeft:"10px",display:"flex",alignItems:'center',justifyContent:"center",gap:"40px",position:"fixed",
                fontWeight:"bold",backgroundColor:"rgb(58, 84, 226)",color:"white" }}
                items={item1}
                ></Menu>
               </Header>
              <Layout >
             <Sider style={{width:"200px",position:"fixed",zIndex:'9999', height:"100%"}}>
                <Menu mode='vertical' onClick={(key)=>{console.log(key.key);setCategory(key.key)}} style={{width:"200px",height:"100%",position:"fixed",fontWeight:"bold"}} items={items}>

                </Menu>
             </Sider>
                <Content style={{width:"100%",marginLeft:"220px"}} ><Cardlist category={category}></Cardlist></Content>
             </Layout>
            </Layout>

            <Drawer open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}>
                Drawer
            </Drawer>
            </div>
        </React.Fragment>   
         )
  

   
}
export default Main;