import React from 'react';
import "./navbarBanner.css";
import { TiThMenu } from "react-icons/ti";
import { Link } from 'react-router-dom';


const NavbarBanner = () => {
  const options = [
    { "name": "Fresh" },
    { "name": "Amazon miniT" },
    { "name": "Sell" },
    { "name": "Best Sellers" },
    { "name": "Today's Deals" },
    { "name": "Mobiles" },
    { "name": "Eletronics" },
    { "name": "Prime" },
    { "name": "Customer Services" },
    { "name": "Fashion" },
    { "name": "Home & Kitchen" },

  ]
  return (
    <div className='navbarBanner'>
      <div className="navbarBannerOptionLeft">
        <div className="optionNavbarBanner">
          <TiThMenu sx={{ fontSize: "24px" }} />
          <div className="allOptionNavbarBanner">All</div>
           </div>
        {
          options.map((item, ind) => {
            return (
              <Link to={'/Product'} className='optionNavbarBanner' key={ind}>
                <div className="allOptionNavbarBanner">{item.name}</div>
              </Link>
            )
          })
        }
      </div>
      <div className='navbarBannerRightSide'>
        <div className="optionNavbarBanner">
          <div className="allOptionNavbarBanner">Prime Day is Dec 1th & 5th</div>
        </div>
      </div>
    </div>
  )
}

export default NavbarBanner;
