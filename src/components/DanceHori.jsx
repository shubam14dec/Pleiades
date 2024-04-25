import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import img2 from '../assets/DANCE2.jpg';
import img1 from '../assets/DANCE3.jpg';
import img3 from '../assets/DANCE4.jpg';
import img4 from '../assets/DANCE5.jpg';
import img5 from '../assets/DANCE6.jpg';


const DanceHori = () => {
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

export default DanceHori;


const cards = [
    {
        id:"1",
        title:"GROOVE GALA",
        img:img1,
        description:"Dance is the timeless expression of joy, passion, and unity. As you take the stage at Groove Gala's Open Theme Group Dance Competition, let every step, every gesture, embody the essence of your team's synchronicity and camaraderie. With each movement, write a story of collective creativity and dedication that resonates with our judges and audience, transcending boundaries and touching hearts."
    },
    {
        id:"2",
        title:"SYNERGY",
        img:img2,

        description:"The Ananda Tandava the divine dance of Shiva and Parvati, is an enchanting symphony of cosmic unity, where their synchronized movements evoke the essence of nature's beauty, captivating the world. Bring your unique styles and energies, blending them seamlessly to form a captivating synergy of movement, rhythm, and emotion. It's a platform where partnerships are forged, creativity flourishes, and the joy of dance transcends boundaries."
    },
    {
        id:"3",
        title:"STEP STRIFE",
        img:img3,

        description:"Feel the pulse of the music as you stand alone in the spotlight, ready to ignite the stage with your solo performance at Solo Strife's Dance Competition. With every step, let your soul speak through movement, weaving a story that captivates the hearts of our judges and spectators. This is your moment to shine, to showcase your unique style and passion, leaving an indelible mark on the dance floor."

    },
    {
        id:"4",
        title:"TALA TARANGINI",
        img:img4,

        description:"Step into the sacred realm of Indian classical dance at Tala Tarangini, where each movement tells a story as old as time itself.Let the essence of Bharatanatyam, Kathak, Odissi, or any classical form you choose, flow through you. With every gesture and expression, channel the grace and beauty of these timeless traditions, enchanting our judges and audience with the richness of our cultural heritage."

    },
    {
        id:"4",
        title:"STEP UP DEBATTLE",
        img:img5,

        description:"Prepare for an adrenaline-fueled dance showdown like no other at Step Up DeBattle! Dancers will go head-to-head in intense one-on-one faceoffs, showcasing their individual flair and skill in a battle for supremacy. Each round will be a thrilling display of creativity, as competitors bring their A-game to the floor, leaving it all on the line for a chance at glory."

    },
    
];