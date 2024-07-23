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
                        <div className="animate__animated animate__fadeInLeft text-justify lg:w-1/2 px-5 border-gray-400 my-10">
                            <p className='text-lg'>Com a posse do Pastor Tiago Sarres na Imw Teresina traz muitas emoções o pastor deixou saudades em  sua terra mais trouxe muitas alegrias para a igreja em Teresina. Sua posse foi marcada por momentos emocionantes e de muita gratidão por parte dos membros da congregação. O Pastor Tiago Sarres foi recebido com muito carinho e entusiasmo, e sua liderança tem trazido muitas bençãos e crescimento espiritual para a comunidade.
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
                                <img src="/PosseTiago/IMG_1336.jpg" alt="Culto de Posse do Pastor Tiago Sarres" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/PosseTiago/IMG_1425.jpg" alt="Culto de Posse do Pastor Tiago Sarres" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/PosseTiago/IMG_1324.jpg" alt="Culto de Posse do Pastor Tiago Sarres" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/PosseTiago/IMG_1327.JPG" alt="Culto de Posse do Pastor Tiago Sarres" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/PosseTiago/IMG_1359.JPG" alt="Culto de Posse do Pastor Tiago Sarres" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/PosseTiago/IMG_1361.JPG" alt="Culto de Posse do Pastor Tiago Sarres" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/PosseTiago/IMG_1373.JPG" alt="Culto de Posse do Pastor Tiago Sarres" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/PosseTiago/IMG_1379.JPG" alt="Culto de Posse do Pastor Tiago Sarres" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/PosseTiago/IMG_1383.JPG" alt="Culto de Posse do Pastor Tiago Sarres" />
                            </SwiperSlide>
                        </Swiper>
                        <div className="animate__animated animate__fadeInLeft text-justify lg:w-1/2 px-5 border-gray-400 my-10">
                            <p className='text-lg'>Além das saudades deixadas em sua terra natal, o Pastor Tiago Sarres trouxe consigo uma bagagem de experiências e conhecimentos que têm impactado positivamente a vida da igreja em Teresina. Sua dedicação e comprometimento com a obra missionária são inspiradores e motivam os fiéis a se envolverem cada vez mais nas atividades da igreja.
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
                                <img src="/PosseTiago/IMG_1425.JPG" alt="Culto de Posse do Pastor Tiago Sarres" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/PosseTiago/IMG_1457.JPEG" alt="Culto de Posse do Pastor Tiago Sarres" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/PosseTiago/IMG_1479.JPEG" alt="Culto de Posse do Pastor Tiago Sarres" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/PosseTiago/IMG_1499.JPEG" className='width' alt="Culto de Posse do Pastor Tiago Sarres" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/PosseTiago/IMG_1509.JPEG" alt="Culto de Posse do Pastor Tiago Sarres" />
                            </SwiperSlide>
                        </Swiper>
                        <div className="animate__animated animate__fadeInLeft text-justify lg:w-1/2 px-5 border-gray-400 my-10">
                            <p className='text-lg'>A posse do Pastor Tiago Sarres na Imw Teresina representa um novo capítulo na história da congregação, repleto de esperança e fé no futuro. Sua presença tem sido uma bênção para todos os que o conhecem, e sua atuação como líder espiritual tem sido fundamental para o fortalecimento da comunidade de fé. Estamos gratos por tê-lo conosco e ansiosos por tudo o que Deus ainda tem para realizar através de sua vida e ministério.
                            </p>
                        </div>
                    </section>
                </section>
            </main>
        </>
    );
}

export default Piaui;
