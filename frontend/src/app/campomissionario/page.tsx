import 'animate.css';
import Image from 'next/image';

function Mission() {
    return (
        <>
            <title>SRM | Campo Missionário</title>
            <main id="campomissionario">
                <h1 className="relative top-80 animate__animated animate__fadeInDown text-center text-2xl lg:text-5xl font-bold text-[#080451]">
                    CAMPO MISSIONÁRIO
                </h1>
                <section className="h-screen relative top-36 flex flex-col lg:flex-row justify-center lg:justify-around items-center">
                    <div>
                        <Image
                            src="/campomissionario.jpg"
                            alt='Igrejas do campo missionário'
                            width={800}
                            height={400}
                        />
                    </div>
                    <aside className='lg:border-1 lg:h-1/2 lg:p-5'>
                        <h2 className="text-2xl font-bold mb-4">Relatórios</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <a
                                    download="Relatório1mesAmarante.pdf"
                                    href="./pdf/RelatórioAmarante.pdf"
                                    className='text-blue-600 visited:text-purple-600 hover:underline'
                                >
                                    Relatório 1º mês - Amarante
                                </a>
                            </li>
                            <li>
                                <a
                                    download="RelatórioCampoMissionário.pdf"
                                    href="./pdf/RelatórioCampoMissionário.pdf"
                                    className='text-blue-600 visited:text-purple-600 hover:underline'
                                >
                                    Relatório do Campo Missionário
                                </a>
                            </li>
                            <li>
                                <a
                                    download="NecessidadesCampoAmarante.pdf"
                                    href="./pdf/NecessidadesCampoAmarante.pdf"
                                    className='text-blue-600 visited:text-purple-600 hover:underline'
                                >
                                    Necessidades Campo Amarante
                                </a>
                            </li>
                            <li>
                                <a
                                    download="RelatórioCampoMissionárioAgosto.pdf"
                                    href="./pdf/RelatórioCampoMissionárioAgosto.pdf"
                                    className='text-blue-600 visited:text-purple-600 hover:underline'
                                >
                                    Relatório do Campo Missionário Agosto
                                </a>
                            </li>
                            <li>
                                <a
                                    download="AçõesEscomiw2024.pdf"
                                    href="./pdf/AçõesEscomiw2024.pdf"
                                    className='text-blue-600 visited:text-purple-600 hover:underline'
                                >
                                    Ações Escomiw 2024
                                </a>
                            </li>
                        </ul>
                    </aside>
                </section>
            </main>
            <main>
                <h1 className="lg:mb-10 animate__animated animate__fadeInDown text-center text-2xl lg:text-5xl font-bold text-[#080451]">
                    NOSSO TRABALHO
                </h1>
                <section className="flex justify-center items-center mb-20">
                    <video
                        width="800"
                        height="auto"
                        controls

                    >
                        <source src="./video/campomissionario.mp4" type="video/mp4" />
                        Seu navegador não suporta o elemento de vídeo.
                    </video>
                </section>
            </main>
        </>
    );
}

export default Mission;