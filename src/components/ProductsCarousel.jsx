"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { useState } from "react";

const ProductsCarousel = ({ items }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleBeforeChange = () => {
    setIsDragging(true); // Detecta cuando empieza el drag
  };

  const handleAfterChange = () => {
    setIsDragging(false); // Detecta cuando termina el drag
  };
  const handleMouseDown = () => {
    setIsDragging(true); // Activar el estado de arrastre
  };

  // Función para manejar el fin del arrastre
  const handleMouseUp = () => {
    setIsDragging(false); // Desactivar el estado de arrastre
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    lazyLoad: true,
    autoplay: true,
    arrows: false,
    slidesToScroll: 2,
    initialSlide: 0,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <>
      <section className="block mx-auto w-[90%] min-[1500px]:w-[1300px] mb-10">
        <Slider {...settings}>
          {items.map((item, index) => (
            <Link
              href={`pages/dresses/${item.id}`}
              key={index}
              onClick={(e) => {
                if (isDragging) e.preventDefault(); // Bloquea la navegación si se está arrastrando
              }}
            >
              <section
                className={`focus:outline-none cursor-grab pl-4 ${
                  isDragging ? "cursor-grabbing" : "cursor-pointer"
                }`}
                onMouseDown={handleMouseDown} // Iniciar el arrastre
                onMouseUp={handleMouseUp} // Terminar el arrastre
              >
                {/* Contenedor con tamaño fijo */}
                <div className="w-full h-[500px] overflow-hidden">
                  <Image
                    src={item.imagePrincipal}
                    alt="Image Carusel"
                    width={300}
                    height={300}
                    loading="lazy"
                    className="shadow-xl object-cover w-full h-full" /* Asegura que la imagen cubra el contenedor */
                  />
                </div>
                <h3 className="text-start mt-2 text-xl font-semibold">
                  {item.name}
                </h3>
                <p className="text-start">
                  ${item.price.toLocaleString("es-ES")}
                </p>
              </section>
            </Link>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default ProductsCarousel;
