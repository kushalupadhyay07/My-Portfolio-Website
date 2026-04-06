import React, { useEffect, useState } from "react";

export default function Customcursor() {
  let [postion, setpostion] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function handler(e) {
      let X = e.clientX;
      let Y = e.clientY;
      setpostion({ x: X, y: Y });
    }
    window.addEventListener("mousemove", handler);
    return ()=>{
      window.removeEventListener("mousemove",handler)
    }
  });

  return (
    <div
      className="pointer-events-none fixed z-[9999] top-0 left-0 "
      style={{
        transform: `translate(${postion.x - 50}px , ${postion.y - 50}px)`,
      }}
    >
      <div className="w-30 h-30 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 opacity-50  shadow-2xl blur-2xl "></div>
    </div>
  );
}
