import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import img1 from '../assets/DRAMA1.jpg';
import img2 from '../assets/DRAMA2.jpg';
import img3 from '../assets/DRAMA3.jpg';
import img4 from '../assets/DRAMA4.jpg';


const DramaHori = () => {
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
      className="group relative h-[450px] w-[850px] min-w-[200px] overflow-hidden cursor-pointer flex border border-solid border-gray p-2 rounded-md items-center gap-32 pl-5"
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

export default DramaHori;


const cards = [
    {
        id:"1",
        title:"AKASMIK",
        img:img1,
        description:"Aakasmik is an improv drama competition where teams improvise performances on-the-spot, responding to given topics. It challenges creativity, teamwork, and quick thinking, delivering spontaneous and entertaining acts."
    },
    {
        id:"2",
        title:"EKAM",
        img:img2,

        description:"Ekam is a solo acting competition where participants showcase their theatrical skills individually, performing diverse roles and expressing a range of emotions."
    },
    {
        id:"3",
        title:"PRATIDHWANI",
        img:img3,

        description:"Pratidhwani is a dynamic street play competition where teams perform live, tackling social issues, captivating audiences with impactful messages, and demonstrating innovative storytelling."

    },
    {
        id:"4",
        title:"VISMAY",
        img:img4,

        description:"Vismaya is a stage play competition featuring theatrical performances by teams, highlighting creativity, storytelling, and dramatic prowess on stage, captivating audiences with diverse narratives and compelling characters."

    },
];