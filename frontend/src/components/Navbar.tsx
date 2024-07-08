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
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
                return '/srm1.png';
            case '/projetopai':
                return '/logoPAI.png';
            case '/escomiw':
                return '/logoESCOMIW.png';
            case '/campomissionario':
                return '/logoESCOMIW.png';
            case '/missionaria':
                return '/srm1.png';
            default:
                return '/srm1.png';
        }
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
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
                <div className="relative inline-block justify-end text-end lg:mr-5 lg:text-left">
                    <div>
                        <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded={isDropdownOpen} aria-haspopup="true" onClick={toggleDropdown}>
                            Mais Opções
                            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    {isDropdownOpen && (
                        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                            <div className="py-1" role="none">
                                <Link href="/missionarias" className={`link ${pathname === '/missionarias' ? 'active' : ''} block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-6`}>Missionárias</Link>
                            </div>
                            <div className="py-1" role="none">
                                <Link href="/campomissionario" className={`link ${pathname === '/campomissionario' ? 'active' : ''} block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-6`}>Campo Missionário</Link>
                            </div>
                            <div className="py-1" role="none">
                                <Link href="/portal" className={`link ${pathname === '/portal' ? 'active' : ''} block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-6`}>Notícias</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
