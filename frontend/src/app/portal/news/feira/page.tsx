"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import 'animate.css';

import "./styles.css";

function Consg() {
    return (
        <>
            <title>SRM | Notícias</title>
            <main className='mb-16'>
                <section className="pt-56">
                    <h1 className="animate__animated animate__fadeInDown text-center text-5xl font-bold my-4 text-[#080451]">Notícias</h1>
                    <section className='flex flex-col justify-center items-center'>
                        <div className="animate__animated animate__fadeInLeft text-justify lg:w-1/2 px-5 border-gray-400 my-10">
                            <p className='text-lg'>No sábado, dia 06/07, foi realizada uma feira missionária com o objetivo de arrecadar fundos para o projeto como PAi. O evento contou com a presença do Pastor missionário Elison Jr, que concedeu entrevistas. A festa das nações apresentou barracas temáticas ,uma vez que seu tema era a festa das nações onde os participantes puderam desfrutar de muita alegria e solidariedade.</p>
                        </div>
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="/feira/IMG_2324.jpg" alt="consagração de pastores" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/feira/IMG_2331.jpg" alt="consagração de pastores" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/feira/IMG_2356.jpg" alt="consagração de pastores" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/feira/IMG_2367.jpg" alt="consagração de pastores" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/feira/IMG_2377.jpg" alt="consagração de pastores" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/feira/IMG_2383.jpg" alt="consagração de pastores" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/feira/IMG_2394.jpg" alt="consagração de pastores" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/feira/IMG_2435.jpg" alt="consagração de pastores" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/feira/IMG_2488.jpg" alt="consagração de pastores" />
                            </SwiperSlide>
                        </Swiper>

                    </section>
                </section>
            </main>
        </>
    );
}

export default Consg;

