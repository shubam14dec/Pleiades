import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";


const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 4;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const CarouselItem = ({ item }) => {
  return (
    <Link to={"/competition/event1"}>
    <div className="aspect-video w-[700px] shrink-0 rounded-xl bg-neutral-800 object-cover text-white">
      <div className="p-4 flex gap-5">
        <img src={item.img} />
        <div>
        <h2 className="text-5xl font-bold mb-10 text-orange-300">{item.title}</h2>
        <p className="text-xl">{item.description}</p>
        <p className="text-violet-500 mt-10 font-bold">Explore more</p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export const SwipeCarousel = ({items}) => {
  const [itemIndex, setItemIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setItemIndex((prevIndex) => {
          if (prevIndex === items.length - 1) {
            return 0;
          }
          return prevIndex + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  return (
    <div className="relative overflow-hidden py-8 h-[100vh]">
      <motion.div
        animate={{
          translateX: `-${itemIndex * 40}%`,
        }}
        transition={SPRING_OPTIONS}
        className="flex items-center cursor-pointer"
      >
        <Items itemIndex={itemIndex} items={items}/>
      </motion.div>
      

      <Dots itemIndex={itemIndex} setItemIndex={setItemIndex} items={items} />
      <GradientEdges />
    </div>
  );
};

const Items = ({ itemIndex,items }) => {
  return (
    <>
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          animate={{
            scale: itemIndex === idx ? 0.95 : 0.85,
          }}
          transition={SPRING_OPTIONS}
        >
          <CarouselItem item={item} />
        </motion.div>
      ))}
    </>
  );
};

const Dots = ({ itemIndex, setItemIndex,items }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {items.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setItemIndex(idx)}
          className={`h-3 w-3 rounded-full transition-colors ${
            idx === itemIndex ? "bg-neutral-50" : "bg-neutral-500"
          }`}
        />
      ))}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};
