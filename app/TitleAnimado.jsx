import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function TitleAnimado() {
  const controls = useAnimation();
  const [isYellow, setIsYellow] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const titleMoveControls = useAnimation();
  const subtitleControls = useAnimation();

  useEffect(() => {
    async function sequence() {
      await controls.start({
        strokeDashoffset: 0,
        transition: { duration: 2, ease: "easeInOut" },
      });
      setIsYellow(true);
      await new Promise((resolve) => setTimeout(resolve, 700));
      await titleMoveControls.start({
        y: -70,
        transition: { duration: 0.8, ease: "easeInOut" },
      });
      setShowSubtitle(true);
      await subtitleControls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeInOut" },
      });
    }
    sequence();
  }, [controls, titleMoveControls, subtitleControls]);

  return (
    <div className="flex flex-col justify-center items-center h-[50vh] relative">
      <motion.div
        animate={titleMoveControls}
        initial={{ y: 0 }}
        className="z-10"
      >
        <svg width="800" height="200" viewBox="0 0 800 200">
          <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-bold"
            fontSize="100"
            fill="transparent"
            stroke={isYellow ? "#fbbf24" : "#000"}
            strokeWidth="2"
            style={{
              fontFamily: "Rimba Andalas, sans-serif",
              transition: "stroke 0.7s",
            }}
            initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
            animate={controls}
          >
            Nauru
          </motion.text>
        </svg>
      </motion.div>
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={subtitleControls}
          className="absolute left-0 right-0 flex justify-center z-0"
          style={{ top: "50%" }}
        >
          <p className=" text-black" 
             style={{ fontFamily: "Arial, sans-serif",
                      maxWidth: '600px',
                      textAlign: 'center',
                      fontSize: '18px',}}>
            Naurú é um jogo Metroidvania que mergulha nas profundezas do nosso
            rico folclore brasileiro. Acompanhe a jornada de um jovem guerreiro
            indígena que carrega o peso ancestral de proteger a floresta sagrada
            contra forças sombrias que há séculos assombram seus povos.
            Espíritos malignos como sacis corpos-secos e outras criaturas do
            folclore espreitam nas sombras, prontas para desafiar sua coragem.
            Com jogabilidade ágil e intuitiva, cada desafio é uma oportunidade
            de descobrir segredos ancestrais e desvendar mistérios que há muito
            foram esquecidos.
          </p>
        </motion.div>
    </div>
  );
}
