"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import 'animate.css';

import "./styles.css";
import Image from 'next/image';

function Consg() {
    return (
        <>
            <title>SRM | Notícias</title>
            <main className='mb-16'>
                <section className="pt-56">
                    <h1 className="animate__animated animate__fadeInDown text-center text-5xl font-bold my-4 text-[#080451]">Notícias</h1>
                    <section className='flex flex-col justify-center items-center'>
                        <div className="animate__animated animate__fadeInLeft text-justify lg:w-1/2 px-5 border-gray-400 my-10">
                            <p className='text-lg'>
                                Neste dia 30/06 aconteceu a cerimônia de consagração dos pastores missionários Elison Jr e Tiago Sarres, que estão sendo enviados para atuarem no Piauí, foi repleta de emoções intensas. Elison Jr será enviado para Amarante e Tiago Sarres para Teresina.
                                A consagração foi um momento marcante e emocionante para todos os presentes, onde os novos missionários foram abençoados e enviados com muita fé e dedicação para cumprir sua missão no estado do Piauí.
                            </p>
                        </div>
                        <div className="animate__animated animate__fadeInLeft text-justify lg:w-1/2 px-5 border-gray-400 my-10">
                            <p className='text-lg'>A comunidade religiosa se uniu em orações e louvores durante a cerimônia, celebrando a jornada que está por vir e pedindo a proteção de Deus sobre os novos missionários.
                                Durante a cerimônia, os pastores missionários foram exortados a permanecerem firmes em sua fé, a confiarem no Senhor e a serem exemplos de amor e dedicação para aqueles que encontrarem em sua jornada missionária. Eles foram encorajados a compartilhar o evangelho com amor e humildade, a servir ao próximo com generosidade e a serem instrumentos de paz e esperança onde quer que forem.
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
                                <img src="/consagracao/IMG_1754.JPG" alt="consagração de pastores" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/consagracao/IMG_1804.JPG" alt="consagração de pastores" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/consagracao/IMG_1887.JPG" alt="consagração de pastores" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/consagracao/IMG_1924.JPG" alt="consagração de pastores" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/consagracao/IMG_1956.JPG" alt="consagração de pastores" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/consagracao/IMG_2141.JPG" alt="consagração de pastores" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/consagracao/IMG_2185.JPG" alt="consagração de pastores" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/consagracao/IMG_1754.JPG" alt="consagração de pastores" />
                            </SwiperSlide>
                        </Swiper>
                        <div className="animate__animated animate__fadeInLeft text-justify lg:w-1/2 px-5 border-gray-400 my-10">
                            <p className='text-lg'>
                                Os presentes na cerimônia se emocionaram ao ver a entrega e dedicação dos pastores missionários, e se comprometeram a apoiá-los em oração e de todas as formas possíveis durante sua missão no Piauí.
                                Foi um momento de união e comunhão, onde a presença de Deus se fez sentir de maneira poderosa e reconfortante.
                            </p>
                        </div>
                        <div className="animate__animated animate__fadeInLeft text-justify lg:w-1/2 px-5 border-gray-400 my-10">
                            <p className='text-lg'>
                                Que os pastores missionários Elison Jr e Tiago Sarres e suas famílias sejam abençoados em sua jornada no Piauí, que sejam instrumentos de transformação e luz na vida daqueles que encontrarem, e que possam cumprir com excelência a missão que lhes foi confiada. Que Deus os guarde e os fortaleça em cada passo, e que o seu amor e a sua graça estejam sempre presentes em suas vidas e ministério.</p>
                        </div>
                    </section>
                </section>
            </main>
        </>
    );
}

export default Consg;



