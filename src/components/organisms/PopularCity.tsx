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
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FNaurah%20Annisa%20Wahyudi?alt=media&token=c9f4af46-9521-445f-946f-2d1aaaedfec3",
        "Prancis"
    ),
    new City(
        "Bern",
        "https://cdn.pixabay.com/photo/2018/08/01/12/44/bern-3576675_960_720.jpg",
        "Swiss"
    ),
    new City(
        "Amsterdam",
        "https://cdn.pixabay.com/photo/2018/03/02/15/36/amsterdam-3199196_960_720.jpg",
        "Belanda"
    ),
    new City(
        "London",
        "https://cdn.pixabay.com/photo/2018/06/19/08/16/big-ben-3484054_960_720.jpg",
        "Inggris"
    ),
    new City(
        "Roma",
        "https://cdn.pixabay.com/photo/2018/01/04/14/18/rome-3052923_960_720.jpg",
        "Italia"
    ),
    new City(
        "Zurich",
        "https://cdn.pixabay.com/photo/2019/03/22/11/42/zurich-4072764_960_720.jpg",
        "Swiss"
    ),
    new City(
        "Praha",
        "https://cdn.pixabay.com/photo/2016/06/25/12/44/prague-1479925_960_720.jpg",
        "Ceko"
    ),
    new City(
        "Berlin",
        "https://cdn.pixabay.com/photo/2016/10/17/17/55/berlin-1751097_960_720.jpg",
        "Jerman"
    ),
    new City(
        "Liverpool",
        "https://cdn.pixabay.com/photo/2019/03/10/18/12/liverpool-4041883_960_720.jpg",
        "Inggris"
    ),
    new City(
        "Istanbul",
        "https://cdn.pixabay.com/photo/2019/03/28/19/21/istanbul-4087630_960_720.jpg",
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
