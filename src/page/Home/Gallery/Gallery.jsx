import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    fetch("/gallery.json")
      .then((res) => res.json())
      .then((data) => {
        setGallery(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <div>
        <h2 className="text-center text-sky-900 font-bold text-4xl mt-12 p-[30px]">
          Gallery
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2  mt-8">
        {gallery.map((item) => {
          return (
            <div>
              <img
                className="w-full h-60 object-cover rounded-lg"
                src={item.image}
                alt="Shoes"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
