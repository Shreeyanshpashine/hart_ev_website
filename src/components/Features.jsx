import React from "react";

function Features() {
  return (
    <div className="h-screen w-[100%] bg-black py-5 px-14 text-center">
      <h1 className="font-semibold text-5xl text-white">Features</h1>
      <div className="h-full w-full p-2 flex items-center justify-between">
        <div className="w-[45%]">
          <p className="text-white text-xl leading-9">
            At Hartalkar Inoovations, we believe in the power of technology to
            drive positive change. Our electric vehicles embody the latest
            advancements, emphasizing environmental consciousness and energy
            efficiency. With a steadfast commitment to reducing carbon
            footprints, our EVs are not just vehicles; they are catalysts for
            cleaner air and a greener tomorrow.
          </p>
        </div>
        <div className="w-[45%]">
          <img src="images/sideimg2.jpg" alt="err" className="rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default Features;
