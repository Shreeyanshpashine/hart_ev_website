/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

function Home() {

  useEffect(() => {
    const herobg = document.querySelector(".main");
    
    const intervalId = setInterval(() => {
      herobg.style.backgroundImage = "url(images/bg-light.jpg)";
      
      const timeoutId = setTimeout(() => {
        herobg.style.backgroundImage = "url(images/bg.jpg)";
      }, 1000);
      
      return () => clearTimeout(timeoutId);
    }, 2200);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="main bg-[url('/images/bg.jpg')] h-[100vh] w-full bg-center bg-cover">
      <div className="h-[60vh] w-[60vw]">
        <img src="images/logo.png" alt="logo" className="h-[70vh] w-[60vw]" />
      </div>
    </div>
  );
}

export default Home;
