import Cita from "@/components/cita/Cita.jsx";
import Hero from "@/components/Hero";
import ProductsCarousel from "@/components/ProductsCarousel";
import {products} from "../Data/data.js"
import Gallery from "@/components/Gallery.jsx";

export default function Home() {
  return (
    <>
      <Hero/>
      <ProductsCarousel items={products}/> 
      <Cita/>
      <Gallery/>
    </>
  );
}
