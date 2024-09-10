"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../servers/firebaseConfig';

import 'animate.css';
import './style.css'

function Forms() {

    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoading(false);
            } else {
                router.push('/login');
            }
        });
        return () => unsubscribe();
    }, [router]);

    if (loading) {
        return <p>Carregando...</p>
    }

    return (
        <>
            <title>SRM | POST</title>
            <main id="forms">
                <section className="h-screen flex pt-28 flex-col justify-center items-center">
                    <h1 className="animate__animated animate__fadeInDown text-center text-2xl lg:text-5xl font-bold my-4 text-[#080451]">POSTS</h1>
                    <div className=''>
                        <form className='flex flex-col'>
                            <div>
                                <label htmlFor="titulo">Título</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="texto">Texto a ser publicado</label>
                                <textarea name="message" rows={5}></textarea>
                            </div>
                            <div>
                                <div id="file-upload-form" className="uploader">
                                    <input id="file-upload" type="file" name="fileUpload" accept="image/*" />

                                    <label htmlFor="file-upload" id="file-drag">
                                        <img id="file-image" src="#" alt="Preview" className="hidden" />
                                        <div id="start">
                                            <i className="fa fa-download" aria-hidden="true"></i>
                                            <div>Selecione um arquivo ou arraste aqui</div>
                                            <div id="notimage" className="hidden">Please select an image</div>
                                            <span id="file-upload-btn" className="btn btn-primary">Select a file</span>
                                        </div>
                                        <div id="response" className="hidden">
                                            <div id="messages"></div>
                                            <progress className="progress" id="file-progress" value="0">
                                                <span>0</span>%
                                            </progress>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Forms;