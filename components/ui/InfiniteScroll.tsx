"use client";
import React, { useState, useEffect } from "react";

interface Props {
  items: string[];
}

export const InfiniteScroll = ({ items }: Props) => {
  const [itemWidth, setItemWidth] = useState(200);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 576) {
        setItemWidth(100); // Ancho para pantallas pequeñas
      } else if (width < 768) {
        setItemWidth(150); // Ancho para pantallas medianas
      } else {
        setItemWidth(200); // Ancho para pantallas grandes
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="wrapperInfiniteScroll">
      {items.map((item, index) => (
        <div
          key={index}
          className="itemInfiniteScroll"
          style={{
            width: itemWidth,
            animationDelay: `calc(35s / ${items.length} * (${items.length} - ${index}) * -1)`,
          }}
        >
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};
