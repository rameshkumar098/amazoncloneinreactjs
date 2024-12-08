import React from "react";
import "./navbarBelt.css";
import amazonLogo from "../../../Assets/Amazon-Logo.png";
import india from "../../../Assets/Flag_of_India.svg.webp";
import { SlLocationPin } from "react-icons/sl";
import { FiShoppingCart } from "react-icons/fi";

import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarBelt = () => {

const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="navbarBelt">
      <div className="leftNavBelt">
        <Link to={'/'} className="leftNavBeltLogo">
          <img className="amazonLogoNavbar" src={amazonLogo} alt="amazonLogo" />
          <span className="navbar_inLogo">.in</span>
        </Link>
        <div className="navbarBeltLocation">
          <div className="navbarBeltLocationImg">
            <SlLocationPin
              className="navbarBeltLocationImgIcon "
              sx={{ fontSize: "22px" }}
            />
          </div>
          <div className="navbarBeltLocationPlace">
            <div className="navbarBeltLocationTop">
              Delivering to Jaipur 303702
            </div>
            <div className="navbarBeltLocationBottom">Update Location</div>
          </div>
        </div>
      </div>
      <div className="navbarBeltSearchBox">
        <div className="navbarBeltSearchDiv">
          <div className="navbarBeltSearchBoxAll">
            <div className="navbarBeltSearchBoxAllText">All</div>
            <MdOutlineArrowDropDownCircle sx={{ fontSize: "20px" }} />
          </div>
          <input
            type="text"
            className="navbarBeltInputSearchBox"
            placeholder="Search Amazon.in"
          />
          <div className="searchIconNavbarBelt">
            <IoSearch
              sx={{ fontSize: "26px" }}
              className="searchIconNavbarBeltIcon"
            />
          </div>
        </div>
      </div>
      <div className="rightSide">
        <div className="indiaFlagCode">
          <img src={india} alt="indiaflag" className="indiaFlag" />
          <div className="indiaCodeNavbarBelt">
            EN
            <MdOutlineArrowDropDownCircle
              sx={{ fontSize: 16, marginTop: 1, marginLeft: -0.4 }}
              className="indiaCodeNavbarBeltDrp"/>
          </div>
        </div>
        
      </div>
      <div className="signIn">
          <div className="helloTopNavbarBelt">Hello, User</div>
          <div className="indiaCodeNavbarBelt">Account & Lists</div>
        </div>
        <div className="signIn">
          <div className="helloTopNavbarBelt">Returns</div>
          <div className="indiaCodeNavbarBelt"> & Orders</div>
        </div>

        <Link to={'/Cart'} className="SignIn">
          <span className="cartItemNumberNavbarBelt">{cartItems.length}</span>
          <div className="TopNavbarBelt"><FiShoppingCart />
          <span className="cartTitle"> Cart</span>
          </div>
          </Link>    
          </div>
  );
};

export default NavbarBelt;
