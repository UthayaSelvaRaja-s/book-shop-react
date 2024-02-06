import React from "react";
import { useState } from "react";
import { Layout, Menu, Space,Image ,Input,Card,Modal,Button, Rate, Empty,Drawer} from 'antd';
import { SearchOutlined,ContainerOutlined,SafetyCertificateOutlined,RotateLeftOutlined } from '@ant-design/icons';

function AboutCard(){

    return(
        <React.Fragment>
            <div className="bg" style={{minHeight:"100vh"}}>
                <div className="overlay">
            <div style={{display:"flex",justifyContent:"center",padding:"20px"}}>
     <Space direction="vertical"  size={16}>
        <Card title="About Us" bodyStyle={{backgroundColor:"white"}} headStyle={{backgroundColor:"rgb(58, 84, 226)",color:"white"}} style={{ width: 600,border:"0"}}>
           <p>Welcome to the Online store of Book World , the Book and Leisure Store Chain with presence in Chennai, Tamilnadu, India.
             Book World is a 26 year old bookstore brand and we wish to give the same wide range,
              good quality and nice experience on this online store that we have given to lakhs of customers till now in
               our physical stores. </p>
          </Card>
          
    </Space>
    </div>
         <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
         <Card title="Shipping" bodyStyle={{backgroundColor:"white"}} headStyle={{backgroundColor:"rgb(58, 84, 226)",color:"white"}} style={{ width: 300,border:"0" }}>
         <ContainerOutlined />
            <p>For Orders within Chennai, we deliver between 1 - 2 days subject to availability of the products. 
            For locations outside TN, it will take between 2 - 7 days depending on location.</p>
         </Card>
         <Card title="Secure Payments" bodyStyle={{backgroundColor:"white"}} headStyle={{backgroundColor:"rgb(58, 84, 226)",color:"white"}} style={{ width: 300,border:"0"}}>
         <SafetyCertificateOutlined />
         <p>PAYU is our Payment Gateway partner. You can pay using Credit/Debit cards, Net banking, PAYTM, GOOGLE PAY, 
            UPI on their secure platform.
            before COD is not available now due to COVID.Now COD is availabe</p>
         </Card>
         <Card title="Customer Support & Returns" bodyStyle={{backgroundColor:"white"}} headStyle={{backgroundColor:"rgb(58, 84, 226)",color:"white"}} style={{ width: 300,border:"0" }}>
         <RotateLeftOutlined />
         <p>For returns or any other issue, please message us through this Contact Us link. 
            Or Whatsapp us. We shall get back to you. </p>
         </Card>


         </div>
         </div>
         </div>
            
        </React.Fragment>
    )
}
export default AboutCard;