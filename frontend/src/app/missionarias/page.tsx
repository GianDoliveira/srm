"use client";

import 'animate.css';
import './styles.css';
import { FadeInDown } from "../../libraries/ScrollAnimation";
import Image from 'next/image';

function Missionaria({ title, content, imageSrc }: any) {
    return (
        <main>
            <section className='flex flex-col justify-center items-center'>
                <div className='lg:w-3/4 px-10 py-5 lg:py-10 border-gray-400'>
                    <h2 className="animate__animated animate__fadeInLeft text-2xl font-bold text-[#080451]">{title}</h2>
                    {content.map((paragraph: any, index: any) => (
                        <p key={index} className='animate__animated animate__fadeInLeft py-1 text-xl'>{paragraph}</p>
                    ))}
                </div>
                <div>
                    <Image width={600} height={800} className='image' src={imageSrc} alt={title} />
                </div>
            </section>
        </main>
    );
}

function Missionarias() {
    const lindinalvaContent = [
        "Lindinalva Claudia Daniel Rosa é missionária e membro da Igreja Metodista Wesleyana, no Alto da Serra. Assistente Social e graduanda em Gestão de Projetos com ênfase em Psicologia Social, atualmente atua como assistente social em uma ONG, onde trabalha com o atendimento de crianças e adolescentes em situação de rua. Ela acredita na possibilidade de transformação na vida dessas crianças e adolescentes, e seu trabalho é voltado para proporcionar a ambas uma oportunidade de vida melhor.",
        "Uma frase que a inspira é: Deus me confiou em minhas mãos, para que o mundo conhecesse o Seu amor."
    ];

    const valquiriaContent = [
        "Sou casada há 35 anos. Meu esposo se chama Nelson Soares Pereira (seminarista no 6° período). Temos três filhos: Neilson (casado), Vivian (casada) e Thiago (solteiro, 23 anos, prestando vestibular). Também temos dois netos e duas netas. ❤",
        "Eu e meu esposo nos batizamos no dia 13/04/1997, pelo Pastor Adalberto da Igreja Metodista Wesleyana (IMW) Cremeri, que nos abençoou nesse momento. Permanecemos um tempo na IMW Cremeri e, posteriormente, servimos na congregação do bairro Simeria, que pertencia à igreja do Cremeri. Durante minha caminhada, atuando como diaconisa, na intercessão e no ministério de libertação, senti o chamado de Deus para ser missionária. Esse chamado ardeu em meu coração, e com o apoio da minha família e do meu pastor, Mauro, que me pastoreou por muito tempo, segui esse sonho. Também recebi o apoio do Pastor Antônio Carlos. Com esse suporte, fui incentivada a ingressar no seminário.",
        "Estudei por cinco anos no Ceforte, em Petrópolis, e tive a oportunidade de convalidar meu diploma na Assembleia de Deus, onde me formei bacharel em Teologia, com reconhecimento pelo MEC. Além disso, fiz minha pós-graduação em Novo Testamento.",
        "Hoje, continuo buscando aprendizado, estudando hebraico e cultura judaica, um desafio que vale muito a pena. Em 2015, fui consagrada missionária pelo Pastor Luiz Leite, uma grande bênção de Deus. No ano seguinte, fui nomeada para a Igreja Metodista Wesleyana do Meio da Serra, sob a liderança do Pastor Antônio Carlos Barbosa, onde fiquei responsável pela congregação na Lopes Trovão (Horta) por sete anos e meio.",
        "Atualmente, sirvo na Igreja Metodista do Alto da Serra, liderada pelo Pastor Maycon Dias e pela Missionária Lindinalva. Atuo na área de intercessão e libertação e coordeno o trabalho Tarde com Deus, realizado todas as terças-feiras, a partir das 15h (que amo muito!). Além disso, trabalho com a missionária Lindinalva na Secretaria Regional de Missões. Tivemos a oportunidade de realizar um trabalho missionário no Piauí no ano passado, onde ficamos por três semanas. Foi uma experiência abençoada e, se pudesse, teria ficado mais tempo!",
        "Realizamos uma campanha de oração das 19h à meia-noite em favor dos trabalhos no campo missionário. Este ano, voltamos ao campo, mas por um período menor, enquanto uma equipe permaneceu para dar continuidade aos trabalhos do projeto PAI.",
        "Também atuo com a Missionária Regina na intercessão, apoiando-a em orações nas quartas-feiras na nossa sede administrativa. No Distrito Alto da Serra, tenho representado o ministério de intercessão, do qual amo fazer parte. Também integro a equipe distrital com a missionária Regina. Amo o que faço em Deus e tudo o que realizo tem o apoio da minha família e do Pastor Maycon, a quem sou imensamente grata. Ele é uma grande bênção na minha vida, e agradeço a Deus pela confiança que Ele deposita em mim.",
        "Uma frase que levo comigo é: SEJA FORTE!",
        "Sonho? Kkkk... Ando com pessoas que me ensinam, me inspiram e me impulsionam. Procuro observar tudo para aprender com elas, pois se um dia for chamada a uma nova missão, quero fazer valer o que aprendi. As missionárias Regina e Lindinalva são grandes exemplos para mim. Meu desejo é representar uma área da nossa regional com excelência, em nome de Jesus Cristo.",
    ];

    const lucianaContent = [
        "Luciana Moraes Vieira é uma mulher de fé e dedicação. Casada há 32 anos com o Pr. Jocemar Vieira, é mãe de dois filhos, Thiago e Taywana. Formada em Pedagogia, Psicanálise Clínica, Teologia, e Terapia Integrativa e Complementar, ela combina suas habilidades acadêmicas com uma paixão genuína por ajudar os outros. Como psicanalista, atua tanto em consultório quanto como coordenadora de uma instituição de psicanálise, onde dedica seu tempo e conhecimento ao crescimento e bem-estar emocional de seus pacientes e colegas.",
        "Ministerialmente, Luciana está envolvida em diversas áreas da igreja, atualmente servindo na IMW do Sarapuí ao lado de seu esposo. Contudo, sua verdadeira vocação é cuidar de vidas. Ela recorda com carinho um momento marcante, quando sentiu Deus ministrar ao seu coração: Vou te posicionar para cuidar de vidas, ensinando, discipulando e cuidando também do emocional delas. Essa mensagem tornou-se o alicerce de sua missão de vida.",
        "Hoje, continuo buscando aprendizado, estudando hebraico e cultura judaica, um desafio que vale muito a pena. Em 2015, fui consagrada missionária pelo Pastor Luiz Leite, uma grande bênção de Deus. No ano seguinte, fui nomeada para a Igreja Metodista Wesleyana do Meio da Serra, sob a liderança do Pastor Antônio Carlos Barbosa, onde fiquei responsável pela congregação na Lopes Trovão (Horta) por sete anos e meio.",
        "Apaixonada pelo papel de mentora e inspiradora, Luciana se vê como uma mulher chamada para levantar outras mulheres, ajudando-as a encontrar força e propósito em suas próprias jornadas. Seu sonho é continuar pregando o evangelho a todas as pessoas e, em breve, lançar livros que possam tocar e transformar vidas. Ela acredita que seu chamado é um presente de Deus, e está comprometida em honrar esse chamado através do amor, ensino e cuidado contínuos."
    ];

    const patriciaContent = [
        "Meu nome é Patrícia Vieira, tenho 52 anos, sou casada com Jonas Pires e mãe de dois filhos. Sou missionária na Central de Petrópolis, bacharel em Teologia e Pedagogia, e empresária na área de comunicação visual.",
        "Nascida em um lar evangélico, minha verdadeira conversão aconteceu aos 23 anos, e desde então tenho dedicado meus dias ao serviço do Reino. Como em toda caminhada cristã, as lutas são constantes, mas meu coração se enche de gratidão por saber que, em todas elas, Deus esteve presente, permitindo-me viver tempos favoráveis."
    ];

    return (
        <>
            <title>SRM | Missionárias</title>
            <main className='mb-5' id="missionarias">
                <h1 className="animate__animated animate__fadeInDown relative top-64 text-center text-2xl lg:text-5xl font-bold mb-4 text-[#080451]">MISSIONÁRIAS</h1>
                <section>
                    <section className="relative pt-64 flex flex-col justify-center items-center">
                        <Missionaria
                            title="Missionária Lindinalva Claudia"
                            content={lindinalvaContent}
                            imageSrc="/missionarias/lindinalva.JPG"
                        />
                        <section className='flex flex-col justify-center items-center'>
                            <div className='lg:w-3/4 px-10 py-5 lg:py-10 border-gray-400'>
                                <p className='py-1 text-xl'>Atuo na Secretaria de Missões da Primeira Região, focada no trabalho de liderança voluntária. Com 18 anos de ministério, meu trabalho é direcionado para jovens e adolescentes, com um chamado específico para a liderança ministerial e formação de líderes por meio do discipulado, algo que considero de extrema importância. Na igreja onde sou auxiliar do pastor, trabalhamos o desenvolvimento do voluntariado com o lema: "Amar a Deus, servir ao próximo e amar ao mundo". Acreditamos que, ao servir ao próximo, estamos cumprindo o mandamento de Deus: "Ame o teu próximo como a ti mesmo".</p>
                                <p className='py-1 text-xl'>Enfrentamos o grande desafio de organizar projetos sociais, e nosso objetivo é cuidar da igreja, pois somos seus mordomos. Sabemos que ela pertence a um único dono: Jesus Cristo.</p>
                            </div>
                            <div>
                                <img src="/missionarias/lindinalva2.JPG" alt="Miss Lindinalva com crianças" />
                                <img src="/missionarias/lindinalva3.JPG" alt="Miss Lindinalva com crianças" />
                            </div>
                        </section>
                        <section className='flex flex-col justify-center items-center'>
                            <div className='lg:w-3/4 px-10 py-5 lg:py-10 border-gray-400'>
                                <p className='py-1 text-xl'>Coordeno um campo missionário em Teresina e Amarante, no Piauí, e tem sido um tempo prazeroso. Nosso objetivo é formar um futuro distrito, e estamos trabalhando para fortalecer obreiros naquela região. Sonhamos com futuros seminaristas, pastores e missionários que ganharão almas para o Reino de Deus. O Nordeste é uma terra promissora, e temos a certeza de que iremos alargar nossas tendas sobre aquele lugar. Os pastores que assumiram as igrejas lá aceitaram o desafio de formar líderes fortes para essa missão. Nosso lema é: "Teresina pertence a Jesus".</p>
                                <p className='py-1 text-xl'>Coordenar uma Secretaria de Missões, que antes era vista como um campo predominantemente masculino, tem sido desafiador, mas estamos trazendo uma nova dinâmica para a secretaria. Não estou sozinha nesse trabalho; tenho uma equipe extraordinária pela qual sou muito grata. Juntos, temos o privilégio de contribuir para o crescimento do Reino de Deus. Muitas vezes, me pego pensando: "O que posso dar ao Senhor por todos os benefícios que Ele me tem concedido?"</p>
                                <p className='py-1 text-xl'>A Secretaria de Missões tem o privilégio de contar com pessoas comprometidas com o crescimento do Reino. Por isso, quero convidar você a fazer parte dessa obra. Venha servir ao Senhor junto conosco e trabalhar na Secretaria de Missões!</p>
                            </div>
                            <div>
                                <Image alt='missionarias' width={600} height={800} src="/missionarias/lindinalva4.JPG" className='image' />
                            </div>
                        </section>
                    </section>
                    <section className="relative pt-64 flex flex-col justify-center items-center">
                        <Missionaria
                            title="Missionária Valquíria"
                            content={valquiriaContent}
                            imageSrc="/missionarias/valquiriaWesleyana.JPG"
                        />
                    </section>
                    <section className="relative pt-64 flex flex-col justify-center items-center">
                        <Missionaria
                            title="Missionária Luciana Moraes"
                            content={lucianaContent}
                            imageSrc="/missionarias/luciana2.JPG"
                        />

                        <section className='flex flex-col justify-center items-center'>
                            <div className='lg:w-3/4 px-10 py-5 lg:py-10 border-gray-400'>
                                <p className='py-1 text-xl'>Eu fui líder distrital de adolescentes...</p>
                            </div>
                            <div>
                                <img src="/missionarias/luciana3.JPG" alt="Miss Luciana na igreja pregando" />
                                <img src="/missionarias/luciana4.JPG" alt="Miss Luciana na igreja pregando" />
                            </div>
                        </section>
                        <section className='flex flex-col justify-center items-center'>
                            <div className='lg:w-3/4 px-10 py-5 lg:py-10 border-gray-400'>
                                <p className='py-1 text-xl'>Minha primeira missão foi na Região dos Lagos, quando conheci essa turma da ESCMIW. Pedi para ir com os jovens passar o Carnaval, dormindo no chão da igreja e fazendo evangelismo. Lembro que eles ficaram preocupados, pois já me conheciam como uma adulta e esposa de pastor; era incomum eu dormir no chão com eles. Mas, com a minha insistência, eles acabaram concordando em me levar. Na época, o líder era o hoje Pr. Vitor, de Cabo Frio.</p>
                            </div>
                            <div>
                                <Image alt='missionarias' width={600} height={800} src="/missionarias/luciana5.JPG" className='image' />
                            </div>
                        </section>
                        <section className='flex flex-col justify-center items-center'>
                            <div className='lg:w-3/4 px-10 py-5 lg:py-10 border-gray-400'>
                                <p className='py-1 text-xl'>Eu estava em Curitiba, em Campo Largo, participando de um trabalho da ESCMIW geral. Foram dias de muito esforço e dedicação naquele lugar.</p>
                            </div>
                            <div>
                                <Image alt='missionarias' width={600} height={800} src="/missionarias/luciana6.JPG" className='image' />
                            </div>
                        </section>
                        <section className='flex flex-col justify-center items-center'>
                            <div className='px-10 py-5 lg:py-10 border-gray-400'>
                                <p className='py-1 text-xl'>
                                    Até que eu fui parar em Mato Grosso do Sul !!!
                                </p>
                            </div>
                            <div>
                                <Image alt='missionarias' width={600} height={800} src="/missionarias/luciana7.JPG" className='image' />
                            </div>
                        </section>
                        <section className='flex flex-col justify-center items-center'>
                            <div className='lg:w-3/4 px-10 py-5 lg:py-10 border-gray-400'>
                                <p className='py-1 text-xl'>
                                    De lá, liderei uma equipe para Naviraí, em uma viagem de seis horas saindo de Campo Grande, onde o restante da equipe permaneceu. Éramos quatro guerreiros e fomos parar nessa cidade, que fica muito próxima da fronteira com o Paraguai.
                                </p>
                            </div>
                            <div>
                                <Image alt='missionarias' width={600} height={800} src="/missionarias/luciana8.JPG" className='image' />
                            </div>
                        </section>
                        <section className='flex flex-col justify-center items-center'>
                            <div className='px-10 py-5 lg:py-10 border-gray-400'>
                                <p className='py-1 text-xl'>
                                    E lá fomos chamados pelo prefeito para abençoar a cidade .                            </p>
                            </div>
                            <div>
                                <Image alt='missionarias' width={600} height={800} src="/missionarias/luciana9.JPG" className='image' />
                            </div>
                        </section>
                        <section className='flex flex-col justify-center items-center'>
                            <div className='px-10 py-5 lg:py-10 border-gray-400'>
                                <p className='lg:w-3/4 py-1 text-xl'>
                                    O Piauí sempre fez parte da minha vida, mesmo antes de eu chegar lá. Durante a pandemia, eu fazia um programa de rádio e conseguimos arrecadar muitos fundos para enviar para Amarante.
                                </p>
                            </div>
                            <div>
                                <Image alt='missionarias' width={600} height={800} src="/missionarias/luciana10.JPG" className='image' />
                            </div>
                        </section>
                        <section className='flex flex-col justify-center items-center'>
                            <div className='px-10 py-5 lg:py-10 border-gray-400'>
                                <p className='py-1 text-xl'>
                                    Fui diretora Regional de Adultos
                                </p>
                            </div>
                            <div>
                                <Image alt='missionarias' width={600} height={800} src="/missionarias/luciana11.JPG" className='image' />
                            </div>
                        </section>
                        <section className='flex flex-col justify-center items-center'>
                            <div className='px-10 py-5 lg:py-10 border-gray-400'>
                                <p className='lg:w-3/4 py-1 text-xl'>
                                    E hoje somos líderes de casais
                                </p>
                                <p className='lg:w-3/4 py-1 text-xl'>
                                    Minha vida profissional mudou, e no próximo dia 6 de setembro completo 50 anos. Hoje, sou Psicanalista e Coordenadora de uma faculdade, e tudo isso aconteceu após os 45 anos.
                                </p>
                            </div>
                            <div>
                                <Image alt='missionarias' width={600} height={800} src="/missionarias/luciana12.JPG" className='image' />
                            </div>
                        </section>
                    </section>
                    <section className="relative pt-64 flex flex-col justify-center items-center">
                        <Missionaria
                            title="Missionária Patrícia Vieira"
                            content={patriciaContent}
                            imageSrc="/missionarias/patricia.JPG"
                        />

                    </section>
                </section>
            </main>
        </>
    );
}

export default Missionarias;
