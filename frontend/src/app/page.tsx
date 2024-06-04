"use client"

import { BannerImage, BannerInfo } from "@/libraries/Carousel";
import { Link } from "@nextui-org/react";
import FsLightbox from "fslightbox-react";

import { useState } from "react";

export default function Home() {
  const [toggler, setToggler] = useState(false);

  const sources = [
    {
      key: 'unique-key-1',
      content: (
        <div className="w-96 text-white">
          <h1 className="text-4xl font-bold">Pix Escomiw:</h1>
          <p className="text-2xl">escomiw1re@gmail.com</p>
          <br />
          <h1 className="text-4xl font-bold">Pix da SRM:</h1>
          <p className="text-2xl">13.836.364/0141-08</p>
        </div>
      ),
    },
    // Adicione mais fontes conforme necessário
  ];

  return (
    <main>
      <BannerImage />
      <section className="text-center flex relative top-32 mb-40">
        <div className="flex justify-center max-lg:flex-wrap items-center m-10">
          <div className="my-10 lg:w-1/2">
            <h1 className="border p-10 text-3xl font-bold text-[#080451]">CURSOS</h1>
            <p className="text-xl p-3">Conheça os nossos cursos e futuros eventos clicando no botão abaixo!</p>
            <button className="border rounded-none bg-[#0f09a1] hover:bg-white text-white hover:text-[#0f09a1] border-[#0f09a1] transition duration-300 py-5 px-10 mt-5">Informações</button>
          </div>
          <div className="my-10 lg:w-1/2">
            <h1 className="border p-10 text-3xl font-bold text-[#080451]">Ofertas</h1>
            <p className="text-xl p-3">Nos ajude a manter a nossa obra, seja um doador e nos ajude a levar a obra do Senhor adiante!</p>
            <button
              onClick={() => setToggler(!toggler)}
              className="border rounded-none bg-[#0f09a1] hover:bg-white text-white hover:text-[#0f09a1] border-[#0f09a1] transition duration-300 py-5 px-10 mt-5">
              Como Ofertar
            </button>
            <FsLightbox
              toggler={toggler}
              sources={sources.map(source => (
                <div key={source.key}>{source.content}</div>
              ))}
            />
          </div>
          <div className="my-10 lg:w-1/2">
            <h1 className="border p-10 text-3xl font-bold text-[#080451]">ESCOMIW</h1>
            <p className="text-xl p-3">Somos um braço da Secretaria Regional de Missões que tem como enfoque o despertamento da igreja em âmbito local e distrital para o engajamento da evangelização urbana.</p>
            <button className="border rounded-none bg-[#0f09a1] hover:bg-white text-white hover:text-[#0f09a1] border-[#0f09a1] transition duration-300 py-5 px-10 mt-5">
              <Link href="/escomiw">Informações</Link>
            </button>
          </div>
        </div>
      </section>
      <section className="text-white">
        <div className="bg-[url('https://wallpapercave.com/wp/wp7075534.jpg')] bg-center">
          <div className="flex items-center justify-center bg-blue-900 bg-opacity-60">
            <div className="text-center p-20">
              <h1 className="text-3xl font-bold m-3">SOBRE</h1>
              <div className="text-justify lg:px-20">
                <p>A Secretaria Geral de Missões é um órgão da Igreja Metodista Wesleyana,
                  instituído para executar os planos e programas da igreja,
                  visando à salvação dos pecadores, a glorificação do Senhor Jesus Cristo
                  e a expansão do Reino de Deus.
                </p>
                <br />
                <div className="">
                  <p>Nossa Missão:</p>
                  <p>I - Divulgar, implementar, capacitar, manter e projetar o trabalho de evangelização no Brasil e no mundo;</p>
                  <p>II -  Desenvolver, o ardor missionário e evangelizador da Igreja.</p>
                  <p>III - Planejar a criação de frentes missionárias em áreas estrangeiras e nacionais.</p>
                </div>
              </div>
              <button className="border rounded-none bg-[#0f09a1] hover:bg-white text-white hover:text-[#0f09a1] border-[#0f09a1] transition duration-300 py-5 px-10 mt-5">
                <Link href="/sobre">
                  Saiba mais
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <BannerInfo />
    </main>
  );
}
