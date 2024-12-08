import React, {useState, useEffect} from 'react';
import "./Cart.css";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../../redux/action/action';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Cart = () => {

const [cartItem, setCartItem] = useState([]);
const dispatch = useDispatch();
const cartItems = useSelector((state) => state.cart.items);

let a = 0;
let cost = cartItems.map((item) => {return a = a + item.price})

useEffect(()=>{
    setCartItem(cartItems);
}, [cartItems])

const handleRemoveFromCart = (id)=>{
    toast.error("Item Removed From Cart",{position:"bottom-right"})

  dispatch(removeFromCart(id));
}

    return (
        <div className='cart'>
            <div className="topLeftcart">
                <div className="lefttitle">Shopping Cart</div>
                <div className="deselect">Deselect all items</div>
                <div className="cartPrice">Price</div>
                <div className="cartDiv">

                  {
                     cartItems.map((item,ind)=>{
                        return(
                            <div className="cartBlock">
                                <div className="cartLeft">
                                    <div className="imgBlock">
                                        <img className='Itemleft' src={item.imageUrl} alt="" />
                                    </div>
                                    <div className="itemdetails">
                                        <div className="cartName">{item.name}</div>
                                        <div className="instock">In Stock</div>
                                        <div className="freeSip">Eligible for FREE Shipping</div>
                                        <div className="amazonimg"><img className='fullfill' src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png " alt="" /></div>
                                        <div className="remove" onClick ={() => {handleRemoveFromCart(item.id)}}>Remove From Basket</div>
                                    </div>
                                </div>
                                <div className="cartitemprize">Rs {item.price}</div>
                            </div>
                        );
                    })
                }

                </div>

            </div>
            <div className="topRightcart">
                <div className="sub">Subtotal ({cartItem.length} item) : <span className='total'>Rs {a}</span> </div>
                <div className="gift">
                    <input type="checkbox" />
                    <div>This Order Contains a gift</div>
                </div>
                <div className="proceed">Proceed To Buy</div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Cart;
