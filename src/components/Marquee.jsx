import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
        <motion.h1 className="text-[16vw] leading-none font-[Test_Founders_Gtsk_X-Cond_SmB] uppercase mb-[3vw] pt-10 font-semibold">
          We are ochii
        </motion.h1>
        <motion.h1 className="text-[16vw] leading-none font-[Test_Founders_Gtsk_X-Cond_SmB] uppercase mb-[3vw] pt-10 font-semibold">
          We are ochii
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
