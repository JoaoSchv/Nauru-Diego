"use client";

import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import './sobrenos.css';

export default function Sobrenos() {

  const Equipe = [
    {
      name: 'Matheus Lozano',
      role: 'Documentação / Game Design',
      imageUrl: '/matheussim.jpeg',
    },
    {
      name: 'Gabriel Ruis',
      role: 'Documentação',
      imageUrl: '/gabrielsim.jpeg',
    },
    {
      name: 'Diego Sugahara',
      role: 'Sons / Lading Page',
      imageUrl: '/diego.PNG',
    },
    {
      name: 'João Schvengber',
      role: 'Programação',
      imageUrl: '/joao.jpeg',
    },
    {
      name: 'Rafael Wolf',
      role: 'Arte / Animação',
      imageUrl: '/rafaelsim.jpeg',
    },
    {
      name: 'Enzo Ferrari',
      role: 'Arte / Cenários',
      imageUrl: '/enzo.jpeg',
    },
  ];

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


       

        <section className="equipeIrada min-w-screen py-28 bg-transparent flex justify-center">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="titulo text-6xl font-bold mb-4 font-doto text-amber-400">Nossa Equipe</h2>
        <p className="apresentacao text-white">
          Conheça os integrantes que estão por trás do nosso projeto.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-10">
          {Equipe.map((membro, index) => (
            <div key={index} className=" h-60 w-60 flex flex-col items-center justify-center text-center ">
              <div className="w-42.5 h-42.5 relative ">
                <Image
                  src={membro.imageUrl}
                  alt={membro.name}
                  fill
                  className="rounded-full object-cover "
                />
              </div>
             <h3 className="text-base sm:text-xl font-semibold text-amber-400">{membro.name}</h3>
          <p className="text-white text-xs text-shadow-sky-300 sm:text-base">{membro.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
      </main>
    </>
  );
}