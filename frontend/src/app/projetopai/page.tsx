"use client"

import "./styles.css";
import { FadeInDown } from "../../libraries/ScrollAnimation";

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import img from "next/image";

function ProjetoPai() {
    return (
        <>
            <title>SRM | Projeto PAI</title>
            <main>
                <section id="projetopai" className="flex pt-56 flex-col justify-center items-center">
                    <h1 className="animate__animated animate__fadeInDown text-center text-4xl font-bold my-4 text-[#080451]">PAI - PROGRAMA DE APADRINHAMENTO INFANTIL</h1>
                    <div className="animate__animated animate__fadeInLeft lg:w-3/4 px-10 py-5 lg:py-10 border-gray-400">
                        <p className="font-bold max-lg:text-xl">Objetivo Geral</p>
                        <p className="py-5 max-lg:text-xl">Oferecer às crianças e aos adolescentes no Piauí ações para propiciar e garantir a
                            convivência e o fortalecimento dos vínculos familiares e comunitários, através da troca de
                            diversas experiências, do acesso a atividades educacionais, lúdicos pedagógicas,
                            culturais, musicais, espirituais e encaminhamentos para o serviço psicossocial.
                        </p>
                        <p className="py-5 max-lg:text-xl">Trata-se de um programa de apadrinhamento infantil que ocorre na Igreja Metodista
                            Wesleyana em Amarante-PI, Teresina-PI e em bairros adjacentes.</p>
                        <p className="py-5 max-lg:text-xl">O Projeto tem como alvo crianças e adolescentes de ambos os sexos, de 3 a 12 anos e
                            adolescentes de 13 a 17 anos, pertencentes aos diversos povoados carentes do Piauí,
                            como povoado de Salobro e Buritizinho.
                        </p>
                        <p className="font-bold max-lg:text-xl">Serviços</p>
                        <p className="py-5 max-lg:text-xl">As atividades acontecem todos os sábados de 09h às 17h. As crianças fazem 3 refeições
                            durante o dia o café, almoço e lanche da tarde. Durante o dia participam de oficinas de
                            alfabetização, instrumento, culinária entre outras.
                        </p>
                        <p className="font-bold max-lg:text-xl">Desafios</p>
                        <p className="py-5 max-lg:text-xl">
                            Atualmente em Buritizinho e Salobro só está acontecendo as oficinas de Reforço escolar,
                            Pedagógica Lúdica e recreação. Estamos buscando parceiros para doação de
                            instrumentos musicais, material de artesanato e brinquedos para recreação e material
                            pedagógico para iniciar as oficinas.
                        </p>
                        <p className="font-bold max-lg:text-xl">Contribuições</p>
                        <p className="py-5 max-lg:text-xl">
                            Com ofertas mensais a partir de R$ 20,00 você apadrinha uma criança neste lindo projeto. <br />
                            Seja um mantenedor. <br />
                            Para depósitos bancários: <br />
                            Sec. Regional de Missões <br />
                            Banco Bradesco <br />
                            Agência: 4226 <br />
                            Conta Corrente: 130030579 <br />
                            PIX: 13.836.364/0141-08 <br />
                        </p>
                    </div>
                </section>
            </main>
            <main>
                <section className="flex flex-col justify-center items-center">
                    <div className="flex flex-col">
                        <h1 className="animate__animated animate__fadeInDown text-center text-4xl font-bold my-4 text-[#080451]">PROJETO PAI – COMO TUDO COMEÇOU?</h1>
                        <div className="max-lg:p-5 flex justify-center">
                            <FadeInDown>
                                <p className="max-lg:text-xl">Para conhecer melhor como tudo começou, nada melhor que buscar saber e conhecer de quem esteve
                                    no Campo Missionário na implantação do Projeto PAI.
                                </p>
                                <p className="py-2 max-lg:text-xl">Entrevistamos o pastor Wilson Pacheco, que pastoreou a IMW Amarante entre os anos de 2013 a 2018, e
                                    deu o pontapé inicial deste lindo Programa voltado para as crianças.

                                </p>
                                <p className="max-lg:text-xl">Vamos ao resultado deste bate-papo!</p>
                            </FadeInDown>
                        </div>
                        <div className="lg:px-20">
                            <details className="bg-white shadow-md rounded my-6">
                                <summary className="w-full px-8 py-4 text-left cursor-pointer font-bold text-gray-900">1. Quando a primeira região decidiu iniciar um trabalho específico para crianças no campo
                                    missionário no estado do Piauí?
                                </summary>
                                <p className="answer">O pastor Wilson Martins Pacheco, em sua experiência cristão antes de ingressar na IMW observou um
                                    trabalho voltado para crianças conforme o Projeto PAI, e a partir desta ideia inicial traçou uma estratégia
                                    parecida para a IMW Amarante. <br />
                                    Quando o pastor Wilson chegou no PIAUI (pastoreou a IMW Amarante entre 2013 a 2018) haviam poucas
                                    crianças e, com apenas uma semana na cidade, percebeu a presença de cerca de 10 crianças na porta da
                                    igreja. A esposa do pastor, irmã Jaqueline, foi quem motivou-o a iniciar, sendo ela a marcar a data e
                                    organizar o início do projeto. <br />
                                    Idealizou-se então o Projeto Crianças para Cristo: Com o apoio dos então secretários Josinei Salles
                                    (Missões) e Antônio Maia (Ação Social) construíram uma pequena quadra para as crianças brincarem,
                                    como uma iniciativa da igreja local, com o apoio da SRM e SAS, idealizando trazer as crianças e utilizar os
                                    adolescentes como tutores e auxiliando nas atividades de recreação, enquanto as irmãs da igreja ficariam
                                    responsáveis pela alimentação. <br />
                                    O primeiro mês foi sustentado com o apoio da igreja local, cada um contribuindo com os alimentos
                                    ofertados às crianças. Durante os 4 anos iniciais do Projeto os encontros aconteciam todos os sábados
                                    (2015 a 2018). <br />
                                    A dinâmica das atividades era a seguinte: café da manhã era oferecido entre 08h às 08h15, pra criar a
                                    cultura da pontualidade, entre 08h15 e 09h acontecia o culto, com louvor, história bíblica e outras
                                    atividades. Ao fim do culto aconteciam as oficinas de reforço escolar, alfabetização, música, artesanato e
                                    futebol. <br />
                                    O momento de recreação se estendia até as 11h30m onde acontecia o almoço e depois as crianças eram
                                    liberadas. <br />
                                    Os adolescentes da igreja eram os grandes propulsores do trabalho. Após o almoço, os adolescentes
                                    ficavam na igreja em estudo bíblico denominado por eles como CLUBE SANTO, fazendo alusão a John
                                    Wesley. Após o Clube Santo eles ensaiavam para o culto de domingo <br />
                                </p>
                            </details>
                            <details className="bg-white shadow-md rounded my-6">
                                <summary className="w-full px-8 py-4 text-left cursor-pointer font-bold text-gray-900">2. Qual o ano que o projeto PAI teve seu início?</summary>
                                <p className="answer">O projeto PAI teve seu início oficialmente no dia 03 de outubro de 2015. Na oportunidade era ainda
                                    denominado como Projeto Criança para Cristo.
                                </p>
                            </details>
                            <details className="bg-white shadow-md rounded my-6">
                                <summary className="w-full px-8 py-4 text-left cursor-pointer font-bold text-gray-900">3. Quem era o bispo da primeira Região na oportunidade?</summary>
                                <p className="answer">Naquela época, o bispo da Primeira Região Eclesiástica era o Reverendíssimo Bispo Elisiário, que apoiou
                                    a motivação do então pastor da IMW Amarante, pastor Wilson Martins Pacheco.
                                </p>
                            </details>
                            <details className="bg-white shadow-md rounded my-6">
                                <summary className="w-full px-8 py-4 text-left cursor-pointer font-bold text-gray-900">4. Quem era o secretário de missões da região?</summary>
                                <p className="answer">
                                    Pastor Josinei Salles era o Secretário de Missões Regional na oportunidade e, não mediu esforços em
                                    promover na Primeira Região o trabalho realizado no Piauí, buscando obter mantenedores para o Projeto.
                                </p>
                            </details>
                            <details className="bg-white shadow-md rounded my-6">
                                <summary className="w-full px-8 py-4 text-left cursor-pointer font-bold text-gray-900">5. Qual a principal motivação para implantar PAI?</summary>
                                <p className="answer">
                                    Na igreja de Amarante haviam poucas crianças, o filho do pastor Wilson, Lucas , que na época estava com
                                    com sete anos, logo fez amizade com as crianças da rua e começou a levá-los para a casa pastoral e
                                    consequentemente começaram a frequentar a igreja também. Isso começou a sensibilizar a igreja e,
                                    falando entre os irmãos eles se mobilizaram e começaram a chamar outras crianças... e outros e outros
                                    foram chegando, até o ponto em que foi necessário limitar a 50 crianças para que pudessem ter como
                                    atender a todas. <br />
                                    As crianças que frequentavam o Projeto começaram a ir para o culto à noite, mais de 80% dos que
                                    participavam eram filhos de não crentes e alguns traziam seus pais ao culto
                                </p>
                            </details>
                            <details className="bg-white shadow-md rounded my-6">
                                <summary className="w-full px-8 py-4 text-left cursor-pointer font-bold text-gray-900">6. Quais foram os maiores desafios da implantação do PAI no Piauí?</summary>
                                <p className="answer">
                                    A escassez de recursos financeiros para atender a demanda de alimentação e outros investimentos para
                                    adequação de salas para o projeto. <br />
                                    Conforme o projeto foi se desenvolvendo percebeu-se a necessidade de implementar aulas de
                                    alfabetização e reforço escolar. <br />
                                    Em relação a alimentação, as necessidades nutricionais eram alcançadas, visto que a maioria tinha
                                    hábitos alimentares simples, então não demandava um custo elevado, embora fosse uma refeição
                                    simples, não significava que não era nutritivo, pois o cardápio variava: no café da manha era servido
                                    cuscuz, café com leite, achocolatado, e pão e no almoço sempre tinha uma variedade de legumes, arroz,
                                    feijão e proteína, além de suco e fruta de sobremesa. <br />
                                    O apoio psicológico era o maior desafio, pois dentre as crianças havia crianças que sofriam maus tratos e
                                    crianças oriundas de família desestruturadas. <br />
                                </p>
                            </details>
                            <details className="bg-white shadow-md rounded my-6">
                                <summary className="w-full px-8 py-4 text-left cursor-pointer font-bold text-gray-900">7. Qual o momento mais marcante (em sua gestão como Secretário Regional de Missões) do
                                    desenvolvimento do PAI no campo missionário (igrejas ou congregações)?
                                </summary>
                                <p className="answer">
                                    O momento mais marcante foi a transferência do pastor Wilson para o RJ. Na despedida, uma das crianças
                                    assentou-se ao lado do pastor, recostou a cabeça no ombro do pastor, pegou 1 real e deu ao pastor como
                                    que se pedisse para ele ficar. <br />
                                    Ver o desenvolvimento de crianças que chegaram na igreja e aprenderam instrumento ou outras
                                    habilidades e hoje estão no ministério de louvor da igreja, é o fruto do trabalho que mais deixou marcas e
                                    boas lembranças. <br />
                                    O batismo de crianças que se tornaram adolescentes durante o projeto também ficou marcado
                                    positivamente. <br />
                                    Para o pastor Wilson Pacheco, o trabalho com crianças é a garantia de que a igreja está saudável, embora
                                    seja um trabalho a longo prazo é o trabalho mais garantido da igreja. Se a igreja não tem crianças, vai
                                    chegar o período em que não terá adolescente e consequentemente não terá jovens e, posteriormente,
                                    será uma igreja que não terá sua continuidade. <br />
                                </p>
                            </details>
                        </div>
                    </div>
                </section>
            </main>
            <section className="">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiperPai"
                >
                    <SwiperSlide>
                        <img alt="fotos do projeto" src="/pai/projetopai1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img alt="fotos do projeto" src="/pai/projetopai2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img alt="fotos do projeto" src="/pai/projetopai3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img alt="fotos do projeto" src="/pai/projetopai4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img alt="fotos do projeto" src="/pai/projetopai5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img alt="fotos do projeto" src="/pai/projetopai6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img alt="fotos do projeto" src="/pai/projetopai7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img alt="fotos do projeto" src="/pai/projetopai8.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img alt="fotos do projeto" src="/pai/projetopai9.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img alt="fotos do projeto" src="/pai/projetopai10.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img alt="fotos do projeto" src="/pai/projetopai11.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img alt="fotos do projeto" src="/pai/projetopai12.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img alt="fotos do projeto" src="/pai/projetopai13.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img alt="fotos do projeto" src="/pai/projetopai14.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img alt="fotos do projeto" src="/pai/projetopai15.jpg" />
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}

export default ProjetoPai;