"use client"
import React, { useState } from "react";
import Image from "next/image";

import styles from "./Team.module.css";

function Team({ imagem, nome, descricaoLongo }: any) {

    const [mostrarMais, setMostrarMais] = useState(false);

    const toggleMostrarMais = () => {
        setMostrarMais(!mostrarMais);
    };

    return (
        <div className="md:w-1/3">
            <div className="bg-slate-200 rounded-lg shadow-md">
                <div className={styles.image}>
                    <img
                    src={imagem} 
                    alt={nome} 
                    className={styles.imageIcon} />
                </div>
                <div className={`${styles.description}`}>
                    <h1 className="text-3xl font-bold">{nome}</h1>
                    {mostrarMais && <p className="mt-2 flex">{descricaoLongo}</p>}
                    <button onClick={toggleMostrarMais} className={styles.button}>
                        {mostrarMais ? 'Mostrar menos' : 'Mostrar mais'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Team;