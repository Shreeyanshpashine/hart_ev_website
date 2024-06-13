/* eslint-disable no-unused-vars */
import React from "react";

const AboutUs = () => {
  return (
    <div className="h-screen w-[100%] bg-black py-5 px-14 text-center">
      <h1 className="font-semibold text-5xl text-white">About Us</h1>
      <div className="h-full w-full p-2 flex items-center justify-between">
        <div className="w-[45%]">
          <img src="images/sideimg.jpg" alt="err" className="rounded-full" />
        </div>
        <div className="w-[45%]">
          <p className="text-white text-xl leading-9">
            Welcome to Hartalkar Innovations, where innovation meets
            sustainability at the forefront of the electric vehicle (EV) sector.
            As trailblazers in the mobility revolution, we are dedicated to
            pioneering innovative EV solutions that redefine transportation for
            a sustainable future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
