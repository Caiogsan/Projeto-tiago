
import ImagesLine from '../imageLine/ImagesLine'
import Contato from '../layout/Contato'
import MainImg from '../layout/MainImg'

function Home(){
    return (
        <div className="bg-gray-200 pb-8">
            <MainImg styles={"bg-tiago h-[400px] text-end sm:h-[400px] pl-12 pt-16 md:h-[650px] font-principal bg-fixed bg-cover md:bg-[left_top_-130px] lg:bg-[left_top_-260px] sm:bg-[left_top_-80px] bg-no-repeat"}></MainImg>
            <div className="my-12 flex justify-center">
                <h1 className="font-principal text-3xl">DESENHOS FEITOS Á MÃO</h1>
            </div>
            <ImagesLine stylesLine={"flex justify-between m-auto h-[600px] w-[90%]"} styleImg1={"rounded-full bg-img1 border-4 border-black bg-center bg-cover h-full w-[32%]"} styleImg2={"rounded-full bg-img3 border-4 border-black bg-center bg-cover h-full w-[32%]"} styleImg3={"rounded-full bg-img2 border-4 border-black bg-center bg-cover h-full w-[32%]"}></ImagesLine>
            <ImagesLine stylesLine={"rounded-full w-[90%] m-auto bg-img4 bg-cover border-4 border-black h-[700px] mt-6"}></ImagesLine>
            <div className="my-12 flex justify-center">
                <h1 className="font-principal text-3xl">ALGUMAS TATUAGENS</h1>
            </div>
            <ImagesLine stylesLine={"flex justify-between m-auto h-[600px] w-[90%]"} styleImg1={"rounded-full bg-img6 border-4 border-black bg-center bg-cover h-full w-[32%]"} styleImg2={"rounded-full bg-img7 border-4 border-black bg-center bg-cover h-full w-[32%]"} styleImg3={"rounded-full bg-img8 border-4 border-black bg-center bg-cover h-full w-[32%]"}></ImagesLine>
            <ImagesLine stylesLine={"flex justify-between m-auto mt-6 h-[600px] w-[90%]"} styleImg1={"rounded-full bg-img9 border-4 border-black bg-center bg-cover h-full w-[32%]"} styleImg2={"rounded-full bg-img10 border-4 border-black bg-center bg-cover h-full w-[32%]"} styleImg3={"rounded-full bg-img11 border-4 border-black bg-center bg-cover h-full w-[32%]"}></ImagesLine>
            <Contato></Contato>
        </div>
    )
}

export default Home