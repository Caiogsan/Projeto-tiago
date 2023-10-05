
import ImagesLine from '../imageLine/ImagesLine'
import Contato from '../layout/Contato'
import MainImg from '../layout/MainImg'

function Home(){
    return (
        <div className="bg-gray-700 pb-8">
            <MainImg styles={"bg-tiago min-h-[60rem] bg-fixed bg-no-repeat bg-cover"}></MainImg>
            <Contato></Contato>
            <div className="my-12 flex justify-center">
                <h1 className="font-principal py-4 text-white text-3xl">DESENHOS FEITOS Á MÃO</h1>
            </div>
            <ImagesLine stylesLine={"flex justify-between m-auto min-h-[700px] w-[90%]"} styleImg1={"rounded-full bg-img1 border-4 border-black bg-center bg-cover h-full w-[32%]"} styleImg2={"rounded-full bg-img3 border-4 border-black bg-center bg-cover h-full w-[32%]"} styleImg3={"rounded-full bg-img2 border-4 border-black bg-center bg-cover h-full w-[32%]"}></ImagesLine>
            <ImagesLine stylesLine={"rounded-full w-[90%] m-auto bg-img4 bg-cover border-4 border-black min-h-[700px] mt-6"}></ImagesLine>
            <div className="my-12 flex justify-center">
                <h1 className="font-principal py-4 text-white text-3xl">ALGUMAS TATUAGENS</h1>
            </div>
            <ImagesLine stylesLine={"flex justify-between m-auto min-h-[700px] w-[90%]"} styleImg1={"rounded-full bg-img6 border-4 border-black bg-center bg-cover h-full w-[32%]"} styleImg2={"rounded-full bg-img7 border-4 border-black bg-center bg-cover h-full w-[32%]"} styleImg3={"rounded-full bg-img8 border-4 border-black bg-center bg-cover h-full w-[32%]"}></ImagesLine>
            <ImagesLine stylesLine={"flex justify-between m-auto mt-6 min-h-[700px] w-[90%]"} styleImg1={"rounded-full bg-img9 border-4 border-black bg-center bg-cover h-full w-[32%]"} styleImg2={"rounded-full bg-img10 border-4 border-black bg-center bg-cover h-full w-[32%]"} styleImg3={"rounded-full bg-img11 border-4 border-black bg-center bg-cover h-full w-[32%]"}></ImagesLine>
            
        </div>
    )
}

export default Home