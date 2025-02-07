import React from "react";
import "./faq.css";

const Faq = () => {
  return (
    <section className="accordion">
      <h2>
        Preguntas <span className="text-[#947752]">Frecuentes</span>
      </h2>
      <article className="accordion-item ">
        <input type="checkbox" id="accordion1" />
        <label htmlFor="accordion1" className="accordion-item-title">
          <span className="icon"></span>¿Cómo puedo agendar una cita para probarme los vestidos?
        </label>
        <article className="accordion-item-desc">
        Es muy sencillo. Solo selecciona los tres vestidos que deseas probarte y elige el día y la hora que mejor te convenga en nuestra página. Una vez hecho esto, serás redirigido(a) a un chat con uno de nuestros asesores, quien se encargará de confirmar y agendar tu cita.
        </article>
      </article>

      <section className="accordion-item">
        <input type="checkbox" id="accordion2" />
        <label htmlFor="accordion2" className="accordion-item-title">
          <span className="icon"></span>¿Qué pasa si no puedo asistir a mi cita programada?
        </label>
        <article className="accordion-item-desc">
        Si no puedes asistir, te pedimos que nos avises con al menos 24 horas de anticipación para reprogramar tu cita sin inconvenientes.
        </article>
      </section>

      <section className="accordion-item">
        <input type="checkbox" id="accordion3" />
        <label htmlFor="accordion3" className="accordion-item-title">
          <span className="icon"></span>¿Puedo probarme vestidos que no seleccioné previamente?
        </label>
        <article className="accordion-item-desc">
        Para garantizar una mejor experiencia, recomendamos probar únicamente los vestidos que seleccionaste al agendar tu cita. Sin embargo, si deseas explorar otras opciones, nuestro equipo estará encantado de ayudarte a programar una nueva cita.
        </article>
      </section>
    </section>
  );
};

export default Faq;
