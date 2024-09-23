import 'animate.css';
import Image from 'next/image';

function Missionarias() {
    return (
        <>
            <title>SRM | Missionárias</title>
            <main id="missionarias">
                <section className="h-screen flex pt-28 flex-col justify-center items-center">
                    <h1 className="animate__animated animate__fadeInDown text-center text-2xl lg:text-5xl font-bold my-4 text-[#080451]">MISSIONÁRIAS</h1>
                    <div>
                        <p className="animate__animated animate__fadeInLeft text-center text-lg font-bold my-4 text-[#080451]">POSTS direcionado aos trabalhos das missionárias</p>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Missionarias;