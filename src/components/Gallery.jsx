import React from "react";

const Gallery = () => {
  return (
    <section className="m-0">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 shadow-xl object-cover ">
        <img
          className="w-full h-[100vh] object-cover"
          src="https://i.imgur.com/FUrOi3B.png"
          alt="Image 1"
          loading="lazy"
        />
        <img
          className="w-full h-[100vh] object-cover"
          src="https://i.imgur.com/6lDzos4.png"
          alt="Image 2"
          loading="lazy"
        />
        <img
          className="w-full h-[100vh] object-cover"
          src="https://i.imgur.com/hvPQAxm.jpg"
          alt="Image 3"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Gallery;
