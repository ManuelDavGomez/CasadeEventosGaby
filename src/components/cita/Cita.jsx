import React from "react";
import "./cita.css";

const Cita = () => {
  return (
    <section className="bg-[#efe5e0] text-white py-16 px-6 text-center mt-32 shadow-xl flex items-center justify-center background1 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
      <section className="max-w-4xl mx-auto z-40">
        <p className="text-lg mb-6">
          No pierdas más tiempo, reserva fácilmente y asegura tu lugar para
          disfrutar lo mejor que tenemos para ofrecer. 🕒✨ Haz clic en el botón
          y déjanos ser parte de tu día.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/pages/cita"
            className="bg-[#947752] text-white font-semibold px-6 py-3 rounded-xl shadow-xl hover:bg-[#FFD700] transition hover:text-black"
          >
            Agenda tu cita
          </a>
        </div>
      </section>
    </section>
  );
};

export default Cita;
