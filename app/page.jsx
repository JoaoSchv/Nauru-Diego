"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollToTopButton from "./ScrollToTopButton";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const personagens = [
    {
      nome: "Curupira",
      descricao: "Curupira é o mestre de Caeté e o anterior guardião da floresta. Ele viu no jovem um grande potencial e, por isso, o escolheu como seu discípulo.",
      imagem: "/curupira.png",
    },
    {
      nome: "Iúna",
      descricao: "É uma jovem indígena de uma tribo rival à de Caeté. A jovem invade as terras do povo de Caeté e descobre ruínas de um povo antigo. Dentro dessa ruína, aprende a invocar e controlar esses espíritos malignos. Ela é a responsável por comandar o Mapinguari.",
      imagem: "/iara.png",
    },
    {
      nome: "Saci",
      descricao:
        "É o segundo inimigo do jogo, um espírito maligno com poderes que controlam o vento e que também se encontra em grupos de 2 ou mais Sacis. Gostam muito de fazer travessuras e, por isso, são conhecidos por atormentar aqueles que vivem na floresta.",
      imagem: "/saci.png",
    },
    {
      nome: "Caeté",
      descricao:
        "Nosso protagonista, um jovem guerreiro indígena que está sucedendo de seu mestre o cargo de guardião da floresta. Caeté possui um coco chamado “Coco de tucumã”, que ele usa para aprisionar os espíritos malignos.",
      imagem: "/caete.PNG",
    },
    {
      nome: "Unhudo",
      descricao:
        "Espírito grande e forte, muito assustador, com um corpo esquelético e chapéu de palha, ataca quem ele vê pela frente.",
      imagem: "/unhudo.png",
    },
    {
      nome: "Corpo-Seco",
      descricao:
        "É o primeiro inimigo do jogo. Ele se assemelha muito a um morto-vivo e normalmente é encontrado em grupo, o que pode causar problemas para o nosso jovem Caeté.",
      imagem: "/corposeco.png",
    },
    {
      nome: "waké",
      descricao:
        "é um espirito azul",
      imagem: "/wake.png",
    },
    {
      nome: "Mapinguari",
      descricao:
        "É o grande chefão do jogo, o inimigo mais poderoso e mais complicado que vamos enfrentar nesta jornada. Um gigante coberto por pelos que habita nas florestas, conhecido por suas características físicas, como seu único olho e uma boca que cobre todo o seu tronco. Assim, ele coloca medo em todos que vivem na floresta.",
      imagem: "/mapinguari.png",
    },
  ];
  const personagem = personagens[index];

  function toggleMenu() {
    const menu = document.querySelector(".dropdownMenu");
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      menu.classList.add("hide");
      setTimeout(() => {
        menu.style.display = "none";
      }, 500);
    } else {
      menu.classList.remove("hide");
      menu.classList.add("show");
      menu.style.display = "block";
    }
  }

  const anterior = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? personagens.length - 1 : prev - 1));
  };

  const proximo = () => {
    setDirection(1);
    setIndex((prev) => (prev === personagens.length - 1 ? 0 : prev + 1));
  };

  const Equipe = [
    {
      name: "Matheus Lozano",
      role: "Documentação / Game Design",
      imageUrl: "/matheussim.jpeg",
    },
    {
      name: "Gabriel Ruis",
      role: "Documentação",
      imageUrl: "/gabrielsim.jpeg",
    },
    {
      name: "Diego Sugahara",
      role: "Sons / Lading Page",
      imageUrl: "/diego.PNG",
    },
    {
      name: "João Schvengber",
      role: "Programação",
      imageUrl: "/joao.jpeg",
    },
    {
      name: "Rafael Wolf",
      role: "Arte / Animação",
      imageUrl: "/rafaelsim.jpeg",
    },
    {
      name: "Enzo Ferrari",
      role: "Arte / Cenários",
      imageUrl: "/enzo.jpeg",
    },
  ];

  // Estados para hover dos cards
  const [hoverCenario, setHoverCenario] = useState(null);

  // Ref e inView para animar a seção de download
  const downloadRef = useRef(null);
  const isInView = useInView(downloadRef, { once: true, margin: "-100px" });

  return (
    <>
      <section className="hero-animado w-full min-h-[70vh] sm:min-h-[100vh] flex flex-col justify-start items-center relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="video-bg absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/teste.mp4" type="video/mp4" />
        </video>

        <div
          className="absolute top-0 left-0 w-full h-full bg-[rgba(40,40,40,0.5)] z-10 "
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.2)",
            zIndex: 1,
          }}
        />

        <header
          className="w-full relative z-20"
          style={{ width: "100%", position: "relative", zIndex: 2 }}
        >
          <div className="navbar navbar px-4 sm:px-8 py-4 flex justify-between items-center">
            <div className="logoImg">
              <h1 className="titulo !text-5xl sm:text-2xl">Naurú</h1>
            </div>
            <ul className="links md:flex gap-6 text-white font-medium">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#artes">Artes</Link>
              </li>
              <li>
                <Link href="#download">Download</Link>
              </li>
              <li>
                <Link href="#sobrenos">Sobre Nós</Link>
              </li>
            </ul>
            <Link href="#download" className="actionButton hidden md:block">
              Bora lá
            </Link>
            <div className="toggleButton md:hidden">
              <button onClick={toggleMenu}>
                <IoMdMenu className="text-white text-2xl" />
              </button>
            </div>
          </div>
          <div className="dropdownMenu md:hidden z-20 bg-black bg-opacity-80 text-white text-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#artes">Artes</Link>
            </li>
            <li>
              <Link href="#download">Download</Link>
            </li>
            <li>
              <Link href="#sobrenos">Sobre-nós</Link>
            </li>
            <li>
              <Link href="#download" className="actionButton">
                Bora lá
              </Link>
            </li>
          </div>
        </header>
        <div
          className="flex-1 w-full flex flex-col items-center justify-center text-white text-center px-4 sm:px-10 py-8 sm:py-16 relative z-10"
          style={{
            flex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            textAlign: "center",
            padding: "4rem 0",
            position: "relative",
            zIndex: 1,
          }}
        >

          <div className="max-w-[900px] mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-green-900/20 via-emerald-900/15 to-green-800/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-green-700/30 shadow-2xl shadow-green-900/20"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 mb-6 text-center">
                Naurú
              </h2>

              <div className="space-y-4 text-gray-100">
                <p className="text-lg sm:text-xl leading-relaxed font-light">
                  Naurú é um jogo
                  Metroidvania que
                  mergulha nas profundezas do nosso rico folclore brasileiro.
                </p>

                <p className="text-base sm:text-lg leading-relaxed opacity-90">
                  Acompanhe a jornada de um jovem guerreiro indígena
                  que carrega o peso ancestral de proteger a floresta sagrada contra forças sombrias que há séculos
                  assombram seus povos.
                </p>

                <div className="flex items-center justify-center my-6">
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                </div>

                <p className="text-base sm:text-lg leading-relaxed opacity-85">
                  Espíritos malignos como sacis
                  corpos-secos e outras
                  criaturas do folclore
                  espreitam nas sombras, prontas para desafiar sua coragem.
                </p>

                <p className="text-base sm:text-lg leading-relaxed opacity-85">
                  Com jogabilidade ágil e intuitiva,
                  cada desafio é uma oportunidade de descobrir segredos ancestrais e desvendar mistérios
                  que há muito foram esquecidos.
                </p>

                <div className="mt-6 p-4 bg-green-800/20 rounded-lg border-l-4 border-amber-400">
                  <p className="text-sm sm:text-base italic text-amber-200">
                    "Explore lendas, descubra cultura, proteja a floresta.
                    Cada passo é uma dança entre o mundo físico e o espiritual."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/*PERSONAGE*/}
      <section
        id="artes"
        className="bg-gray-200 text-black w-full !min-h-[50vh] sm:min-h-[50vh] md:min-h-[70vh] flex items-center justify-center px-4 sm:px-6 py-6 sm:py-10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 max-w-[1400px] w-full">
          <div className="w-full md:w-2/5 !ml-2 text-center md:text-left">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={personagem.nome}
                custom={direction}
                initial={{
                  x: direction > 0 ? -100 : 100,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                exit={{
                  x: direction > 0 ? 100 : -100,
                  opacity: 0,
                }}
                transition={{ duration: 0.4, type: "tween" }}
              >
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-6">
                  {personagem.nome}
                </h1>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  {personagem.descricao}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            className="w-full md:w-3/5 flex items-center justify-center relative"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >            <button
            onClick={anterior}
            className="absolute !left-2 md:-left-2 z-10 text-gray-800 hover:text-black hover:scale-110"
          >
              <ChevronLeft size={30} />
            </button>

            {/* Container com position: relative para animação funcionar */}
            <div className="w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[400px] md:h-[400px] rounded-full flex items-center justify-center overflow-hidden relative bg-gray-300">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={personagem.nome}
                  custom={direction}
                  initial={{
                    x: direction > 0 ? 300 : -300,
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    x: direction > 0 ? -300 : 300,
                    opacity: 0,
                    scale: 0.8,
                  }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="w-full h-full flex items-center justify-center absolute"
                  style={{ top: 0, left: 0 }}
                >
                  <Image
                    src={personagem.imagem}
                    alt={personagem.nome}
                    fill
                    className="object-cover"
                    style={{ borderRadius: "50%", backgroundColor: "#e5e7eb" }} // bg-gray-300
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={proximo}
              className="absolute !right-2 md:-right-2 z-10 text-gray-800 hover:text-black hover:scale-110"
            >
              <ChevronRight size={30} />
            </button>
          </div>
        </div>
      </section>

      {/*CENARIO*/}
      <section className="bg-black bg-cover text-white w-full !min-h-[50vh] sm:min-h-[50vh] md:min-h-[60vh] flex flex-col items-center justify-center px-4 sm:px-6 py-6 sm:py-10">
        <h2 className="titulo text-2xl sm:text-4xl md:text-6xl font-bold !mb-4 !mt-2 flex items-center justify-center">
          Cenários
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 sm:gap-12 md:gap-20 max-w-[1400px] w-full">
          {/* Floresta */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="!w-full md:w-2/5 !ml-2 flex flex-col justify-center items-center relative group"
          >
            <div className="relative w-full overflow-hidden rounded-lg">
              <motion.div
                whileHover={{ scale: 1.07 }}
                className="transition-all duration-300 ease-in-out"
              >
                <Image
                  src="/floresta.png"
                  width={1000}
                  height={700}
                  alt="Cenário de floresta"
                  className="rounded-lg w-full h-auto max-w-[600px] sm:max-w-[800px] md:max-w-[900px] scenario-image group-hover:brightness-50 transition-all duration-300"
                  style={{ transition: "all 0.3s" }}
                />
                {/* Overlay ao passar o mouse */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white rounded-lg p-6 z-20 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold mb-4">Floresta</h3>
                  <p className="text-base text-center max-w-md">
                    Esse é o primeiro cenário do jogo, nele o jogador irá aprender todas as mecânicas dentro do mundo de Naurú, por exemplo, como se movimentar, técnicas de combate e o objetivo do jogo. Caeté irá ficar pouquíssimo tempo na floresta.
                  </p>
                </motion.div>
              </motion.div>
            </div>
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="titulo !text-5xl sm:text-4xl md:text-6xl font-bold !mt-1 sm:mb-6 scenario-title"
            >
              Floresta
            </motion.h2>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="!mb-4 sm:text-base max-w-[800px] scenario-subtitle"
            >
              Cenário da floresta, onde se passa o início do jogo
            </motion.p>
          </motion.div>

          {/* Caverna */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            className="!w-full md:w-2/5 !mr-2 flex flex-col justify-center items-center relative group"
          >
            <div className="relative w-full overflow-hidden rounded-lg">
              <motion.div
                whileHover={{ scale: 1.07 }}
                className="transition-all duration-300 ease-in-out"
              >
                <Image
                  src="/Caverna.png"
                  width={1000}
                  height={700}
                  alt="Cenário de caverna"
                  className="rounded-lg w-full h-auto max-w-[600px] sm:max-w-[800px] md:max-w-[900px] group-hover:brightness-50 transition-all duration-300"
                  style={{ transition: "all 0.3s" }}
                />
                {/* Overlay ao passar o mouse */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white rounded-lg p-6 z-20 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold mb-4">Caverna</h3>
                  <p className="text-base text-center max-w-md">
                    Na caverna, o jogador enfrentará os diversos inimigos dentro do game, utilizando os ensinamentos adquiridos na floresta, é aqui que você passará a maior parte da experiência do jogo.
                  </p>
                </motion.div>
              </motion.div>
            </div>
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="titulo !text-5xl sm:text-2xl md:text-2xl font-bold !mt-1 sm:mb-6"
            >
              Caverna
            </motion.h2>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="!mb-4 sm:text-base max-w-[800px]"
            >
              Cenário da caverna, onde se passa a maior parte do jogo
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/*BAIXAR*/}
      <section
        id="download"
        ref={downloadRef}
        className="relative bg-gray-200 text-black w-full !min-h-[50vh] sm:min-h-[50vh] md:min-h-[70vh] flex items-center justify-center px-4 sm:px-6 py-6 sm:py-10 overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 max-w-[1400px] w-full z-10">
          <motion.div
            className="w-full md:w-2/5 text-center md:text-left"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 20, opacity: 1 } : {}}
            transition={{ duration: 1.2, type: "spring" }}
          >
            <h2 className="titulo text-3xl sm:text-5xl md:text-6xl lg:text-8xl !ml-2 font-bold leading-tight">
              Baixe Agora
            </h2>

            <div className="mt-4 sm:mt-6 flex justify-center md:justify-start">
              <button className="actionButton bg-black text-white font-bold py-2 !ml-2 sm:py-3 px-4 sm:px-6 rounded-md hover:bg-gray-800 transition duration-300 text-sm sm:text-base">
                Baixar
              </button>
            </div>
          </motion.div>
        </div>

        <motion.img
          className="absolute right-0 top-1/2 -translate-y-1/2 !h-full sm:h-40 md:h-56 lg:h-[32rem] object-cover z-0 opacity-30 md:opacity-100"
          src="/manga.png"
          alt="Imagem Manga"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, type: "spring" }}
        />
      </section>

      {/*EQUIEPE*/}
      <section
        id="sobrenos"
        className="bg-black text-white w-full !min-h-[50vh] flex items-center justify-center px-4 sm:px-6 py-6 sm:py-10"
      >
        <div className="max-w-7xl mx-auto px-6 text-center !mb-4">
          <h2 className="text-4xl sm:text-6xl font-bold text-amber-400 !mb-2 !mt-4">
            Nossa Equipe
          </h2>
          <p className="text-white text-sm sm:text-base !mt-2 !mb-5">
            Conheça os integrantes que estão por trás do nosso projeto.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {Equipe.map((membro, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 sm:w-36 sm:h-36 relative mb-2 group">
                  <Image
                    src={membro.imageUrl}
                    alt={membro.name}
                    fill
                    className="rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-base sm:text-xl font-semibold text-amber-400">
                  {membro.name}
                </h3>
                <p className="text-white text-xs sm:text-base">{membro.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*coisa do site*/}
      <section className="bg-gray-100 text-white w-full !min-h-[22.5vh] sm:min-h-[50vh] md:min-h-[60vh] flex items-center justify-center px-4 sm:px-6 py-6 sm:py-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 max-w-[1400px] w-full">
          <div className="w-full md:w-2/5">
            <h2 className="titulo !text-[32px] sm:text-2xl md:text-6xl font-bold text-black sm:mb-6 flex items-center justify-center">
              Naurú
            </h2>
            <p className="!text-[12px] sm:text-base md:text-xl text-black leading-relaxed flex items-center justify-center">
              © 2025 Naurú. Todos os direitos reservados.
            </p>
            <div className="flex items-center justify-center !mt-2">
              <Image
                src="/14anos.png"
                width={75}
                height={75}
                alt="Classificação Indicativa"
                className="rounded-lg flex !items-center"
              />
            </div>
          </div>
        </div>
      </section>

      <ScrollToTopButton />
    </>
  );
}
