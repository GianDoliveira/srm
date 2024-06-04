"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import "./style.css";

import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    const pathname = usePathname();

    const getLogoSrc = () => {
        switch (pathname) {
            case '/':
                return '/srm1.png';
            case '/sobre':
                return '/logoESCOMIW.png';
            case '/projetopai':
                return '/logoPAI.png';
            case '/escomiw':
                return '/logoESCOMIW.png';
            default:
                return '/srm1.png';
        }
    };

    return (
        <nav className={`w-screen fixed z-10 flex items-center justify-between flex-wrap bg-yellow-500 p-3 transition-transform duration-300 ${isVisible ? '' : '-translate-y-full'}`}>
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Image src={getLogoSrc()} width={176} priority height={176} alt="Logo" />
            </div>
            <div className="block lg:hidden">
                <div className={`nav-icon ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end`}>
                <ul className="text-sm p-2">
                    <li className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-800 mr-4">
                        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">Início</Link>
                    </li>
                    <li className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-800 mr-4">
                        <Link className={`link ${pathname === '/sobre' ? 'active' : ''}`} href="/sobre">Sobre nós</Link>
                    </li>
                    <li className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-800 mr-4">
                        <Link className={`link ${pathname === '/projetopai' ? 'active' : ''}`} href="/projetopai">Projeto PAI</Link>
                    </li>
                    <li className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-800 mr-4">
                        <Link className={`link ${pathname === '/escomiw' ? 'active' : ''}`} href="/escomiw">ESCOMIW</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
