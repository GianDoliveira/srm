"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const BannerImage = () => {
    return (
        <div className=''>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Navigation, Autoplay, Pagination]}
                className="mySwiper1">
                <SwiperSlide>
                    <Image
                        src=''
                        alt="projeto pai"
                        className='banner1'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src=''
                        alt="curso capacitação liderança"
                        className='banner2'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
};
export const BannerInfo = () => {
    return (
        <section className='text-center my-10'>
            <h1 className='text-4xl py-10 font-bold text-[#080451]'>TRABALHOS ESCOMIW</h1>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Navigation, Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='image-container'>
                    <img src="./principal/abaprincipal1.jpg" />
                </SwiperSlide>
                <SwiperSlide className='image-container'>
                    <img src="./principal/abaprincipal2.jpg" />
                </SwiperSlide>
                <SwiperSlide className='image-container'>
                    <img src="./principal/abaprincipal3.jpg" />
                </SwiperSlide>
                <SwiperSlide className='image-container'>
                    <img src="./principal/abaprincipal4.jpg" />
                </SwiperSlide>
                <SwiperSlide className='image-container'>
                    <img src="./principal/abaprincipal5.jpg" />
                </SwiperSlide>
                <SwiperSlide className='image-container'>
                    <img src="./principal/abaprincipal6.jpg" />
                </SwiperSlide>
                <SwiperSlide className='image-container'>
                    <img src="./principal/abaprincipal7.jpg" />
                </SwiperSlide>
                <SwiperSlide className='image-container'>
                    <img src="./principal/abaprincipal8.jpg" />
                </SwiperSlide>
                <SwiperSlide className='image-container'>
                    <img src="./principal/abaprincipal9.jpg" />
                </SwiperSlide>
                <SwiperSlide className='image-container'>
                    <img src="./principal/abaprincipal10.jpg" />
                </SwiperSlide>
                <SwiperSlide className='image-container'>
                    <img src="./principal/abaprincipal11.jpg" />
                </SwiperSlide>
                <SwiperSlide className='image-container'>
                    <img src="./principal/abaprincipal12.jpg" />
                </SwiperSlide>
                <SwiperSlide className='image-container'>
                    <img src="./principal/abaprincipal13.jpg" />
                </SwiperSlide>
                <SwiperSlide className='image-container'>
                    <img src="./principal/abaprincipal14.jpg" />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}