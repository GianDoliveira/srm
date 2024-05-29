"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function Page() {
    return (
        <>
            <title>ESCOMIW</title>
            <main>
                <section className="flex pt-56 flex-col justify-center items-center">
                    <h1 className="animate__animated animate__fadeInDown text-center text-5xl font-bold my-4 text-[#080451]">HISTÓRICO ESCOMIW</h1>
                    <div className="animate__animated animate__fadeInLeft lg:w-3/4 px-20 py-5 lg:py-10 border-gray-400">
                        <p className="py-5 max-lg:text-2xl text-xl">Muito tempo atrás, em Vitória – ES, teve na Igreja Metodista Wesleyana início a um
                            movimento jovem muito intenso. A então IMW naquela localidade alcançou grande
                            notoriedade. Seu jovem pastor logo se destacou no cenário ministerial e começou a
                            receber irmãos de várias outras igrejas wesleyanas de todo o Brasil, que se dispunham a ir
                            para lá, integrar-se ao grande mover evangelístico que ali nascia.
                        </p>
                        <p className="py-5 max-lg:text-2xl text-xl">Foi de fato um avivamento espiritual para aqueles dias. Viviam ali em forma de comunidade
                            e totalmente pela fé. A tônica era evangelismo; discipulado e oração. Logo, logo a coisa
                            tomou proporções maiores.</p>
                        <p className="py-5 max-lg:text-2xl text-xl">Durante muito tempo esse trabalho deixou de existir. E assim ficou até que certa feita,
                            estando um dos nossos então pastores servindo à Igreja como secretário regional de
                            missões; o bispo e superintendente regional da 2ª Região Eclesiástica, Bispo Sebastião
                            Calegari, resgatou a Escomiw e a trouxe de volta ao cenário denominacional.
                        </p>
                        <p className="py-5 max-lg:text-2xl text-xl">De pronto, a Escomiw tomou a iniciativa de formar caravanas que abençoariam o Campo
                            Missionário do Nordeste por longos anos.

                        </p>
                        <p className="py-5 max-lg:text-2xl text-xl">Em 2003, tendo sido eleito secretário regional de missões, na 1ª Região Eclesiástica, o
                            Pr. Nehemias Rodrigues Pereira, acontece um reavivamento da Escomiw como braço da
                            SRM. De pronto ele aceitou e encaminhou isso como parte do seu plano de ação, tendo
                            aprovação unânime do plenário do então Concílio Regional.
                        </p>
                        <p className="py-5 max-lg:text-2xl text-xl">A Escomiw é um braço de interação para os chamados membros leigos da Igreja; uma
                            oportunidade de resgate da sua motivação para atuar e participar ativamente dos
                            processos de edificação e crescimento da Igreja. Foi assim estabelecido pelo então
                            superintendente regional da 1ªRE, bispo Onaldo Rodrigues Pereira, a Escomiw, como um
                            segmento de treinamento e capacitação de pessoas e de como isso poderia proporcionar
                            à membresia da Igreja maior despertamento e preparo para deixar de ser mera expectadora
                            do que ocorria no cenário de crescimento denominacional e participasse de forma mais
                            ativa e intensiva nisso
                        </p>
                        <p className="py-5 max-lg:text-2xl text-xl">No ano de 2010, por ocasião do Congresso Geral de Missões, a Escomiw passa a ser
                            um setor da Secretaria Geral de Missões, e sua implantação em todas as outras Regiões
                            Eclesiásticas da Igreja Metodista Wesleyana passa a ser promovida.
                        </p>
                        <p className="py-5 max-lg:text-2xl text-xl">Muito mais que ir às Regiões e apenas pulverizar as bases de funcionamento da
                            Escomiw, nosso propósito tem sido ir a elas, com o intuito de separar obreiros e
                            voluntários, promovendo-lhes um treinamento diferenciado, preparando-os para que tudo
                            aconteça a partir do trabalho destes capacitados em sua respectiva Região e distrito.
                        </p>
                        <p className="py-5 max-lg:text-2xl text-xl">A partir daí, formar-se a Coordenação Regional da Escomiw.</p>
                        <p className="py-5 max-lg:text-2xl text-xl">Passaram por esta fase desde então como Coordenadores da ESCOMIW, Pr Marcos
                            Batista; Pr. Solimar Pinheiro e atualmente Pr Carlos Alberto Pinheiro até o último concilio
                            Geral 2021, sendo neste reeleito até o próximo sexênio.</p>
                        <p className="py-5 max-lg:text-2xl text-xl">Diante da mesma visão de promover a evangelização, estamos com as lideranças
                            regionais estabelecidas, efetuando treinamentos incansavelmente objetivando formar
                            lideranças distritais e locais, para o prosseguimento da obra.</p>
                        <p className="py-5 max-lg:text-2xl text-xl">A coordenação Geral tem seus projetos anuais, e cada região os seus projetos
                            específicos.</p>
                        <p className="py-5 max-lg:text-2xl text-xl">Conheça um pouco mais dos projetos da Escomiw na 1ª Região Eclesiástica.</p>
                    </div>
                </section>
            </main>
            <main className='w-full mb-10'>
                <section className="flex justify-center items-center">
                    <Swiper
                        pagination={{
                            type: 'fraction',
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        }}
                        modules={[Pagination, Navigation]}
                        className='lg:w-1/2'
                    >
                        <SwiperSlide>
                            <img src="./ESCOMIW1.JPG" alt="Equipe Missionário Regional" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="./ESCOMIW2.JPG" alt="Equipe Missionário Regional" />
                        </SwiperSlide>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </Swiper>
                </section>
            </main>
        </>
    )
}

export default Page;