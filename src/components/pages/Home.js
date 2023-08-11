
import Contato from '../layout/Contato'

function Home(){
    return (
        <div className="bg-gray-200 pb-8">
            <section className="bg-tiago h-[400px] text-end sm:h-[400px] pl-12 pt-16 md:h-[650px] font-principal bg-fixed bg-cover md:bg-[left_top_-130px] lg:bg-[left_top_-260px] sm:bg-[left_top_-80px] bg-no-repeat">
                <div className="inline-block text-center pr-40 gap-10">
                    <h1 className="text-8xl tracking-wide mb-4 text-gray-200">T IAGO</h1>
                    <h1 className="text-8xl tracking-wide mb-4 text-gray-200">SOBREIRO</h1>
                    <h1 className="text-8xl tracking-wide text-gray-200">TATOO</h1>    
                </div>
            </section>
            <section>
                <div className="my-12 flex justify-center">
                    <h1 className="font-principal text-3xl">DESENHOS FEITOS Á MÃO</h1>
                </div>
                <div className="flex justify-between m-auto h-[600px] w-[90%]">
                    <div className="rounded-full bg-img1 border-4 border-black bg-center bg-cover h-full w-[32%]"></div>
                    <div className="rounded-full bg-img3 border-4 border-black bg-center bg-cover h-full w-[32%]"></div>
                    <div className="rounded-full bg-img2 border-4 border-black bg-center bg-cover h-full w-[32%]"></div>
                </div>
                <div className="rounded-full w-[90%] m-auto bg-img4 bg-cover border-4 border-black h-[700px] mt-6">

                </div>
                <div className="my-12 flex justify-center">
                    <h1 className="font-principal text-3xl">ALGUMAS TATUAGENS</h1>
                </div>
                <div className="flex justify-between m-auto h-[600px] w-[90%]">
                    <div className="rounded-full bg-img6 border-4 border-black bg-center bg-cover h-full w-[32%]"></div>
                    <div className="rounded-full bg-img7 border-4 border-black bg-center bg-cover h-full w-[32%]"></div>
                    <div className="rounded-full bg-img8 border-4 border-black bg-center bg-cover h-full w-[32%]"></div>
                </div>
                <div className="flex justify-between m-auto mt-6 h-[600px] w-[90%]">
                    <div className="rounded-full bg-img9 border-4 border-black bg-center bg-cover h-full w-[32%]"></div>
                    <div className="rounded-full bg-img10 border-4 border-black bg-center bg-cover h-full w-[32%]"></div>
                    <div className="rounded-full bg-img11 border-4 border-black bg-center bg-cover h-full w-[32%]"></div>
                </div>
                <Contato></Contato>
            </section>
        </div>
    )
}

export default Home