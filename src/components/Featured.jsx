import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  // Create separate animation instances for each card
  const cards = [useAnimation(), useAnimation()];

  // Function to handle hover in (start) and hover out (end)
  const handleHoverStart = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] pb-20">
        <h1 className="text-7xl font-['Neue_Montreal_Regular'] tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          {/* Card 1 - FYDE */}
          <motion.div
            onHoverStart={() => handleHoverStart(0)} // Start hover animation
            onHoverEnd={() => handleHoverEnd(0)} // End hover animation
            className="cardcontainer relative w-1/2 h-[80vh]"
          >
            <h1 className="absolute flex left-full text-[#CDEA68] overflow-hidden -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tight font-['Neue_Montreal_Regular']">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index} // Add unique key for each span
                  initial={{ y: "100%" }}
                  animate={cards[0]} // Use the first animation instance
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
                className="w-full h-full bg-cover"
              />
            </div>
          </motion.div>

          {/* Card 2 - VISE */}
          <motion.div
            onHoverStart={() => handleHoverStart(1)} // Start hover animation for card 2
            onHoverEnd={() => handleHoverEnd(1)} // End hover animation for card 2
            className="cardcontainer relative w-1/2 h-[80vh]"
          >
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute flex right-full text-[#CDEA68] overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tight font-['Neue_Montreal_Regular']">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    key={index} // Add unique key for each span
                    initial={{ y: "100%" }}
                    animate={cards[1]} // Use the second animation instance
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
                className="w-full h-full bg-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
