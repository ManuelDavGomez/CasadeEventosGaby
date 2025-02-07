"use client";

import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { fetchBlockedDates, saveBlockedDates } from "../lib/firebase.js";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import Agenda from "./Agenda.jsx";

const Cart = () => {
  const { cart, removeFromCart, getProductTotalPrice, getCartTotalPrice } =
    useCart();
  const [allBlockedDates, setAllBlockedDates] = useState({});

  // Cargar fechas bloqueadas desde Firebase
  useEffect(() => {
    const loadBlockedDates = async () => {
      const savedBlockedDates = await fetchBlockedDates();
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const updatedBlockedDates = {};

      savedBlockedDates.forEach(({ productId, date }) => {
        if (new Date(date) >= today) {
          if (!updatedBlockedDates[productId]) {
            updatedBlockedDates[productId] = [];
          }
          updatedBlockedDates[productId].push(date);
        }
      });

      setAllBlockedDates(updatedBlockedDates);
    };

    loadBlockedDates();
  }, []);

  return (
    <section className="w-[85%] min-[1150px]:w-[1200px] min-[450px]:w-[80%] min-[768px]:w-full mt-40 mx-auto">
      <h1 className="mb-10 text-center">
        Carrito de <span className="text-[#947752]">Alquiler</span>
      </h1>
      {cart.length === 0 ? (
        <p className="text-gray-500 text-center">Tu carrito está vacío</p>
      ) : (
        cart.map((item) => (
          <section
            key={item.id}
            className="flex flex-col md:flex-row items-start gap-4 justify-around"
          >
            <article className="flex gap-5 mb-10">
              <Image
                src={item.imagePrincipal}
                width={150}
                height={150}
                alt={item.name}
                loading="lazy"
                className="shadow-xl"
              />
              <section className="flex flex-col gap-1">
                <p className="font-bold">{item.name}</p>
                <p>Precio: ${item.price.toLocaleString("es-ES")}</p>
                <p>SKU: {item.id}</p>

                {/* Integración de Agenda */}
                <Agenda
                  dressId={item.id} // Pasar dressId en lugar de productId
                  dressName={item.name}
                  dressSku={item.id}
                  rentalPrice={item.price}
                  blockedDates={allBlockedDates[item.id] || []} // Pasar las fechas bloqueadas actuales
                  onBlockDate={(newBlockedDates) => {
                    setAllBlockedDates((prev) => ({
                      ...prev,
                      [item.id]: newBlockedDates,
                    }));
                  }}
                />
              </section>
            </article>
            <section className="flex items-center gap-5">
              <button onClick={() => removeFromCart(item.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#947752"
                  strokeWidth="2"
                  strokeLinecap="butt"
                  strokeLinejoin="round"
                  className="hover:stroke-[#FFD700] transition-all duration-300"
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </button>
              <p>Total: ${getProductTotalPrice(item.id)}</p>
            </section>
            <hr className="border-gray-300 w-full mb-10 mt-5 min-[768px]:hidden" />
          </section>
        ))
      )}
      {cart.length > 0 && (
        <section className="text-center m-auto mt-10 w-[95%] min-[1150px]:w-[1200px] min-[450px]:w-[80%] min-[450px]:text-end">
          <h3>Precio total del carrito: ${getCartTotalPrice()}</h3>
        </section>
      )}
    </section>
  );
};

export default Cart;
