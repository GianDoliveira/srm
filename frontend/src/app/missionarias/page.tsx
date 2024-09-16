"use client"

import 'animate.css';

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../servers/firebaseConfig';

function Missionarias() {

    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Buscando os posts da coleção 'missionarias'
                const querySnapshot = await getDocs(collection(db, 'uploads'));
                const postsArray: any[] = [];
                querySnapshot.forEach((doc) => {
                    postsArray.push({ id: doc.id, ...doc.data() });
                });
                setPosts(postsArray);
            } catch (error) {
                console.error('Erro ao buscar os posts:', error);
            }
            setLoading(false);
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <p>Carregando posts...</p>;
    }

    return (
        <>
            <title>SRM | Missionárias</title>
            <main id="missionarias">
                <section className="h-screen flex pt-28 flex-col justify-center items-center">
                    <h1 className="animate__animated animate__fadeInDown text-center text-2xl lg:text-5xl font-bold my-4 text-[#080451]">MISSIONÁRIAS</h1>
                    {posts.length === 0 ? (
                        <p>Nenhum post encontrado.</p>
                    ) : (
                        posts.map((post) => (
                            <div key={post.id} className="post">
                                <h2>{post.titulo}</h2>
                                <p>{post.texto}</p>
                                {post.imageUrl && <img src={post.imageUrl} alt={post.titulo} />}
                            </div>
                        ))
                    )}
                </section>
            </main>
        </>
    );
}

export default Missionarias;