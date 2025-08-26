import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function TitleAnimado({ onEnd }) {
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
      if (onEnd) onEnd();
    }
    sequence();
  }, [controls, titleMoveControls, subtitleControls, onEnd]);

  return (
    <div
      className="flex flex-col justify-start items-center pt-2 relative"
      style={{ minHeight: "0", height: "auto" }}
    >
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

      {/* SUBTÍTULO: */}
      <motion.div
        initial={{ y: 20, opacity: 0 }} 
        animate={subtitleControls}
        className="flex justify-center"
        style={{
          width: "100%",
          position: "relative",
          top: "-110px",
          zIndex: 20, 
        }}
      >
        <p
          className="bg-black/70 text-amber-100 px-6 py-4 rounded-2xl shadow-lg"
          style={{
            fontFamily: "Arial, sans-serif",
            maxWidth: "600px",
            textAlign: "center",
            fontSize: "20px",
            lineHeight: "1.5",
            letterSpacing: "0.01em",
            backdropFilter: "blur(2px)",
            padding: "10px",
          }}
        >
          Naurú é um jogo Metroidvania que mergulha nas profundezas do nosso
          rico folclore brasileiro. Acompanhe a jornada de um jovem guerreiro
          indígena que carrega o peso ancestral de proteger a floresta sagrada
          contra forças sombrias que há séculos assombram seus povos. Espíritos
          malignos como sacis, corpos-secos e outras criaturas do folclore
          espreitam nas sombras, prontas para desafiar sua coragem. Com
          jogabilidade ágil e intuitiva, cada desafio é uma oportunidade de
          descobrir segredos ancestrais e desvendar mistérios que há muito foram
          esquecidos.
        </p>
      </motion.div>
    </div>
  );
}
