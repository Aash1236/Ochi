import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full bg-[#004d43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            &copy;2019
          </button>
        </div>
      </div>
      <div className="cardcontainer relative h-[50vh] w-1/2 flex gap-5 items-center justify-center">
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            &copy;2019
          </button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            &copy;2019
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
