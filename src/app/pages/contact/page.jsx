import React from "react";
import PagesLayout from "@/app/pagesLayout";
import "./contact.css";
import Link from "next/link";

const page = () => {
  return (
    <>
      <PagesLayout>
        <section className="contact container">
          <form action="https://formspree.io/f/xrbeknop" method="POST">
            <section className="form">
              <section className="form-txt">
                <h1>Contactanos</h1>
                <p className="tracking-wider">
                  Si tienes alguna pregunta, propuesta o simplemente quieres
                  ponerte en contacto, no dudes en escribirme. Estoy disponible
                  para colaboraciones, proyectos y consultas. <br /> <br />
                  También puedes enviarme un mensaje a través del formulario de
                  contacto y te responderé lo antes posible. ¡Espero saber de ti
                  pronto!
                </p>
                <ul className="flex justify-start gap-6 mt-8 md:gap-8 sm:justify-start">
                  <li>
                    <Link
                      href="https://api.whatsapp.com/send?phone=573208950019"
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

                  <li>
                    <Link
                      href="https://www.instagram.com/vestidos.gaby?igsh=ZzRneXZyemtydnhi&utm_source=qr"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 hover:fill-[#FFD700] transition"
                        viewBox="0 0 24 24"
                        fill="#947752"
                      >
                        <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
                      </svg>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="https://www.tiktok.com/@casade_eventosgab?_t=ZS-8tYfuEZmoK0&_r=1"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="sr-only">Tiktok</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 hover:fill-[#FFD700] transition"
                        viewBox="0 0 24 24"
                        fill="#947752"
                      >
                        <path d="M22.5 9.84202C20.4357 9.84696 18.4221 9.20321 16.7435 8.00171V16.3813C16.7429 17.9333 16.2685 19.4482 15.3838 20.7233C14.499 21.9984 13.246 22.973 11.7923 23.5168C10.3387 24.0606 8.75362 24.1477 7.24914 23.7664C5.74466 23.3851 4.39245 22.5536 3.37333 21.383C2.3542 20.2125 1.71674 18.7587 1.54617 17.2161C1.3756 15.6735 1.68007 14.1156 2.41884 12.7507C3.15762 11.3858 4.2955 10.279 5.68034 9.57823C7.06517 8.87746 8.63095 8.61616 10.1683 8.82927V13.0439C9.4648 12.8227 8.70938 12.8293 8.0099 13.063C7.31041 13.2966 6.70265 13.7453 6.2734 14.345C5.84415 14.9446 5.61536 15.6646 5.6197 16.402C5.62404 17.1395 5.8613 17.8567 6.29759 18.4512C6.73387 19.0458 7.34688 19.4873 8.04906 19.7127C8.75125 19.9381 9.5067 19.9359 10.2075 19.7063C10.9084 19.4768 11.5188 19.0316 11.9515 18.4345C12.3843 17.8374 12.6173 17.1188 12.6173 16.3813V0H16.7435C16.7406 0.348435 16.7698 0.696395 16.8307 1.03948V1.03948C16.9741 1.80537 17.2722 2.53396 17.7068 3.18068C18.1415 3.8274 18.7035 4.37867 19.3585 4.80075C20.2903 5.41688 21.3829 5.74528 22.5 5.74505V9.84202Z" />
                      </svg>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="https://www.instagram.com/casade_eventosgaby?igsh=MTN5Zmk0dmQ4Znkwaw%3D%3D&utm_source=qr"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 hover:fill-[#FFD700] transition"
                        viewBox="0 0 24 24"
                        fill="#947752"
                      >
                        <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </section>
              <div className="form-details">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                  autoComplete="off"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                  autoComplete="off"
                />
                <textarea
                  name="message"
                  id="message"
                  cols="52"
                  rows="7"
                  placeholder="Message"
                  required 
                  
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#947752] text-white px-6 py-3 rounded-xl mt-5 ml-3 shadow-xl hover:bg-[#FFD700] transition hover:text-black"
                >
                  Enviar Mensaje
                </button>
              </div>
            </section>
          </form>
        </section>
      </PagesLayout>
      <section className="mapouter">
        <section className="gmap_canvas">
          <iframe
            className="gmap_iframe"
            width="100%"
            height={400}
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Cra. 6 13-19, La Dorada, Caldas, Colombia&amp;t=k&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </section>
      </section>
    </>
  );
};

export default page;
