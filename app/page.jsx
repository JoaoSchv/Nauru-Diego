"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { IoMdMenu } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollToTopButton from "./ScrollToTopButton";
import TitleAnimado from "./TitleAnimado";
import "./navbarBookTab.css";

export default function Home() {
  const [translateCenario, setTranslateCenario] = useState("-40px");
  const [translateCaverna, setTranslateCaverna] = useState("40px");
  const [tribalVisible, setTribalVisible] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setTranslateCenario("-50px");
        setTranslateCaverna("60px");
      } else if (window.innerWidth >= 768) {
        setTranslateCenario("-40px");
        setTranslateCaverna("80px");
      } else {
        setTranslateCenario("-40px");
        setTranslateCaverna("40px");
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(false);

  // --- modal state e handlers (adicionado) ---
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  function openModal(src, alt = "") {
    setModalImage({ src, alt });
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    setModalOpen(false);
    document.body.style.overflow = "";
    // limpar imagem depois da animação de saída (opcional)
    setTimeout(() => setModalImage(null), 300);
  }

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") closeModal();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const personagens = [
    {
      nome: "Curupira",
      descricao:
        "Curupira é o mestre de Caeté e o anterior guardião da floresta. Ele viu no jovem um grande potencial e, por isso, o escolheu como seu discípulo.",
      imagem: "/curupira.png",
    },
    {
      nome: "Iúna",
      descricao:
        "É uma jovem indígena de uma tribo rival à de Caeté. A jovem invade as terras do povo de Caeté e descobre ruínas de um povo antigo. Dentro dessa ruína, aprende a invocar e controlar esses espíritos malignos. Ela é a responsável por comandar o Mapinguari.",
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
      descricao: "é um espirito azul",
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

  const [hoverCenario, setHoverCenario] = useState(null);
  const downloadRef = useRef(null);
  const isInView = useInView(downloadRef, { once: true, margin: "-100px" });

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (window.location.hash === `#${id}`) {
        history.replaceState(null, null, " ");
      }
    }
  }

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

        {/* Listras tribais animadas */}
        <AnimatePresence>
          {tribalVisible && (
            <>
              <motion.div
                className="tribal-stripe left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/listraNauru_amarela.png"
                  alt="Tribal Left"
                  draggable={false}
                />
              </motion.div>
              <motion.div
                className="tribal-stripe right"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/listraNauru_amarela.png"
                  alt="Tribal Right"
                  draggable={false}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* NAVBAR*/}
        <AnimatePresence>
          {navbarVisible && (
            <motion.header
              className="w-full absolute top-0 left-0 z-20"
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -80, opacity: 0 }}
              transition={{ duration: 0.7, type: "spring" }}
            >
              <nav className="w-full px-4 sm:px-8 py-4 flex flex-col items-center">
                <ul className="links flex gap-4 text-white font-medium justify-center">
                  <li>
                    <button
                      className="book-tab"
                      onClick={() => scrollToSection("hero")}
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      className="book-tab"
                      onClick={() => scrollToSection("artes")}
                    >
                      Artes
                    </button>
                  </li>
                  <li>
                    <button
                      className="book-tab"
                      onClick={() => scrollToSection("download")}
                    >
                      Download
                    </button>
                  </li>
                  <li>
                    <button
                      className="book-tab"
                      onClick={() => scrollToSection("sobrenos")}
                    >
                      Sobre Nós
                    </button>
                  </li>
                </ul>
                <div className="toggleButton md:hidden mt-2">
                  <button onClick={toggleMenu}>
                    <IoMdMenu className="text-white text-2xl" />
                  </button>
                </div>
              </nav>
              {/* Dropdown mobile */}
              <div className="dropdownMenu md:hidden z-30 bg-black bg-opacity-80 text-white text-center">
                <li>
                  <button
                    className="book-tab"
                    onClick={() => scrollToSection("hero")}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    className="book-tab"
                    onClick={() => scrollToSection("artes")}
                  >
                    Artes
                  </button>
                </li>
                <li>
                  <button
                    className="book-tab"
                    onClick={() => scrollToSection("download")}
                  >
                    Download
                  </button>
                </li>
                <li>
                  <button
                    className="book-tab"
                    onClick={() => scrollToSection("sobrenos")}
                  >
                    Sobre-nós
                  </button>
                </li>
              </div>
            </motion.header>
          )}
        </AnimatePresence>

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

        <div
          className="flex-1 w-full flex flex-col items-center justify-center text-white text-center px-4 sm:px-10 py-8 sm:py-16 relative z-0"
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
          <TitleAnimado
            onEnd={() => {
              setTribalVisible(true);
              setTimeout(() => setNavbarVisible(true), 400);
            }}
          />
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
                <h1
                  className="text-xl sm:text-4xl md:text-4xl font-bold mb-2 sm:mb-4 transition-all duration-300"
                  style={{ fontFamily: "Rimba Andalas, sans-serif" }}
                >
                  {personagem.nome}
                </h1>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed font-medium transition-all duration-300">
                  {personagem.descricao}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            className="w-full md:w-2/5 flex items-center justify-center relative"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            {" "}
            <button
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
                    style={{ borderRadius: "50%", backgroundColor: "#e5e7eb" }}
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

      {/*CENARIO NOVO*/}
      <section
        className="bg-black bg-cover text-white w-full  sm:px-6  flex flex-col gap-10 items-center"
        style={{ marginBottom: "20px" }}
      >
        <h2 className="titulo text-2xl sm:text-4xl md:text-6xl font-bold mb-10 mt-2 flex items-center justify-center">
          Cenários
        </h2>

        {/* Floresta */}
        <div className="flex flex-col md:flex-row items-center w-full mx-auto md:mx-auto">
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-full md:w-1/2 flex justify-center items-center mx-auto"
          >
            <div
              className="relative group flex justify-center items-center w-full max-w-[600px] h-[340px] md:h-[400px] overflow-hidden group"
              style={{ minHeight: "220px" }}
              onClick={() => openModal("/floresta.png", "Floresta")}
              role="button"
              tabIndex={0}
            >
              <Image
                src="/floresta.png"
                width={700}
                height={500}
                alt="Cenário de floresta"
                className="rounded-lg w-full h-full object-cover shadow-2xl transition duration-300 group-hover:opacity-0 group-hover:scale-105 group-hover:brightness-75 group-hover:contrast-125 cursor-zoom-in"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
              <motion.video
                className="rounded-lg w-full h-full object-cover shadow-2xl opacity-0 group-hover:opacity-100 group-hover:scale-105 group-hover:brightness-75 group-hover:contrast-125"
                style={{ position: "absolute", top: 0, left: 0 }}
                src="/teste.mp4"
                autoPlay
                loop
                muted
                playsInline
                initial={{ scale: 1 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left mx-auto"
          >
            <h3
              className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 text-amber-300"
              style={{
                transform: `translateX(${translateCenario})`,
                fontFamily: "Rimba Andalas, sans-serif",
              }}
            >
              Floresta
            </h3>
            <p
              className="text-base sm:text-lg md:text-xl max-w-xl mb-2"
              style={{ transform: `translateX(${translateCenario})` }}
            >
              Esse é o primeiro cenário do jogo, nele o jogador irá aprender
              todas as mecânicas dentro do mundo de Naurú, por exemplo, como se
              movimentar, técnicas de combate e o objetivo do jogo. Caeté irá
              ficar pouquíssimo tempo na floresta.
            </p>
            <p
              className="text-sm sm:text-base opacity-80"
              style={{ transform: `translateX(${translateCenario})` }}
            >
              Cenário da floresta, onde se passa o início do jogo
            </p>
          </motion.div>
        </div>

        {/* Caverna */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 w-full mx-auto md:mx-auto">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-full md:w-1/2 flex justify-center items-center mx-auto"
          >
            <div
              className="relative group flex justify-center items-center w-full max-w-[600px] h-[340px] md:h-[400px] overflow-hidden group cursor-zoom-in"
              style={{ minHeight: "220px" }}
              onClick={() => openModal("/Caverna.png", "Caverna")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openModal("/Caverna.png", "Caverna"); }}
            >
              <Image
                src="/Caverna.png"
                width={700}
                height={500}
                alt="Cenário de caverna"
                className="rounded-lg w-full h-full object-cover shadow-2xl transition duration-300 group-hover:opacity-0 group-hover:scale-105 group-hover:brightness-75 group-hover:contrast-125"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
              <motion.video
                className="rounded-lg w-full h-full object-cover shadow-2xl opacity-0 group-hover:opacity-100 group-hover:scale-105 group-hover:brightness-75 group-hover:contrast-125"
                style={{ position: "absolute", top: 0, left: 0 }}
                src="/teste.mp4"
                autoPlay
                loop
                muted
                playsInline
                initial={{ scale: 1 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            className="w-full md:w-1/2 flex flex-col  items-center md:items-end text-center md:text-right mx-auto"
          >
            <h3
              className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 text-amber-300"
              style={{
                transform: `translateX(${translateCaverna})`,
                fontFamily: "Rimba Andalas, sans-serif",
              }}
            >
              Caverna
            </h3>
            <p
              className="text-base sm:text-lg md:text-xl max-w-xl mb-2"
              style={{ transform: `translateX(${translateCenario})` }}
            >
              Na caverna, o jogador enfrentará os diversos inimigos dentro do
              game, utilizando os ensinamentos adquiridos na floresta, é aqui
              que você passará a maior parte da experiência do jogo.
            </p>
            <p
              className="text-sm sm:text-base opacity-80"
              style={{ transform: `translateX(${translateCaverna})` }}
            >
              Cenário da caverna, onde se passa a maior parte do jogo
            </p>
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
              <button
                className="actionButton bg-black text-white flex items-center justify-center rounded-md"
                style={{ width: "460px", height: "40px" }}
              >
                <FiDownload size={28} />
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
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  type: "spring",
                }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ScrollToTopButton />

      <footer className="w-full bg-black text-white pt-12 pb-4 border-t border-[#333] mt-8">
        <div className=" mx-auto flex flex-col md:flex-row justify-center items-center px-8 gap-12 md:gap-2 text-center">
          {/* Coluna 1: Descrição */}
          <div className="flex-1 min-w-[220px] mb-10 md:mb-0 flex flex-col items-center text-center">
            <h2
              className="text-4xl font-bold text-amber-400 mb-2"
              style={{ fontFamily: "Rimba Andalas, sans-serif" }}
            >
              Nauru
            </h2>
            <p className="text-white text-base max-w-xs">
              Uma jornada única desenvolvida pela{" "}
              <span className="font-bold text-amber-400">AgroPescaStudios</span>
              , onde natureza e desafio se encontram
            </p>
          </div>
          {/* Coluna 2: Navegação */}
          <div className="flex-1 min-w-[180px] mb-10 md:mb-0 flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold mb-3 text-amber-400">
              Navegação
            </h3>
            <ul className="text-white space-y-1 text-base">
              <li>
                <a
                  href="#sobrenos"
                  className="hover:text-amber-400 transition-colors"
                  style={{ fontSize: "18px" }}
                >
                  Sobre o Jogo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-400 transition-colors"
                  style={{ fontSize: "18px" }}
                >
                  Notícias
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-400 transition-colors"
                  style={{ fontSize: "18px" }}
                >
                  Comunidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-400 transition-colors"
                  style={{ fontSize: "18px" }}
                >
                  Suporte
                </a>
              </li>
            </ul>
          </div>
          {/* Coluna 3: Redes Sociais */}
          <div className="flex-1 min-w-[180px] flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold mb-3 text-amber-400">
              Conecte-se
            </h3>
            <div className="flex flex-row gap-4 mt-2 justify-center">
              <a
                href="#"
                className="bg-amber-400 hover:bg-yellow-400 transition-colors rounded-full w-12 h-12 flex items-center justify-center"
                aria-label="Twitter"
              >
                {/* Twitter */}
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.29 20c7.547 0 11.675-6.155 11.675-11.495 0-.175 0-.349-.012-.522A8.18 8.18 0 0022 5.92a8.19 8.19 0 01-2.357.637A4.118 4.118 0 0021.448 4.1a8.224 8.224 0 01-2.605.977A4.107 4.107 0 0015.448 3c-2.266 0-4.104 1.822-4.104 4.07 0 .32.036.634.106.934C7.728 7.87 4.1 6.13 1.671 3.149a4.025 4.025 0 00-.555 2.048c0 1.413.725 2.662 1.825 3.392A4.093 4.093 0 01.8 7.575v.051c0 1.974 1.417 3.627 3.292 4.004a4.1 4.1 0 01-1.853.07c.522 1.614 2.037 2.792 3.833 2.825A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="bg-amber-400 hover:bg-yellow-400 transition-colors rounded-full w-12 h-12 flex items-center justify-center"
                aria-label="Instagram"
              >
                {/* Instagram */}
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-black"
                >
                  <rect width="18" height="18" x="3" y="3" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1.5" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-amber-400 hover:bg-yellow-400 transition-colors rounded-full w-12 h-12 flex items-center justify-center"
                aria-label="YouTube"
              >
                {/* YouTube */}
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-black"
                >
                  <rect x="2" y="6" width="20" height="12" rx="4" />
                  <path d="M10 9.5v5l5-2.5-5-2.5z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-amber-400 hover:bg-yellow-400 transition-colors rounded-full w-12 h-12 flex items-center justify-center"
                aria-label="Discord"
              >
                {/* Discord */}
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-black"
                >
                  <path d="M20.317 4.369A19.791 19.791 0 0016.885 3.2a.077.077 0 00-.082.038c-.357.63-.755 1.453-1.037 2.104a18.524 18.524 0 00-5.532 0c-.282-.651-.68-1.473-1.037-2.104a.077.077 0 00-.082-.038c-3.432 1.07-6.13 3.3-6.13 11.1 0 2.2.788 4.01 2.09 5.37a.06.06 0 00.01.01c2.13 1.56 5.13 1.6 6.84 1.6s4.71-.04 6.84-1.6a.06.06 0 00.01-.01c1.302-1.36 2.09-3.17 2.09-5.37 0-7.8-2.698-10.03-6.13-11.1zM8.02 15.11c-.789 0-1.43-.72-1.43-1.6 0-.88.64-1.6 1.43-1.6.8 0 1.44.72 1.44 1.6 0 .88-.64 1.6-1.44 1.6zm7.96 0c-.79 0-1.43-.72-1.43-1.6 0-.88.64-1.6 1.43-1.6.8 0 1.44.72 1.44 1.6 0 .88-.64 1.6-1.44 1.6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-8 border-[#333]" />
        <div className="text-center text-white text-sm">
          © 2025{" "}
          <span className="text-amber-400 font-bold">AgroPescaStudios</span>.
          Todos os direitos reservados.
        </div>
      </footer>

      {/* Modal (adicionado) */}
      {/* {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative max-w-3xl w-full p-4">
            {/* Botão de fechar (adicionado) */}
            {/* <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={modalImage.src}
                alt={modalImage.alt}
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </motion.div>
          </div>
        </div>
      )} */}

      {/* Modal de visualização de imagem */}
      <AnimatePresence>
        {modalOpen && modalImage && (
          <motion.div
            className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content relative"
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.98 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{ width: "100%", maxWidth: "98vw", maxHeight: "96vh" }}
            >
              <img
                src={modalImage.src}
                alt={modalImage.alt}
                className="w-full h-auto max-w-[98vw] max-h-[96vh] rounded-lg shadow-2xl object-contain"
                draggable={false}
              />
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 bg-black/60 text-white rounded-full p-2"
                aria-label="Fechar"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
