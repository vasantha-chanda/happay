import React,{useContext} from 'react';
import Context from '../context/cart/Context';


import  {FiShoppingCart} from 'react-icons/fi' ;
import {BsFillPersonFill} from 'react-icons/bs';
const Header = () => {
    const{cartItems}=useContext(Context);
    return (
    
             < div  className="home">
            
            <img  className="logo" src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg" alt="logoimage"/>
             <div>
            <FiShoppingCart className="cart"/>
             
             {
                 cartItems.length>0 && <div className="item_count"><span>{
                     cartItems.length}</span></div>
             }
            
             <BsFillPersonFill className="person"/>
             </div>
             
                 

            
             
        
        </div>
    )
}

export default Header
