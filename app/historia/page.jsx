"use client";

import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import "./historiona.css"

export default function Historia() {
  
  function toggleMenu() {
    const menu = document.querySelector(".dropdownMenu");
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      menu.classList.add("hide");
      setTimeout(() => {
        menu.style.display = "none";
      }, 500); // Tempo da animação
    } else {
      menu.classList.remove("hide");
      menu.classList.add("show");
      menu.style.display = "block";
    }
  }

  return (
    <>
      <div className="video-container">
        <video autoPlay muted loop className="videoBg">
          <source src="/teste.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
        </video>
        <div className="overlay"></div>
      </div>
      <header>
        <div className="navbar">
          <div className="logo">
            <h1 className="logoImg">Nauru</h1>
          </div>
          <ul className="links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/historia">Historia</Link></li>
            <li><Link href="/download">Download</Link></li>
            <li><Link href="/sobrenos">Sobre-nós</Link></li>
          </ul>
          <Link href="/download" className="actionButton">Bora lá</Link>
          <div className="toggleButton">
            <button onClick={toggleMenu}>
              <IoMdMenu />
            </button>
          </div>
        </div>

        <div className="dropdownMenu">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/historia">Historia</Link></li>
          <li><Link href="/download">Download</Link></li>
          <li><Link href="/sobrenos">Sobre-nós</Link></li>
          <li><Link href="/download" className="actionButton">Bora lá</Link></li>
        </div>
      </header>

      <main>
        <section id="w-full ">
          <div>
          <h1 className="titulo flex items-center justify-center md:text-7xl !text-6xl font-bold text-amber-500">Naurú</h1>
          <p className="flex items-center justify-center w-6xl">Naurú é um jogo Metroidvania que conta a história de um jovem indígena que tem o dever de proteger a floresta de espíritos malignos, como sacis, corpos-secos e outros que atormentam as vidas dos habitantes das matas. Com uma jogabilidade rápida, mas simples de se jogar, o jogo tem o propósito de ser desafiador, porém, ao mesmo tempo, algo divertido e único. Tudo isso enquanto exploramos e descobrimos mais sobre as lendas e a cultura do nosso folclore brasileiro.</p>
          </div>
        </section>
      </main>
    </>
  );
}