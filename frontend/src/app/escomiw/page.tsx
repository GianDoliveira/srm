"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Team from "../../libraries/Team";
import { FadeInDown } from "../../libraries/ScrollAnimation";

const membros = [
    {
        imagem: './photobio1.png',
        nome: 'Elison Ferreira',
        descricaoLongo: 'Pastoreando a Frente Missionária da IMW em Hiterland, Belford Roxo desde 2020, o Coordenador Regional da Escomiw é formado como Bacharel em Teologia, pós graduado em Coaching Cristão, Psicopedagogia e Gestão estratégica de Pessoas, Liderança e Mentoria Cristã. Formado em Práticas de Ensino pela Força Aérea, atua como professor de matérias teológicas, homilética e exegese, sendo o idealizador do Instituto Dokimos de Ensino. Dentre as formações complementares, é Psicanalista Clínico, Capelão Escolar e possui especialização em Plantação e Revitalização de Igrejas. O aspirante Elison, juntamente com a equipe da Escola Missionária Wesleyana(ESCOMIW 1 Região) realiza treinamentos e pratica evangelística de forma dinâmico, Inovadora e flexível buscando incentivar as igrejas locais no trabalho de evangelização urbana e também despertar vocacionados para o campo missionário.'
    },
    {
        imagem: './photobio2.png',
        nome: 'Fábio Souza',
        descricaoLongo: 'Membro da IMW Pilar, Formado em Capelania hospitalar e escolar. É atuante com o Start Kids em sua igreja local. Na Escomiw, a sua palestra é sobre "Censo religioso" onde apresenta técnicas e ferramentas para uma análise prévia da localidade a ser evangelizada. Levando sempre seu formidável e fervoroso serviço ao evangelho!'
    },
    {
        imagem: './photobio3.png',
        nome: 'Lilian Azevedo',
        descricaoLongo: 'Membro da IMW Central em Itaboraí. Graduação em Serviço Social (UVA), Capelã - Formada pela Fenccap - Federação Nacional Civil de Capelania. E o que a motiva é superar os seus limites, todos os dias. Compõe a liderança da Escomiw Regional. É responsável pelas palestras: Evangelismo Inclusivo, com o intuito de conscientização da importância da inclusão, das pessoas com deficiência. Pois "O amor de Deus é inclusivo". E a palestra: Evangelismo através da Pintura Artística Facial.'
    },
    {
        imagem: './photobio4.png',
        nome: 'Alexandre Silva',
        descricaoLongo: 'Membro da IMW Central Niterói lider de capelanias e palestrante de capenalania carcerária. O coach financeiro e educador financeiro e tem contribuído a na escomiw distrital regional e geral. Deixando seu legado em todos os lugares.'
    },
    {
        imagem: './photobio5.png',
        nome: 'Luciene Santos',
        descricaoLongo: 'Membro da IMW - Pilar A artesã, vem contagiando a todos com seus trabalhos evangelísticos e também alcançando ao público adulto através de sua dedicação à confecção de acessórios com cores:"plano da salvação". Líder de Ministério infantil em sua igreja Local. Traz nas suas palestras, técnicas de evangelização infantil, trazendo a alegria e felicidade ao coração dos pequeninos aos mais velhos. Até os pequeninos aprendem a importância de compartilhar o Reino de Deus e são ensinados a Isso em suas palestras.'
    },
    {
        imagem: './photobio6.png',
        nome: 'Shenia Quézia',
        descricaoLongo: 'Membro da IMW Fragoso, Magé. Formada em Pedagogia (UNESA), pós- graduação em Psicopedagógia Clínica e Institucional (UNESA) e Seminarista do IWE , polo Petrópolis. É atuante na parte pedagógica da Escomiw Regional .Sua palestra nos treinamentos da Escomiw é sobre " Os povos menos evangelizados no Brasil " que tem objetivo de incentivar e contagiar vocacionados pelo desejo ardente em levar o evangelho aos grupos de pessoas que são menos evangelizados no Brasil.'
    },
    {
        imagem: './photobio7.png',
        nome: 'Missionária Lindinalva Rosa',
        descricaoLongo: 'Missionária ajudante da IMW Alto da Serra, distrito do Alto da Serra. É formada em Serviço Social, sendo atuante nesta área com fortalecimento e vínculo social e vulnerabilidade da criança e do adolescente. E ainda facilitadora do Projeto Claves que trabalha com a prevenção contra o abuso sexual da criança e do adolescente. Lindinalva é nossa Secretária Regional de Missões e, com sua equipe executa planos e programas missionários, como por exemplo o Projeto PAI (Programa de Apadrinhamento Infantil) que ocorre no Piauí, campo missionário da 1° Região: Além disso, tem caminhado lado a lado e apolado a ESCOMIW na execução de planos e projetos de evangelização urbana e capelanias.'
    },
    {
        imagem: './photobio8.png',
        nome: 'Marcelle Rangel',
        descricaoLongo: 'Membro da IMW Hiterlend, Belfordroxo. Psicanalista Clínica com especialização em Ludoterapia e desenho infantil ; Graduada em Pedagogia , pós-graduação em Autismo , TDAH e Psicoterapia , Seminarista na IW  der do ministério infantil desde os 13 anos e Formada em Evangelismo infantil em implantação e revitalização de igreja , Líder   mulher única, mulher que prospera  , Casados para sempre e Pais para toda vida. rsando especialização em Missões (Agemiw), dentre diversos cursos livres como ; proteção ao abuso infantil, Homilética Kids entre outros . s treinamentos da Escomiw , Marcelle ministra palestra sobre evangelismo infantil , trazendo o entendimento que o coração da criança é um terreno fértil para o crescimento da semente da palavra de Deus.'
    },
    {
        imagem: './photobio9.png',
        nome: 'Camilly Portella',
        descricaoLongo: 'Líder geral do Kerigma, ala jovem da ESCOMIW, impulsionando jovens e adolescentes a fazer parte da grande comissão.   O Kerigma trabalha o evangelismo através das artes de maneira criativa, dinâmica e leve. Ministra da palestra "evangelismo com surdos" levando conscientização sobre a importância da inclusão da comunidade surda e como evangelizar esse público. Graduação em Letras-Libras pela Universidade Uníntese, estudante de teologia no Instituto Dókimos de Ensino, tradutora/intérprete e professora de Libras.'
    },
    {
        imagem: './photobio10.png',
        nome: 'Wancylane Cyreno',
        descricaoLongo: 'Missionária Wesleyana Integrada no Conselho Ministerial da 1ª IMW em Jardim Primavera, onde atualmente é coordenadora de rede de missões local. Bacharel em Teologia pelo CEFORTE, Concluiu diversos cursos pela Agência Missionária Wesleyana (AGEMIW). pós graduanda em psicanálise clínica. Integrante da ESCOMIW desde 2009. Membro da Mesa Regional neste biênio, onde atua como tesoureira e líder de intercessão.  Sua palestra é sobre o censo religioso de porta em porta, que tem como objetivo despertar os vocacionados a compartilhar o evangelho de maneira simples e pessoal, levando a igreja nas casas, fazendo assim, conhecer as necessidades maior da comunidade onde está inserida, levando seu amor por vidas através de sua vida dedicada a missões e evangelismo!'
    },
    {
        imagem: './photobio11.png',
        nome: 'Danilo Lopez',
        descricaoLongo: 'Membro da IMW Araruama o dinâmico Danilo ministra palestras e exerce liderança de evangelismo criativo e missões Indígenas na ESCOMIW, o seminarista pela IWE é graduado em educação física. Em 2019 direcionado a levar aquele que da o sopro de vida fundou o projeto Ruah que visa missões urbanas e transcultural.  Com seu carisma e sua paixão por vidas leva a oportunidade de despertar vocacionados ao campo missionário!'
    },
    {
        imagem: './photobio12.png',
        nome: 'Carolina Candido',
        descricaoLongo: 'Membro da IMW Lote XV, formada em Marketing digital e com conhecimento em web designer.  Possui experiência na área de fotografia e em edição, também já atuou como criadora de conteúdos sobre evangelização. E a serviço, se dedica no ministério de comunicação digital, levando a mensagem genuína do evangelho através da mídia.  Na Escomiw, sua palestra tratará sobre "Evangelismo por mídias socials", inspirando a Igreja a usar com criatividade a ferramenta da comunicação enxergando-a também como potencial para a propagação do Reino de Deus.'
    },

];

function Page() {
    return (
        <>
            <title>ESCOMIW</title>
            <main>
                <section className="flex pt-56 flex-col justify-center items-center">
                    <h1 className="animate__animated animate__fadeInDown text-center text-5xl font-bold my-4 text-[#080451]">HISTÓRICO ESCOMIW</h1>
                    <div className="animate__animated animate__fadeInLeft lg:w-3/4 px-10 py-5 lg:py-10 border-gray-400">
                        <p className="py-5 text-xl">Muito tempo atrás, em Vitória – ES, teve na Igreja Metodista Wesleyana início a um
                            movimento jovem muito intenso. A então IMW naquela localidade alcançou grande
                            notoriedade. Seu jovem pastor logo se destacou no cenário ministerial e começou a
                            receber irmãos de várias outras igrejas wesleyanas de todo o Brasil, que se dispunham a ir
                            para lá, integrar-se ao grande mover evangelístico que ali nascia.
                        </p>
                        <p className="py-5 text-xl">Foi de fato um avivamento espiritual para aqueles dias. Viviam ali em forma de comunidade
                            e totalmente pela fé. A tônica era evangelismo; discipulado e oração. Logo, logo a coisa
                            tomou proporções maiores.</p>
                        <p className="py-5 text-xl">Durante muito tempo esse trabalho deixou de existir. E assim ficou até que certa feita,
                            estando um dos nossos então pastores servindo à Igreja como secretário regional de
                            missões; o bispo e superintendente regional da 2ª Região Eclesiástica, Bispo Sebastião
                            Calegari, resgatou a Escomiw e a trouxe de volta ao cenário denominacional.
                        </p>
                        <p className="py-5 text-xl">De pronto, a Escomiw tomou a iniciativa de formar caravanas que abençoariam o Campo
                            Missionário do Nordeste por longos anos.

                        </p>
                        <p className="py-5 text-xl">Em 2003, tendo sido eleito secretário regional de missões, na 1ª Região Eclesiástica, o
                            Pr. Nehemias Rodrigues Pereira, acontece um reavivamento da Escomiw como braço da
                            SRM. De pronto ele aceitou e encaminhou isso como parte do seu plano de ação, tendo
                            aprovação unânime do plenário do então Concílio Regional.
                        </p>
                        <p className="py-5 text-xl">A Escomiw é um braço de interação para os chamados membros leigos da Igreja; uma
                            oportunidade de resgate da sua motivação para atuar e participar ativamente dos
                            processos de edificação e crescimento da Igreja. Foi assim estabelecido pelo então
                            superintendente regional da 1ªRE, bispo Onaldo Rodrigues Pereira, a Escomiw, como um
                            segmento de treinamento e capacitação de pessoas e de como isso poderia proporcionar
                            à membresia da Igreja maior despertamento e preparo para deixar de ser mera expectadora
                            do que ocorria no cenário de crescimento denominacional e participasse de forma mais
                            ativa e intensiva nisso
                        </p>
                        <p className="py-5 text-xl">No ano de 2010, por ocasião do Congresso Geral de Missões, a Escomiw passa a ser
                            um setor da Secretaria Geral de Missões, e sua implantação em todas as outras Regiões
                            Eclesiásticas da Igreja Metodista Wesleyana passa a ser promovida.
                        </p>
                        <p className="py-5 text-xl">Muito mais que ir às Regiões e apenas pulverizar as bases de funcionamento da
                            Escomiw, nosso propósito tem sido ir a elas, com o intuito de separar obreiros e
                            voluntários, promovendo-lhes um treinamento diferenciado, preparando-os para que tudo
                            aconteça a partir do trabalho destes capacitados em sua respectiva Região e distrito.
                        </p>
                        <p className="py-5 text-xl">A partir daí, formar-se a Coordenação Regional da Escomiw.</p>
                        <p className="py-5 text-xl">Passaram por esta fase desde então como Coordenadores da ESCOMIW, Pr Marcos
                            Batista; Pr. Solimar Pinheiro e atualmente Pr Carlos Alberto Pinheiro até o último concilio
                            Geral 2021, sendo neste reeleito até o próximo sexênio.</p>
                        <p className="py-5 text-xl">Diante da mesma visão de promover a evangelização, estamos com as lideranças
                            regionais estabelecidas, efetuando treinamentos incansavelmente objetivando formar
                            lideranças distritais e locais, para o prosseguimento da obra.</p>
                        <p className="py-5 text-xl">A coordenação Geral tem seus projetos anuais, e cada região os seus projetos
                            específicos.</p>
                        <p className="py-5 text-xl">Conheça um pouco mais dos projetos da Escomiw na 1ª Região Eclesiástica.</p>
                    </div>
                </section>
            </main>
            <main className="mb-10 flex flex-col">
                <FadeInDown>
                <h1 className="text-center text-5xl font-bold mb-10 text-[#080451]">NOSSA EQUIPE</h1>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3  gap-3 justify-center items-center">
                        {membros.map((membro, index) => (
                            <Team
                                key={index}
                                imagem={membro.imagem}
                                nome={membro.nome}
                                descricaoLongo={membro.descricaoLongo}
                            />
                        ))}
                    </div>
                </FadeInDown>
            </main>
        </>
    )
}

export default Page;