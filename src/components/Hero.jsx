import React from "react";
import PagesLayout from "../app/pagesLayout";
import Image from "next/image";
import LogoHero from "../assets/image/logoHero.png";


const Hero = () => {
  return (
    <>
      <section className="relative h-[90vh] w-full overflow-hidden mt-12">
        {/* Video de fondo */}
        <video
          className="absolute top-0 left-0 bottom-10 w-full h-full object-cover"
          title="vimeo-player"
          src="./Hero.mp4"
          loop
          preload="auto"
          autoPlay
          muted
        ></video>

        {/* Overlay semitransparente */}
        <div className="absolute top-0 left-0 w-full h-[90vh] bg-black bg-opacity-50"></div>

        {/* Contenido del Hero */}
        <div className="relative z-10 flex flex-col items-center justify-end pb-24 h-full text-center p-4">
          <Image
            src={LogoHero}
            alt=""
            width={350}
            height={350}
            loading="lazy"
          />
        </div>
      </section>

      <PagesLayout>
        <section className="text-center">
          <h2 className="mb-5">
            Magia y Estilo en tu
            <span className="text-[#947752]"> Vestido</span>
          </h2>
          <p>
            En Casa de Eventos Gaby, te invitamos a descubrir una experiencia
            única al alquilar tu vestido. Cada prenda ha sido cuidadosamente
            seleccionada para que vivas momentos mágicos desde el primer
            instante. Además, nuestro equipo de expertos te acompañará en cada
            paso del proceso, brindándote asesoría personalizada para que vivas
            una experiencia inolvidable y sin preocupaciones.
          </p>
        </section>
      </PagesLayout>
    </>
  );
};

export default Hero;
