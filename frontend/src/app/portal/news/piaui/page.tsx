"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import 'animate.css';

import "./styles.css";

function Piaui() {
    return (
        <>
            <title>SRM | Notícias</title>
            <main className='mb-16'>
                <section className="pt-56">
                    <h1 className="animate__animated animate__fadeInDown text-center text-5xl font-bold my-4 text-[#080451]">
                        Notícias
                    </h1>
                    <section className='flex flex-col justify-center items-center'>
                        <div className="animate__animated animate__fadeInLeft text-justify w-1/2 border-gray-400 my-10">
                            <p className='text-lg'>A chegada do pastor missionário Elison e sua família em Amarante foi um momento marcante para a comunidade local. Sua determinação em levar o evangelho e seu amor pelas pessoas comoveram a muitos e deixaram saudades quando partiram do Rio de Janeiro Que a determinação e o amor pelo próximo do pastor Elison sirvam de inspiração para todos aqueles que buscam levar a mensagem do evangelho a todos os cantos do mundo.Na sua posse na igreja de Amarante, contou com a presença do Bispo Jamir, da Secretária de Missões Lindinalva e da caravana do Impacto Piauí.</p>
                        </div>
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="/chegada/DSC_0002.JPG" alt="Chegada em Amarante, Piauí" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/chegada/DSC_0006.JPG" alt="Chegada em Amarante, Piauí" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/chegada/DSC_0011.JPG" alt="Chegada em Amarante, Piauí" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/chegada/DSC_0034.JPG" alt="Chegada em Amarante, Piauí" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/chegada/DSC_0037.JPG" alt="Chegada em Amarante, Piauí" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/chegada/DSC_0048.JPG" alt="Chegada em Amarante, Piauí" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/chegada/DSC_0067.JPG" alt="Chegada em Amarante, Piauí" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/chegada/DSC_0076.JPG" alt="Chegada em Amarante, Piauí" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/chegada/DSC_0084.JPG" alt="Chegada em Amarante, Piauí" />
                            </SwiperSlide>
                        </Swiper>
                        <div className="animate__animated animate__fadeInLeft text-justify w-1/2 border-gray-400 my-10">
                            <p className='text-lg'>O pastor Elison  e sua família se dedica arduamente ao trabalho missionário em Amarante, , e sendo um exemplo de amor e dedicação a todos ao seu redor. Sua influência positiva foi sentida não apenas na igreja local, mas em toda a comunidade.
                                A presença do Bispo Jamir e da Secretária de Missões Lindinalva mostrou o apoio e reconhecimento da liderança da igreja ao trabalho do pastor Elison. A caravana do Impacto Piauí também trouxe força e energia para a posse do novo pastor, unindo esforços em prol da propagação do evangelho na região.
                            </p>
                        </div>
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="/chegada/DSC_0085.JPG" alt="Chegada em Amarante, Piauí" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/chegada/DSC_0086.JPG" alt="Chegada em Amarante, Piauí" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/chegada/DSC_0089.JPG" alt="Chegada em Amarante, Piauí" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/chegada/DSC_0092.JPG" alt="Chegada em Amarante, Piauí" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/chegada/DSC_0093.JPG" alt="Chegada em Amarante, Piauí" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/chegada/DSC_0094.JPG" alt="Chegada em Amarante, Piauí" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/chegada/DSC_0121.JPG" alt="Chegada em Amarante, Piauí" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/chegada/DSC_0157.JPG" alt="Chegada em Amarante, Piauí" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/chegada/DSC_0164.JPG" alt="Chegada em Amarante, Piauí" />
                            </SwiperSlide>
                        </Swiper>
                        <div className="animate__animated animate__fadeInLeft text-justify w-1/2 border-gray-400 my-10">
                            <p className='text-lg'>Que a jornada missionária do pastor Elison e de sua família seja abençoada e que seu exemplo inspire cada vez mais pessoas a dedicarem suas vidas ao serviço do próximo e ao anúncio do amor de Deus.
                            </p>
                        </div>
                        <div className="animate__animated animate__fadeInUp text-justify w-1/2 border-gray-400 my-10">
                            <p className='text-lg'>Fotos: Diogo Costa
                            </p>
                        </div>
                    </section>
                </section>
            </main>
        </>
    );
}

export default Piaui;
