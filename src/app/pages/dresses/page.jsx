import React from "react";
import { products } from "../../../Data/data.js";
import Link from "next/link.js";
import Image from "next/image.js";
import PagesLayout from "../../../app/pagesLayout.js";

export const metadata = { 
  title: 'Casa de Eventos Gaby - Vestidos',
  description: 'Welcome to the home page of my awesome website',
};

const page = () => {
  return (
    <>
      <PagesLayout>
        <section className="text-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 gap-y-28">
          {products.map((data, index) => (
            <Link href={`dresses/${data.id}`} key={index}>
              <Image
                src={data.imagePrincipal}
                alt="Video Thumbnail"
                width={500}
                height={500}
                className="hover:scale-105 duration-300 ease-in-out shadow-xl object-cover h-full"
                loading="lazy"
              />
              <h5 className="font-bold mt-5">{data.name}</h5>
              <p className="text-start">${data.price.toLocaleString("es-ES")}</p>
            </Link>
          ))}
        </section>
      </PagesLayout>
    </>
  );
};

export default page;
