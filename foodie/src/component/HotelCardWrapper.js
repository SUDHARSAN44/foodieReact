import React, { useState, useEffect } from "react";

import '../styles/HotelCardWrapper.css'

// var hotel_card_image = 'https://media.istockphoto.com/photos/indian-hindu-veg-thali-food-platter-selective-focus-picture-id1158578874?k=20&m=1158578874&s=612x612&w=0&h=nsDq0x82Td02zHQKAOBB0pdY-kVzpN5P_qpXbUxsLB4='

const HotelCardWrapper = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('https://myjson.dit.upm.es/api/bins/4k1m');
            const json = await data.json();
            setData(json);
        }

            fetchData()
            .catch(console.error);

    }, [])

    console.log(data)
    return (
            <>{data.map((hotel)=>{
               return(
                <div className="hotel-card-wrapper">
                <div className="hotel-card-image-wrapper">
                    <img src={hotel.thumbnail_image}
                        alt=""></img>
                </div>

                <div className="hotel-name">
                    {hotel.name}
                </div>
                <div className="hotel-categories">
                {hotel.cuisines}
                </div>

                <div className="hotel-review">
                    {hotel.reviews} reviews
                </div>
                </div>
               )

            })}</>

    )
}

export default HotelCardWrapper