import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

import { Link } from "@nextui-org/react";
import Image from "next/image";

function Footer() {
    return (
        <footer className="w-full absolute text-white">
            <div className="text-center p-20 text-3xl bg-[#0F09A1]">
                <h1>CONTATO</h1>
            </div>
            <div className="bg-[#080451] flex max-lg:flex-col lg:justify-between p-5 py-10 text-lg">
                <div className="m-5">
                    <h1 className="text-4xl mb-5">Escomiw</h1>
                    <p>Email: escomiw1re@gmail.com</p>
                    <p>Coordenação (21) 975604800 - Elison Ferreira</p>
                    <p>Tesouraria (21)  96927-8903 - Missionária Wancylane</p>
                </div>
                <div>
                    <Image 
                    src="/qrcode.jpg"
                    alt="qrcode do grupo do whatsapp" 
                    width={300} 
                    height={300}
                    />
                </div>
                <div className="m-5">
                    <h1 className="text-4xl mb-5">SOCIAL</h1>
                    <div className="flex gap-1">
                        <Link href="https://www.instagram.com/escomiw1regiaooficial/"><FaInstagram /></Link>
                        <Link href="https://chat.whatsapp.com/K74DltOQmwt3AfVNEn9hx7"><FaWhatsapp /></Link>
                    </div>
                    <br />
                    <p>© 2024 por SRM</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer


