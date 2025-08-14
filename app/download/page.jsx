"use client";

import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import "./download.css"

export default function Download() {
  
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

      <main className="flex items-start ">
  <div className="w-5/6">
    <h1 className="titulo flex justify-start md:text-7xl text-5xl font-bold">Baixe Agora</h1>
    <p className="actionButton flex items-start justify-center w-1/10 font-bold ">Baixar</p>
  </div>
</main>
    </>
  );
}