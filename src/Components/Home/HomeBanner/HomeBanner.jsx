import React from 'react';
import "./HomeBanner.css";
import homeBannerItemProduct from "../../../Homeproduct.json";

const HomeBanner = () => {
    return (
        <div className='homeBanner'>
            <img className='homeBannerImg' src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/PC_Hero_2x-toys_1._CB582765723_.jpg" alt="" />
            <div className="grayBackgroundHomeBanner"></div>
            <div className="homeBannerItemDiv">

          {
            homeBannerItemProduct.product.map((item,ind) =>{
                return(

                <div className="homeBannerItemDivCard">
                    <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
                    <div className="imgHomeBannerItemDivCard">
                        {
                            item.imgs.map((it, ind)=>{
                                return(

                                    <div className="imgBannerHomeDiv">
                                        <img className='imgBannerHomeDivImg' src={it} alt="" />
                                        <div className="imgBannerImgName">Cushion covers, bedsheets & more</div>
                                    </div>
                                   
                                )
                            })
                        }
                        
                       
                    </div>
                    <div className="seeMore">See More</div>
                </div>

                )
            })
          }



            </div>
        </div>
    )
}

export default HomeBanner;
