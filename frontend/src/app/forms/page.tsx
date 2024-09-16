"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db, storage } from '../../../servers/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import 'animate.css';
import './style.css'

function Forms() {
    const [loading, setLoading] = useState(true);
    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');
    const [categoria, setCategoria] = useState('campoMissionario');
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
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

    const handleFileChange = (e: any) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setUploading(true);

        try {
            let imageUrl = '';
            // Upload da imagem se o usuário tiver enviado um arquivo
            if (file) {
                const fileRef = ref(storage, `uploads/${file.name}`);
                const snapshot = await uploadBytes(fileRef, file);
                imageUrl = await getDownloadURL(snapshot.ref);
            }

            // Salvando no Firestore
            await addDoc(collection(db, 'materiais'), {
                titulo: titulo, // Certifique-se de que está capturando os dados do state corretamente
                texto: texto, // Certifique-se de que o texto está vindo corretamente do state
                categoria: categoria,
                imageUrl: imageUrl || '', // Se não houver imagem, salva como string vazia
                createdAt: new Date()
            });

            alert('Matéria publicada com sucesso!');
            // Limpar o formulário
            setTitulo('');
            setTexto('');
            setCategoria('campoMissionario');
            setFile(null);
        } catch (err) {
            console.error('Erro ao publicar:', err);
            alert('Erro ao publicar a matéria. Tente novamente.');
        }

        setUploading(false);
    };

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
                        <form className='flex flex-col' onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="titulo">Título</label>
                                <input
                                    type="text"
                                    value={titulo}
                                    onChange={(e: any) => setTitulo(e.target.value)} // Capturando o título corretamente
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="texto">Texto a ser publicado</label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    value={texto} // Certificando-se de que o valor do textarea está vinculado ao state
                                    onChange={(e: any) => setTexto(e.target.value)} // Capturando o texto corretamente
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <label htmlFor="post">Onde deseja publicar?</label>
                                <select
                                    value={categoria}
                                    onChange={(e: any) => setCategoria(e.target.value)}
                                    required
                                >
                                    <option value="campoMissionario">Campo Missionário</option>
                                    <option value="missionarias">Missionárias</option>
                                    <option value="noticias">Notícias</option>
                                </select>
                            </div>
                            <div>
                                <div id="file-upload-form" className="uploader">
                                    <input
                                        id="file-upload"
                                        type="file"
                                        name="fileUpload"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                    <label htmlFor="file-upload" id="file-drag">
                                        <div>Selecione um arquivo ou arraste aqui</div>
                                    </label>
                                </div>
                            </div>
                            <div className='text-center mt-4'>
                                <button
                                    type="submit"
                                    disabled={uploading}
                                    className='rounded-lg bg-blue-500 p-2 text-white'
                                >
                                    {uploading ? 'Publicando...' : 'Publicar'}
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Forms;
