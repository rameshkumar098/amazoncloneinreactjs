import React from 'react';
import "./HomeScreen.css";
import HomeBanner from './HomeBanner/HomeBanner';
import HomeDetails from './HomeDetails/HomeDetails';
import ItemProduct from './Moreproduct/ItemProduct'


const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <HomeBanner/>
      <HomeDetails/>
    <ItemProduct/>
      
    </div>
  )
}

export default HomeScreen;
