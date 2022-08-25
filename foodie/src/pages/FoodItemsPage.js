import React from 'react'

import NavBar from '../component/NavBar'

import HotelCardWrapper from '../component/HotelCardWrapper'

import '../styles/FoodItemsPage.css'


const FoodItems = ()=>{
    return(
    <>
    <NavBar/>
    <div className="hotel-list-wrapper">
        <HotelCardWrapper/>
    </div>
   
    </>
    )
}

export default FoodItems