import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import img1 from '../assets/englishclub2.jpg';
import img2 from '../assets/englishclub3.jpg';
import img3 from '../assets/englishclub4.jpg';
import img4 from '../assets/englishclub5.jpg';


const EnglishHori = () => {
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

export default EnglishHori;


const cards = [
    {
        id:"1",
        title:"WordQuest",
        img:img4,
        description:"Get ready for the ultimate showdown of linguistic brilliance at WordQuest. Two-member teams, put their brains on stake for word games, anagrams, and trivia to claim victory in this thrilling competition!"
    },
    {
        id:"2",
        title:"JAM",
        img:img3,
        description:"Step into the electrifying world of Just a Minute, where contestants showcase their literary prowess in one exhilarating minute! From witty anecdotes to profound reflections, it's a celebration of storytelling at its most captivating and concise."
    },
    {
        id:"3",
        title:"Debattle",
        img:img2,
        description:"Step into the fierce battleground of intellect and persuasion at 'Debattle'! Arm yourself with wit and logic as you clash in thrilling showdowns of structured debates, where only the most agile minds emerge victorious!"

    },
    {
        id:"4",
        title:"Slam Poetry",
        img:img1,
        description:"Ignite the stage with your raw poetic power at the Slam Poetry event! Each word becomes aweapon, each verse a revolution. As you seize the mic and let your soul's rhythm flow, enthralling all with your unique voice."
    },
    
];