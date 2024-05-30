import 'animate.css';
import { FadeInDown } from "../../libraries/ScrollAnimation";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Team from "../../libraries/Team";

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

function About() {
    return (
        <>
            <title>Sobre nós</title>
            <Navbar />
            <main id="sobre">
                <section className="flex pt-56 flex-col justify-center items-center">
                    <h1 className="animate__animated animate__fadeInDown text-center text-5xl font-bold my-4 text-[#080451]">SOBRE</h1>
                    <div className="animate__animated animate__fadeInLeft lg:w-3/4 px-20 py-5 lg:py-10 border-gray-400">
                        <p className="py-5 max-lg:text-2xl">A Secretaria Regional de Missões é o Órgão Regional instituído para executar os planos e
                            programas missionários da igreja, sendo responsável diretamente pela expansão das Igrejas
                            Wesleyanas no campo missionário da 1ª Região, no estado do Piauí, além de contribuir com o
                            sustento missionário no campo transcultural dentro e fora do Brasil. Além do trabalho religioso e
                            evangelístico, a SRM desenvolve projetos na área social.
                        </p>
                        <p className="py-5 max-lg:text-2xl">Temos como objetivos principais:</p>
                        <ul className="list-disc max-lg:text-2xl">
                            <li>Desenvolver, por meios ao seu alcance, o ardor missionário e evangelizador da Igreja,
                                motivando as igrejas de cada distrito a obedecer à grande comissão, na tarefa de orar,
                                evangelizar e contribuir;
                            </li>
                            <li>Planejar a criação de frentes de missões em áreas do campo missionário no Piauí e
                                estimular a expansão do trabalho missionário na 1ª região em locais ainda não
                                alcançados ou que não se tenha uma Igreja Wesleyana estabelecida.
                            </li>
                            <li>Potencializar o alcance e influência do Projeto PAI (Programa de Apadrinhamento
                                Infantil) nas igrejas e congregações do Piauí, buscando proporcionar condições para o
                                desenvolvimento socioeconômico das famílias, assim como contribuir com a formação
                                educacional e profissional das crianças e adolescentes atendidas pelo PAI.
                            </li>
                        </ul>
                        <p className="py-5 max-lg:text-2xl">Para o alcance destes objetivos, nosso Programa é usar como ferramenta para viabilizar nossos
                            projetos os seguintes órgãos: PAI – Programa de Apadrinhamento Infantil, ESCOMIW- Escola
                            Missionária Wesleyana e AGEMIW- Agência Missionária Wesleyana.
                        </p>
                        <p className="py-5 max-lg:text-2xl">Graças ao envolvimento com missões, orações e contribuições financeiras das igrejas e irmãos
                            em Cristo, contamos atualmente com 2 famílias pastorais dedicadas ao campo missionário no
                            Piauí, onde temos duas igrejas estabelecidas e outras 12 congregações e pontos de pregação
                            espalhados desde a capital até o interior do estado.
                        </p>
                        <p className="py-5 max-lg:text-2xl">A SRM espera que a obra missionária cresça ainda mais através do aumento do número de
                            intercessores, do apoio financeiro dos crentes, de novos missionários que serão enviados a
                            novos campos e de projetos que serão implementados, para que a Palavra de Deus seja
                            difundida.
                            Avançar na pregação do Evangelho até os confins da terra, levando Jesus ao coração de toda
                            criatura é a missão que a SRM compartilha com você.
                        </p>
                        <p className="py-5 max-lg:text-2xl">Como parte da Secretaria Geral de Missões, a SRM da 1ª Região tem contribuído com o trabalho
                            de Missões transculturais.
                        </p>
                        <p className="py-5 max-lg:text-2xl">Atualmente estamos presentes nos seguintes países:</p>
                        <ul className="list-disc max-lg:text-2xl">
                            <li>Europa: Portugal, Bélgica, Suíça e Espanha.</li>
                            <li>América: Peru, Argentina, Paraguai, Uruguai, Bolívia e Estados Unidos - Nações
                                Indígenas no Brasil: (Ttikunas, Sateré-Mawé, Sanumá, Matis e Pataxós)
                            </li>
                            <li>Ásia: Japão, Tailândia, Paquistão e Ásia Cental.
                            </li>
                            <li>África: Senegal, Moçambique e Burkina-Faso</li>
                        </ul>
                        <p className="py-5 max-lg:text-2xl">Seja parte deste grande mover que está acontecendo. Participe das ações missionárias da 1ª
                            Região. Sua contribuição, oração e participação podem impactar muitas vidas e alcançar um
                            número ainda maior de pessoas que hoje estão sem Cristo.
                        </p>
                        <p className="py-5 max-lg:text-2xl">Seja a resposta!</p>
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
            <Footer />
        </>
    );
}

export default About;