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
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className="animate__animated animate__fadeInDown text-center text-5xl font-bold my-4 text-[#080451]">Notícias</h1>
                    </div>
                    <section className='flex flex-col lg:flex-row justify-center'>
                        <div className="animate__animated animate__fadeInLeft text-center lg:w-60 p-5 border-gray-400">
                            <p className='text-lg'><b>Consagração de pastores</b> para irem para o campo missionário, ambos com suas famílias: um com destino ao Piauí e outro para Teresina!</p>
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
                    </section>
                </section>
            </main>
        </>
    );
}

export default Consg;
