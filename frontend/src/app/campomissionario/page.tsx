import 'animate.css';
import Image from 'next/image';

function Mission() {
    return (
        <>
            <title>Campo Missionário</title>
            <main id="campomissionario">
                <section className="h-screen flex pt-28 flex-col justify-center items-center">
                    <h1 className="animate__animated animate__fadeInDown text-center text-2xl lg:text-5xl font-bold my-4 text-[#080451]">CAMPO MISSIONÁRIO</h1>
                    <div>
                        <Image 
                            src="/campomissionario.jpg" 
                            alt='Igrejas do campo missionário' 
                            width={800}
                            height={400}
                        />
                    </div>
                </section>
            </main>
        </>
    );
}

export default Mission;