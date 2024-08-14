"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { City } from "../../models/City";
import CityCard from "./PopularCityCard";

const Cities: City[] = [
    new City(
        "Paris",
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2F5cc12ad5-84cc-4c57-a9b7-8af97998c704?alt=media&token=f4b37f93-42fa-4cf6-830e-2e4d32afaf61",
        "Prancis"
    ),
    new City(
        "Bern",
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FBern-City(1).png?alt=media&token=4d7ec828-93dd-4a46-89d7-630e349135ea",
        "Swiss"
    ),
    new City(
        "Amsterdam",
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2F82baab12-2d5f-4e42-9ae0-438bcdc1224d?alt=media&token=b8ae1420-250a-4869-b1cc-01fb66a367ae",
        "Belanda"
    ),
    new City(
        "London",
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F1706723624lucas-davies-iP8ElEhqHeY-unsplash.jpg?alt=media&token=c191c6ec-c7d7-4c46-a3ba-7152dc06d3c2",
        "Inggris"
    ),
    new City(
        "Roma",
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FUntitled%20design%20(19)-min.png?alt=media&token=84487726-2ddc-4ce8-838f-070b8e3d78e7",
        "Italia"
    ),
    new City(
        "Zurich",
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FGallery%201.png?alt=media&token=05b1d2ee-8140-4dd2-840d-98c5223d7d82",
        "Swiss"
    ),
    new City(
        "Praha",
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FUntitled%20design%20(21)-min%20(1).png?alt=media&token=97a44f3f-3efd-4d7d-96be-a5764a79b37f",
        "Ceko"
    ),
    new City(
        "Berlin",
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FUntitled%20design%20(22)-min.png?alt=media&token=671d26df-88cd-4018-9ee4-261085dc4299",
        "Jerman"
    ),
    new City(
        "Liverpool",
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F1695136431neil-martin-nFo5hbJTM8A-unsplash.jpg?alt=media&token=a0182101-fa13-4502-9b80-2afdfd813270",
        "Inggris"
    ),
    new City(
        "Istanbul",
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2F2845db6f-60f5-4cae-8150-eb36790fdb82?alt=media&token=e563b344-e9eb-4e22-8536-24ee73bae5a8",
        "Turki"
    ),
];


const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const PopularCity: React.FC = () => {
    return (
        <div className="container mx-auto mt-14 p-4">
            <h2 className="text-3xl font-extrabold mb-8">
                Kota <span className="text-red-500">Populer</span>
            </h2>
            <Slider {...settings} className="relative">
                {Cities.map((city: City) => (
                    <div key={city.name} className="flex flex-col items-center space-y-2">
                        {/* Pass the city prop to CityCard */}
                        <CityCard city={city} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default PopularCity;
