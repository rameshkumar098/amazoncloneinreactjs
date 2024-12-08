import React from 'react';
import "./Footer.css";
import amazonlogo from "../../Assets/Amazon-Logo.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerContent">

             <div className="footercont1">
                <div className="title">Get To Know Us</div>
                <div className="titleDiv">
                    <div className="titlrCont">About Us</div>
                    <div className="titlrCont">Careers</div>
                    <div className="titlrCont">Press Release</div>
                    <div className="titlrCont">Amazon Science</div>
                </div>
             </div>

             <div className="footercont1">
                <div className="title">Connect With Us</div>
                <div className="titleDiv">
                    <div className="titlrCont">Instagram</div>
                    <div className="titlrCont">Facebook</div>
                    <div className="titlrCont">Twitter</div>
                    <div className="titlrCont">Telegram</div>
                </div>
             </div>


             <div className="footercont1">
                <div className="title">Make Money With Us</div>
                <div className="titleDiv">
                    <div className="titlrCont">Sell on Amazon</div>
                    <div className="titlrCont">Sell under Amazon Accelerator</div>
                    <div className="titlrCont">Protect and Build Your Brand</div>
                    <div className="titlrCont">Amazon Global Selling</div>
                    <div className="titlrCont">Become an Affiliate</div>
                    <div className="titlrCont">Fulfilment by Amazon</div>
                </div>
             </div>


             <div className="footercont1">
                <div className="title">Lets Us Help You</div>
                <div className="titleDiv">
                    <div className="titlrCont">Your Account</div>
                    <div className="titlrCont">Returns Centre</div>
                    <div className="titlrCont">Recalls and Product Safety Alerts</div>
                    <div className="titlrCont">100% Purchase Protection</div>
                    <div className="titlrCont">Amazon App Download</div>
                    <div className="titlrCont">Help</div>
                </div>
             </div>

        </div>
        <div className="amazonImg">
            <img className='amazonFooterimg' src={amazonlogo} alt="" />
        </div>
      
    </div>
  )
}

export default Footer;
