import React from 'react'
import "./item.css"


const ItemProduct = () => {
  return (
    <>
      <div className='div'>
        <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/c9f5c5c4-61ee-4fe7-add9-9e1d3ec50fe9.jpg" alt="" />
      </div>

      <div className='section'>

        <div className="ad-container">
          <h2>Up to 75% off | Wall arts, painting, decor & more</h2>
          <div className="ad-image">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/GW/December/Desktop_CC_Decor_1x._SY304_CB540581077_.jpg"
              alt="Wall arts, painting, decor"
              className="wall-art-image"
            />
          </div>
          <a href="#" className="see-more-link">See more</a>
        </div>



        <div className="ad-container">
          <h2>Up to 50% off | Boult Over-Ear Wireless Headphones </h2>
          <div className="ad-image">
            <img
              src="https://m.media-amazon.com/images/I/41KK9mwNv7L._SX300_SY300_QL70_FMwebp_.jpg"
              alt="Wall arts, painting, decor"
              className="wall-art-image"
            />
          </div>
          <a href="#" className="see-more-link">See more</a>
        </div>



        <div className="ad-container">
          <h2>Up to 75% off | OnePlus Nord 4 5G (Oasis Green)</h2>
          <div className="ad-image">
            <img
              src="https://m.media-amazon.com/images/I/41R3ufWRt8L._SX300_SY300_QL70_FMwebp_.jpg"
              alt="Wall arts, painting, decor"
              className="wall-art-image"
            />
          </div>
          <a href="#" className="see-more-link">See more</a>
        </div>




        <div className="ad-container">
          <h2>Up to 75% off | OnePlus Nord CE4 Lite 5G & more</h2>
          <div className="ad-image">
            <img
              src="https://m.media-amazon.com/images/I/31hcJbP0BuL._AC_UF480,480_SR480,480_.jpg"
              alt="Wall arts, painting, decor"
              className="wall-art-image"
            />
          </div>
          <a href="#" className="see-more-link">See more</a>
        </div>


      </div>


    </>
  )
}

export default ItemProduct
