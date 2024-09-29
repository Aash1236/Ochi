import React from "react";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full p-20 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68] text-black "
    >
      <h1 className="font-['Neue_Montreal_Regular'] text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>

      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#91a549] ">
        <div className="w-1/2">
          <h1 className="text-7xl">Our Approch:</h1>
          <button className="flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">
            Read More
            <div className="w-3 h-3 bg-zinc-200 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[50vh] w-[70vh] rounded-3xl bg-red-600 bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')]"></div>
      </div>
    </div>
  );
}

export default About;
