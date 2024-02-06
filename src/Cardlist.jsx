import React from 'react';
import pic from './assets/logo1.jpg'
import { useState } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Layout, Menu, Space,Image ,Input,Card,Modal,Button, Rate, Empty,Drawer} from 'antd';
const {Meta}=Card

function Cardlist(props){
 
 let {category,search}=props

  const [isModalOpen,setIsModalOpen]=useState(false)
  const[selectBook,setSelectBook]=useState(null)
  const [open, setOpen] = useState(false);
  let [books, setBooks] = useState(
    [
      { id:1,
        bookName: "ponniyin selvan part 1 ",
       category: "tamil", 
       author:"kalki krishnamoorthy",
       description: "Ponniyin Selvan (transl. The Son of Ponni) is a Tamil language historical fiction novel by Indian author Kalki Krishnamurthy.It was first serialised in the weekly editions of Kalki",
       price: 390,
       rate:{rating:4,count:475},
      quantity:1,
      image:'https://m.media-amazon.com/images/I/91s48sH6xqL._AC_UF1000,1000_QL80_.jpg'
    },
      { 
        id:2,
        bookName: "ponniyin selvan part 2 ",
       category: "tamil", 
       author:"kalki krishnamoorthy",
       description: "Ponniyin Selvan (transl. The Son of Ponni) is a Tamil language historical fiction novel by Indian author Kalki Krishnamurthy.It was first serialised in the weekly editions of Kalki",
       price: 490,
       rate:{rating:4.5,count:550},
      quantity:1,
      image:'https://m.media-amazon.com/images/I/91s48sH6xqL._AC_UF1000,1000_QL80_.jpg'
    },
      { id:3,
        bookName: "ponniyin selvan part 3 ",
       category: "tamil", 
       author:"kalki krishnamoorthy",
       description: "Ponniyin Selvan (transl. The Son of Ponni) is a Tamil language historical fiction novel by Indian author Kalki Krishnamurthy.It was first serialised in the weekly editions of Kalki",
       price: 380,
       rate:{rating:3.9,count:401},
      quantity:1,
      image:'https://m.media-amazon.com/images/I/91s48sH6xqL._AC_UF1000,1000_QL80_.jpg'
    },
      { id:4,
        bookName: "ponniyin selvan part 4 ",
       category: "tamil", 
       author:"kalki krishnamoorthy",
       description: "Ponniyin Selvan (transl. The Son of Ponni) is a Tamil language historical fiction novel by Indian author Kalki Krishnamurthy.It was first serialised in the weekly editions of Kalki",
       price: 350,
       rate:{rating:3.5,count:450},
      quantity:1,
      image:'https://m.media-amazon.com/images/I/91s48sH6xqL._AC_UF1000,1000_QL80_.jpg'
    },
      { id:5,
        bookName: "ponniyin selvan part 5 ",
       category: "tamil",
       author:"kalki krishnamoorthy", 
       description: "Ponniyin Selvan (transl. The Son of Ponni) is a Tamil language historical fiction novel by Indian author Kalki Krishnamurthy.It was first serialised in the weekly editions of Kalki",
       price: 400,
       rate:{rating:4.4,count:415},
      quantity:1,
      image:'https://m.media-amazon.com/images/I/91s48sH6xqL._AC_UF1000,1000_QL80_.jpg'
    },
      { id:6,
        bookName: "the harry potter part 1 ",
       category: "english",
       author:"jk rowling", 
       description: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends",
       price: 360,
       rate:{rating:3.9,count:395},
      quantity:1,
        image:'https://m.media-amazon.com/images/I/8179uEK+gcL._AC_UF1000,1000_QL80_.jpg'
    },
      { id:7,
        bookName: "the harry potter part 2 ",
       category: "english",
       author:"jk rowling", 
       description: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends",
       price: 400,
       rate:{rating:4.5,count:400},
      quantity:1,
      image:'https://m.media-amazon.com/images/I/8179uEK+gcL._AC_UF1000,1000_QL80_.jpg'
    },
      { id:8,
        bookName: "the harry potter part 3 ",
       category: "english",
       author:"jk rowling", 
       description: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends",
       price: 390,
       rate:{rating:4.1,count:410},
      quantity:1,
      image:'https://m.media-amazon.com/images/I/8179uEK+gcL._AC_UF1000,1000_QL80_.jpg'
    },
     {
      id:9,
        bookName: "The Power of your subconscious mind ",
       category: "english",
       author:"joseph murphy", 
       description: "Here is the complete, original text of the millions-selling self- help guide that reveals your invisible power to attain any goal-paired with a compelling bonus work, How to Attract Money.",
       price: 490,
       rate:{rating:4.1,count:410},
      quantity:1,
      image:'https://m.media-amazon.com/images/I/81gTwYAhU7L._AC_UF1000,1000_QL80_.jpg'
    
     },
    {
      id:10,
        bookName: "Atomic Habits ",
       category: "english",
       author:"James Clear", 
       description: "The #1 New York Times bestseller. Over 10 million copies sold!Tiny Changes, Remarkable ResultsNo matter your goals, Atomic Habits offers a proven framework for improving--every day.",
       price: 490,
       rate:{rating:4.1,count:410},
      quantity:1,
      image:'https://thriftbooksusa.com/cdn/shop/products/atomic-habits-an-easy-proven-way-to-build-good-habits-break-bad-ones-by-james-clear-682272_359x500.jpg?v=1680327188'
    }]
  )
  return(
    <div style={{display:"flex",gap:"8px",flexWrap:"wrap", padding:"20px",zIndex:"-1"}}>
      {books.filter(book=>{return category==='all' || category===''? book: book.category===category}).map(book=>(
        <Card key={book.id} onClick={()=>{setIsModalOpen(true); setSelectBook(book);}} hoverable style={{ display:"flex",flexDirection:'column',justifyContent:'space-evenly',width: 240, padding:"10px"}}
        cover={<img alt="example" style={{width:"100px",marginInline:'auto'}} src={book.image}/>}>
        <Meta title={book.bookName.toUpperCase()} />
        <p style={{marginBlock:'15px',fontWeight:'bold'}}>{book.author.toUpperCase()}</p>
        <Rate value={book?.rate?.rating} allowHalf disabled></Rate>({book?.rate?.count})
        <p style={{fontWeight:"bold"}}>Price-₹{book.price} <span style={{textDecoration:"line-through",color:"red"}}>MRP ₹{Math.floor(book.price + (book.price/10))}</span></p>
      </Card>
      ))}

       <Modal onCancel={()=>{setIsModalOpen(false);setSelectBook(null)}} open={isModalOpen} footer={[<Button onClick={()=>{setIsModalOpen(false);setSelectBook(null)}}>Close</Button>]}>
        {selectBook && <Card style={{ width: '100%',border:'0', padding:"10px",backgroundColor:"transparent",marginInline:'auto'}}
        cover={<img alt="example" style={{width:"100px",marginInline:'auto'}} src={selectBook?.image}/>}>
        <Meta title={selectBook?.bookName.toUpperCase()} description={selectBook?.description} />
        <p style={{marginBlock:'15px',fontWeight:'bold'}}>{selectBook?.author.toUpperCase()}</p>
        <Rate value={selectBook?.rate?.rating} allowHalf disabled></Rate>({selectBook?.rate?.count})
        <p style={{marginBlock:'15px',fontWeight:'bold'}}>Price-₹ {selectBook?.price}</p>
        <div style={{display:"flex",gap:"25px"}}>
        <Button type="primary" style={{backgroundColor:"rgb(247, 202, 0)",color:"black"}}>Add to Cart<ShoppingCartOutlined style={{fontSize:"20px"}}/></Button>
        <Button type="primary" style={{backgroundColor:"rgb(250, 137, 0)",color:"black"}}>Buy Now</Button>
        </div>
      </Card>}
      </Modal>
      
      
        
      

    </div>
  )

}
export default Cardlist;
