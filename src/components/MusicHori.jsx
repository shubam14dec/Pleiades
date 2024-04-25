import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import img1 from '../assets/MUSIC2.jpg';
import img2 from '../assets/MUSIC3.jpg';
import img3 from '../assets/MUSIC4.jpg';
import img4 from '../assets/MUSIC5.jpg';
import img5 from '../assets/MUSIC6.jpg';



const MusicHori = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[120vh] overflow-x-hidden flex justify-center items-center">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};


const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[850px] min-w-[200px] overflow-hidden flex border border-solid border-gray p-2 rounded-md items-center gap-32 pl-5 cursor-pointer"
    >
      <img
        src={card.img}
        className="z-0 transition-transform duration-300 group-hover:scale-110"
      ></img>
      <div className="z-10 flex flex-col gap-5">
        <p className="bg-gradient-to-br text-3xl font-black uppercase text-white ">
          {card.title}
        </p>
        <p className="bg-gradient-to-br font-black text-l text-white">
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default MusicHori;


const cards = [
    {
        id:"1",
        title:"ACOUSTICWAVE",
        img:img1,
        description:"Join us for an intimate journey through acoustic melodies, where every note resonates with heartfelt authenticity"
    },
    {
        id:"2",
        title:"SANGEETARANG",
        img:img2,

        description:"Join us for a journey through the extraordinary at our one-of-a-kind solo instruments competition"
    },
    {
        id:"3",
        title:"ROCKRAGA",
        img:img3,

        description:"Experience the stimulating rhythm of Indian rock music – a fusion of Western rock strength and colorful Indian tunes"

    },
    {
        id:"4",
        title:"BOLLYBLISS",
        img:img4,

        description:"Experience the enchanting melodies and infectious rhythms that define India's iconic film industry - Bollywood"

    },
    {
        id:"4",
        title:"SWARANJALI",
        img:img5,

        description:"Enjoy the delicate delicacy of Indian classical music. Let each note tell a story of tradition and creativity, as maestros captivate with their brilliance."

    },
    
];