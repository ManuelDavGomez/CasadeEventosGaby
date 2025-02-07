"use client";
import { useState } from "react";
import PagesLayout from "@/app/pagesLayout";

const page = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
  const [contact, setContact] = useState({ name: "", phone: "" });
  const [notes, setNotes] = useState("");

  const generateWhatsAppLink = () => {
    const message = `
Hola, quiero agendar una cita:
- Fecha: ${date}
- Hora: ${time}
- Motivo: ${reason}
- Nombre: ${contact.name}
- Teléfono: ${contact.phone}
- Notas: ${notes}
    `.trim();
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "573208950019"; // Reemplaza con el número de WhatsApp del negocio
    return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  };

  return (
    <PagesLayout>
      <section className="flex flex-col md:flex-row items-center justify-center p-6 gap-x-10">
        {/* Columna de la imagen */}
        <section className="md:w-1/2 w-full mb-6 md:mb-0 ">
          <img
            src="https://i.imgur.com/bRTM6io.jpg" // Reemplaza con tu imagen (debe estar en /public)
            alt="Agendar una cita"
            loading="lazy"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </section>

        {/* Columna del formulario */}
        <section className="md:w-1/2 w-full max-w-lg bg-white shadow-xl rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Agenda tu cita
          </h1>
          <p className="mb-6 text-gray-600">
            Completa los detalles para agendar tu cita fácilmente a través de
            WhatsApp.
          </p>

          {/* Fecha */}
          <section className="mb-4">
            <label className="block font-semibold mb-2">
              Selecciona una fecha:
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border rounded-lg w-full p-2"
              required
            />
          </section>

          {/* Hora */}
          <section className="mb-4">
            <label className="block font-semibold mb-2">
              Selecciona un horario:
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="border rounded-lg w-full p-2"
              required
            />
          </section>

          {/* Motivo */}
          <section className="mb-4">
            <label className="block font-semibold mb-2">
              Motivo de la cita:
            </label>
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="border rounded-lg w-full p-2"
            >
              <option value="" disabled>
                Selecciona el motivo
              </option>
              <option value="Consulta">Prueba de Vestido</option>
            </select>
          </section>

          {/* Información de contacto */}
          <section className="mb-4">
            <label className="block font-semibold mb-2">Tu nombre:</label>
            <input
              type="text"
              placeholder="Escribe tu nombre"
              value={contact.name}
              required
              onChange={(e) =>
                setContact((prev) => ({ ...prev, name: e.target.value }))
              }
              className="border rounded-lg w-full p-2"
            />
          </section>
          <section className="mb-4">
            <label className="block font-semibold mb-2">Tu teléfono:</label>
            <input
              type="tel"
              placeholder="Número de teléfono"
              value={contact.phone}
              required
              onChange={(e) =>
                setContact((prev) => ({ ...prev, phone: e.target.value }))
              }
              className="border rounded-lg w-full p-2"
            />
          </section>

          {/* Notas adicionales */}
          <section className="mb-4">
            <label className="block font-semibold mb-2">
              Notas adicionales:
            </label>
            <textarea
              placeholder="Escribe cualquier detalle adicional..."
              value={notes}
              wrap="soft"
              onChange={(e) => setNotes(e.target.value)}
              className="border rounded-lg w-full p-2 resize-none"
            />
          </section>

          {/* Botón de WhatsApp */}
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 block text-center"
          >
            Enviar a WhatsApp
          </a>
        </section>
      </section>
    </PagesLayout>
  );
};

export default page;
