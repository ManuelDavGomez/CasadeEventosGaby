"use client";

import { useCart } from "../../../context/CartContext.jsx";
import Image from "next/image.js";
import Link from "next/link.js";
import { useState } from "react";

export default function DressDetails({ item }) {
  const { addToCart, removeFromCart, cart } = useCart();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeZoom = () => {
    setSelectedImage(null);
  };

  // Verifica si el producto está en el carrito
  const inCart = cart.some((cartItem) => cartItem.id === item.id);

  const vestidoUrl = `https://casadeeventosgaby.com/pages/dresses/${item.id}`;
  const shareText = `Mira este vestido que encontre ${vestidoUrl}`;

  const copyLinkToClipboard = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
      alert("¡Enlace copiado al portapapeles!"); // Mensaje de confirmación
    } catch (err) {
      console.error("Error al copiar el enlace: ", err);
      alert("No se pudo copiar el enlace."); // Mensaje de error
    }
  };

  return (
    <>
      <section className="flex flex-col items-center text-start justify-center sm:text-center lg:text-start lg:flex-row gap-10">
        <article className="lg:w-[75%]">
          <Image
            src={item.imagePrincipal}
            alt={item.name}
            width={500}
            height={500}
            loading="lazy"
            className="shadow-xl object-cover"
          />
        </article>

        <article className="w-full lg:w-[80%] ">
          <h1 className="mb-5">{item.name}</h1>
          <p className="text-gray-500 text-[22px]">
            $ {item.price.toLocaleString("es-ES")}
          </p>
          <p className="mb-5">SKU: #{item.id}</p>
          <p>
            Quince años no son solo una edad, sino el comienzo de un viaje lleno
            de sueños, esperanzas y nuevas historias por escribir.
          </p>

          <article className="flex items-start gap-3 mt-5 min-[640px]:mx-auto w-[161px] min-[1024px]:mx-0">
            <button
              onClick={() => addToCart(item)}
              disabled={inCart}
              className={`p-2 flex items-center justify-center rounded-lg transition-all duration-300 focus:outline-none ${
                inCart
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed transition-all duration-300"
                  : "bg-[#947752] text-white"
              }`}
            >
              Alquilar
            </button>

            <button
              onClick={() => removeFromCart(item.id)}
              className="p-2 flex items-center justify-center border bg-[#947752] rounded-lg text-white hover:bg-[#FFD700] transition hover:text-black duration-300 focus:outline-none"
            >
              Eliminar
            </button>
          </article>
          <h4 className="mt-10 mb-5">Compartir Vestido</h4>
          <ul className="flex justify-start flex-row gap-6 sm:justify-center lg:justify-start">
            <li className="flex justify-start sm:justify-center lg:justify-start">
              <Link
                href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="sr-only">WhatsApp</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 hover:fill-[#FFD700] transition"
                  viewBox="0 0 24 24"
                  fill="#947752"
                >
                  <path d="M24 11.7c0 6.45-5.27 11.68-11.78 11.68-2.07 0-4-.53-5.7-1.45L0 24l2.13-6.27a11.57 11.57 0 0 1-1.7-6.04C.44 5.23 5.72 0 12.23 0 18.72 0 24 5.23 24 11.7M12.22 1.85c-5.46 0-9.9 4.41-9.9 9.83 0 2.15.7 4.14 1.88 5.76L2.96 21.1l3.8-1.2a9.9 9.9 0 0 0 5.46 1.62c5.46 0 9.9-4.4 9.9-9.83a9.88 9.88 0 0 0-9.9-9.83m5.95 12.52c-.08-.12-.27-.19-.56-.33-.28-.14-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.14-.2.29-.75.93-.91 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.43a8.64 8.64 0 0 1-1.6-1.98c-.18-.29-.03-.44.12-.58.13-.13.29-.34.43-.5.15-.17.2-.3.29-.48.1-.2.05-.36-.02-.5-.08-.15-.65-1.56-.9-2.13-.24-.58-.48-.48-.64-.48-.17 0-.37-.03-.56-.03-.2 0-.5.08-.77.36-.26.29-1 .98-1 2.4 0 1.4 1.03 2.76 1.17 2.96.14.19 2 3.17 4.93 4.32 2.94 1.15 2.94.77 3.47.72.53-.05 1.7-.7 1.95-1.36.24-.67.24-1.25.17-1.37" />
                </svg>
              </Link>
            </li>
            <li className="flex justify-start sm:justify-center lg:justify-start">
              <button
                onClick={() => copyLinkToClipboard(vestidoUrl)}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#000",
                  cursor: "pointer",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 hover:stroke-[#FFD700] transition"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#947752"
                  strokeWidth="2"
                  strokeLinecap="butt"
                  strokeLinejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </li>
          </ul>
        </article>
      </section>

      <article className="h-[100%] mt-20">
        <iframe
          src={item.videosUrl}
          title={item.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-[90vw] h-[60vw] min-[640px]:w-[80vw] min-[640px]:h-[50vw] min-[896px]:w-[70vw] min-[896px]:h-[45vw] min-[1150px]:w-[1000px] min-[1150px]:h-[600px]"
        >Video NO soportado</iframe>
      </article>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-32">
        {item.images.map((image, index) => (
          <article key={index} onClick={() => handleImageClick(image)}>
            <Image
              src={image}
              alt={item.name}
              width={400}
              height={400}
              loading="lazy"
              className="shadow-xl object-cover w-full h-full cursor-pointer hover:scale-105 duration-300"
            />
          </article>
        ))}

        {selectedImage && (
          <section
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeZoom}
          >
            <section className="relative max-w-xs max-h-full min-[540px]:max-w-sm min-[1920px]:max-w-lg  min-[2100px]:max-w-xl min-[2400px]:max-w-[90vw]">
              <Image
                src={selectedImage}
                alt="Zoomed Image"
                width={600}
                height={300}
                loading="lazy"
                className="object-contain"
              />
              <button
                onClick={closeZoom}
                className="absolute top-4 right-5 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
              >
                &times;
              </button>
            </section>
          </section>
        )}
      </section>
    </>
  );
}
