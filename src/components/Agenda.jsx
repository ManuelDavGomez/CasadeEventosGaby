"use client";

import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fetchBlockedDates, saveBlockedDates } from "../lib/firebase.js";

export default function Agenda({ dressId,dressName, dressSku, rentalPrice }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [blockedDates, setBlockedDates] = useState([]);
  const [selectedDressId, setSelectedDressId] = useState(dressId);

  // Actualizar selectedDressId cuando dressId cambie
  useEffect(() => {
    setSelectedDressId(dressId);
  }, [dressId]);

  // Cargar fechas bloqueadas para el vestido seleccionado
  useEffect(() => {
    const loadBlockedDates = async () => {
      if (!selectedDressId) return;

      try {
        const savedBlockedDates = await fetchBlockedDates(selectedDressId);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Asegurar que solo se usen fechas futuras o actuales
        const updatedBlockedDates = savedBlockedDates
          ? savedBlockedDates.filter((date) => new Date(date) >= today)
          : [];

        setBlockedDates(updatedBlockedDates);
      } catch (error) {
        console.error("Error al cargar fechas bloqueadas:", error);
      }
    };

    loadBlockedDates();
  }, [selectedDressId]);

  // Bloquear la fecha seleccionada
  const blockDate = async () => {
    if (!selectedDate || !selectedDressId) return;

    const selectedDateStr = selectedDate.toDateString();
    
    if (!blockedDates.includes(selectedDateStr)) {
      const updatedBlockedDates = [...blockedDates, selectedDateStr];

      setBlockedDates(updatedBlockedDates);
      await saveBlockedDates(selectedDressId, updatedBlockedDates);

      sendWhatsAppMessage(selectedDate);
      setSelectedDate(null);
    }
  };

  // Enviar mensaje por WhatsApp con la fecha alquilada
  const sendWhatsAppMessage = (date) => {
    const formattedDate = date.toLocaleDateString("es-ES");
    const message = `¡Hola! Quisiera alquilar el siguiente vestido:\n\n` +
                    `- Nombre del vestido: ${dressName}\n` +
                    `- SKU: ${dressSku}\n` +
                    `- Precio de alquiler: $${rentalPrice}\n` +
                    `- Fecha de alquiler: ${formattedDate}\n\n` +
                    `Por favor, confírmenme la disponibilidad. ¡Gracias!`;
    const whatsappLink = `https://wa.me/3208950019?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="pt-5 flex flex-col items-start min-[640px]:items-center min-[1024px]:items-start">
      <h5 className=" mb-1">Selecciona una fecha de alquiler</h5>

      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        minDate={new Date()}
        excludeDates={blockedDates.map((date) => new Date(date))}
        placeholderText="Fecha"
        className="p-1 w-[170px] border rounded"
      />

      {selectedDate && (
        <div className="mt-4">
          <button
            onClick={blockDate}
            className="p-2 bg-green-500 text-white rounded"
          >
            Confirmar alquiler
          </button>
        </div>
      )}
    </div>
  );
}