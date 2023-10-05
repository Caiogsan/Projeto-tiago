import ImagesLine from "../imageLine/ImagesLine"

function Drawings(){
    return (
        <div>
            <div className="my-12 flex justify-center">
                <h1 className="font-bold text-white text-2xl">DESENHOS FEITOS Á MÃO</h1>
            </div>
            <ImagesLine stylesLine={"flex justify-between m-auto h-[700px] w-[90%]"} styleImg1={"rounded bg-img1 border-4 border-black bg-center bg-cover h-full w-[32.5%]"} styleImg2={"rounded bg-img17 border-4 border-black bg-center bg-cover h-full w-[32.5%]"} styleImg3={"rounded bg-img2 border-4 border-black bg-center bg-cover h-full w-[32.5%]"}></ImagesLine>
            <ImagesLine stylesLine={"flex justify-between m-auto mt-4 h-[700px] w-[90%]"} styleImg1={"bg-img3 border-4 border-black bg-no-repeat rounded mr-4 bg-cover inline-block w-[66.5%]"} styleImg2={"w-[32.5%] border-4 border-black margin bg-img16 bg-cover rounded"} ></ImagesLine>
            <ImagesLine stylesLine={"rounded w-[90%] m-auto bg-img4 bg-cover border-4 border-black h-[700px] mt-4"}></ImagesLine>
            <ImagesLine stylesLine={"flex justify-between m-auto mt-4 h-[700px] w-[90%]"} styleImg1={"bg-img14 border-4 border-black bg-no-repeat rounded mr-4 bg-cover inline-block w-[35%]"} styleImg2={"w-[65%] border-4 border-black margin bg-img15 bg-cover rounded"}></ImagesLine>
        </div>
    )
}

export default Drawings