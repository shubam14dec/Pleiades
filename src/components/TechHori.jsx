import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Link } from 'react-router-dom'
import img1 from '../assets/computer.jpg';
import img2 from '../assets/biotech.jpg';
import img3 from '../assets/EC.jpg';
import img4 from '../assets/civil.jpg';


const TechHori = () => {
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

export default TechHori;


const cards = [
  {
    id:"1",
    title:"CODE RIDDLES",
    img:img1,
    description:"Welcome to the captivating world of CODE RIDDLES, an individual event where every keystroke leads to victory. Embark on a thrilling journey through cryptic clues and hidden treasures. With rounds of intense competition, participants unravel clues using provided images and texts, each round presenting a new challenge. Creativity, strategy, and speed converge as contestants race against time to claim victory and uncover the ultimate prize!"
},
{
    id:"2",
    title:"BIOCRAFT",
    img:img2,
    description:"Unleash your imagination at the Biology and its affiliated streams Poster Making Competition! Showcase the fusion of art and science, highlighting breakthroughs, innovations, depicting societal concerns, and the limitless potential of science. Let your creativity transform knowledge into captivating visuals!"
},
{
    id:"3",
    title:"EMBEDDED ENIGMA",
    img:img3,

    description:"Embedded Enigma presents a captivating challenge for undergraduate students, focusing on embedded programming skills. This national-level tech fest promises an exciting opportunity for aspiring engineers to test their skills and engage with a problem statement involving ARM microcontrollers. Competitors are tasked with applying their knowledge and creativity to solve this challenge within a specified timeframe."

},
{
    id:"4",
    title:"CONCRETE CANOE",
    img:img4,
    description:"A concrete canoe is exactly what it sounds like—a canoe(boat) made primarily out of concrete! It's a unique engineering challenge where students from various universities compete to design, build, and race canoes(boat) made of concrete. The competitions often focus on design innovation, construction techniques, and the canoe's performance in water."

},
];