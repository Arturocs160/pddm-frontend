"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function Carousel() {

  const ejemploCarousel = [
    {
      idImagen: "1",
      titulo: "lorem ipsum 1",
      descripcion: "lorem ipsum",
      ubicacionImagen: "/assets/fondo.jpg",
    },
    {
      idImagen: "2",
      titulo: "lorem ipsum 2",
      descripcion: "lorem ipsum",
      ubicacionImagen: "/assets/i1.jpg",
    },
    {
      idImagen: "3",
      titulo: "lorem ipsum 3",
      descripcion: "lorem ipsum",
      ubicacionImagen: "/assets/fondo.jpg",
    },
    {
      idImagen: "4",
      titulo: "lorem ipsum 4",
      descripcion: "lorem ipsum",
      ubicacionImagen: "/assets/i1.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 6000,
          pauseOnHover: true,
          speed: 1000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {
          ejemploCarousel.map( (imagenCarousel) => {
            return(
              <div key={imagenCarousel.idImagen}>
              <img src={imagenCarousel.ubicacionImagen} className="opacity-70" ></img>
              <div>
                <div className="bg-red-700 w-5 h-44 relative bottom-80 left-11 "></div>
                <h1 className="relative bottom-96 left-20 text-5xl text-white">
                  {imagenCarousel.titulo}
                </h1>
              </div>
            </div>
            )
          })
        }
      </Slider>
    </div>
  );
}
