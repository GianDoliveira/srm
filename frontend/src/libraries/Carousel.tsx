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
                        src="/bannerpai.jpg"
                        alt="projeto pai"
                        width={800} 
                        height={400} 
                        layout="responsive" 
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/cursocap.jpg"
                        alt="curso capacitação liderança"
                        width={800} 
                        height={400} 
                        layout="responsive" 
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
};
export const BannerInfo = () => {
    return (
        <section className='text-center lg:h-96 my-10'>
            <h1 className='text-4xl py-10 font-bold text-[#080451]'>DADOS</h1>
            <Swiper
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                className="mySwiper">
                <SwiperSlide className=''>
                    <h1>41 etnias</h1>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <h1>18 países</h1>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <h1>4 continentes</h1>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <h1>2 brasil</h1>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}