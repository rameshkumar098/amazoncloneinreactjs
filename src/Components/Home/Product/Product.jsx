import React from 'react';
import './Product.css';
import { MdStarRate } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import ProductDetail from './Products.json'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../redux/action/action';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Product = () => {

const dispatch = useDispatch();
const cartItems = useSelector((state) => state.cart.items);
const handleAddToCart = (item) => {
    toast.success("Successfully Added in Cart",{position:"bottom-right"})
     dispatch(addToCart(item))
}

    return (
        <div className='productPage'>
            <div className="productTopBanner">
                <div className="productTopBannerItem">
                    Electronics
                </div>
                <div className="subMenu">Mobiles & Accessories</div>
                <div className="subMenu">Laptops & Accessries</div>
                <div className="subMenu">TV & Home Entertainment</div>
                <div className="subMenu">Audio</div>
                <div className="subMenu">Cameras</div>
                <div className="subMenu">Computer Peripherals</div>
                <div className="subMenu">Smart Technology</div>
                <div className="subMenu">Musical Instruments</div>

            </div>

            <div className="productMainPage">
                <div className="leftCategory">
                    <div className="categoryTitle">Category</div>
                    <div className="content">
                        <div className="titleco"> Computers & Accessories</div>
                        <div className="ContentSub">Macbooks</div>
                        <div className="ContentSub">Amazon Prime</div>
                        <div className="ContentSub">Average Customer Review</div>
                        <div className="ratingbox">
                            <MdStarRate style={{ fontSize: "20px", color: "#FFD700" }} />
                            <MdStarRate style={{ fontSize: "20px", color: "#FFD700" }} />
                            <MdStarRate style={{ fontSize: "20px", color: "#FFD700" }} />
                            <MdStarRate style={{ fontSize: "20px", color: "#FFD700" }} />
                            <FaRegStar style={{ fontSize: "20px", color: "#FFD700" }} />
                            <div className="andup">& Up</div>


                        </div>

                        <div className="ratingbox">
                            <MdStarRate style={{ fontSize: "20px", color: "#FFD700" }} />
                            <MdStarRate style={{ fontSize: "20px", color: "#FFD700" }} />
                            <MdStarRate style={{ fontSize: "20px", color: "#FFD700" }} />
                            <FaRegStar style={{ fontSize: "20px", color: "#FFD700" }} />
                            <FaRegStar style={{ fontSize: "20px", color: "#FFD700" }} />
                            <div className="andup">& Up</div>


                        </div>

                        <div className="ratingbox">
                            <MdStarRate style={{ fontSize: "20px", color: "#FFD700" }} />
                            <MdStarRate style={{ fontSize: "20px", color: "#FFD700" }} />
                            <FaRegStar style={{ fontSize: "20px", color: "#FFD700" }} />
                            <FaRegStar style={{ fontSize: "20px", color: "#FFD700" }} />
                            <FaRegStar style={{ fontSize: "20px", color: "#FFD700" }} />
                            <div className="andup">& Up</div>


                        </div>


                        <div className="ratingbox">
                            <MdStarRate style={{ fontSize: "20px", color: "#FFD700" }} />
                            <FaRegStar style={{ fontSize: "20px", color: "#FFD700" }} />
                            <FaRegStar style={{ fontSize: "20px", color: "#FFD700" }} />
                            <FaRegStar style={{ fontSize: "20px", color: "#FFD700" }} />
                            <FaRegStar style={{ fontSize: "20px", color: "#FFD700" }} />
                            <div className="andup">& Up</div>


                        </div>

                        <div className="ContentSub">Amazon Devices & Accessories</div>
                        <div className="ContentSub">Bags, Wallets and Luggage</div>
                        <div className="ContentSub">Beauty</div>
                        <div className="ContentSub">Clothing & Accessories</div>
                        <div className="ContentSub">Computers & Accessories</div>
                        <div className="ContentSub">Grocery & Gourmet Foods</div>
                        <div className="ContentSub">Health & Personal Care</div>


                    </div>
                </div>

                <div className="rightPage">
            <div className="productTopBanner"> 1-5 of 5 results for <span className='TopbannerSpan'>Macbooks</span>
            </div>
            <div className="itemImagePage">

            {
                ProductDetail.product.map((item,index) =>{
                    return(
                           
                        <div className="pageOne" key={item.id}>
                        <div className="rk">
                            <img src={item.imageUrl} alt="" className='pageImgProduct' />
                        </div>
                        <div className="Nameproduct">
                            <div> {item.name} </div>
                            <div className="rating">
                            <MdStarRate style={{ fontSize: "20px", color: "#FFD700" }} />
                            <MdStarRate style={{ fontSize: "20px", color: "#FFD700" }} />
                            <MdStarRate style={{ fontSize: "20px", color: "#FFD700" }} />
                            <MdStarRate style={{ fontSize: "20px", color: "#FFD700" }} />
                            <FaRegStar style={{ fontSize: "20px", color: "#FFD700" }} />
    
    
                            </div>
                            <div className="prize">
                                <div className="currency">₹</div>
                                <div className="rateHome">
                                    <div className="price">{item.price}</div>
                                    <div className="addto" onClick={() => {handleAddToCart(item)}} >
                                        Add To Cart
                                    </div>
                                </div>
                            </div>
                            <div className="offpage">Upto 10% Off on select cards</div>
                            <div className="free">Free Delivery By Amazon</div>
                        </div>
                    </div>
                    )
                })
            }

            </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Product;
