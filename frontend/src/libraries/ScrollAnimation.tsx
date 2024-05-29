"use client"

import { useRef, useEffect } from 'react';
import 'animate.css';

export const FadeInDown = ({ children }: any) => {
    const animatedElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const element = animatedElement.current;
            if (element) {
                const top = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (top < windowHeight) {
                    element.classList.add('animate__animated', 'animate__fadeInDown');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section ref={animatedElement}>
            {children}
        </section>
    )
}

export const FadeInRight = ({ children }: any) => {
    const animatedElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const element = animatedElement.current;
            if (element) {
                const top = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (top < windowHeight) {
                    element.classList.add('animate__animated', 'animate__fadeInRight');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section ref={animatedElement}>
            {children}
        </section>
    )
}