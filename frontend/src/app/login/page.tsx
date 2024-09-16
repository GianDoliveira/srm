"use client"

import style from "./login.module.css"

import { AiOutlineMail } from 'react-icons/ai'
import { GiPadlock } from 'react-icons/gi'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../servers/firebaseConfig";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleLogin = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('Usuário logado:', userCredential.user);
            router.push("/forms")
        } catch (err: any) {
            setError('Erro ao fazer login. Verifique suas credenciais.');
            console.error(err.message);
        }

        setLoading(false);
    };

    return (
        <main>
            <section className={style.section}>
                <div className={style.container}>
                    <h1 className={style.title}>Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className={style.form}>
                            <label><AiOutlineMail /> Seu e-mail</label>
                            <input
                                type='email'
                                placeholder="example@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            ></input>
                        </div>
                        <div className={style.form}>
                            <label><GiPadlock /> Sua senha</label>
                            <input
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da senha
                                required
                            ></input>
                        </div>
                        <label className={style.checkbox}>
                            <input type="checkbox" />
                            <b>Manter-me logado</b>
                        </label>
                        <div className={style.form}>
                            <button type="submit" disabled={loading}>
                                {loading ? 'Logando...' : 'Logar'}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}