import Image from "./Image"

function ImagesLine({styleImg1,styleImg2,styleImg3, stylesLine}){
    return (
        <div className={`${stylesLine}`}>
            <Image styles={styleImg1}></Image>
            <Image styles={styleImg2}></Image>
            <Image styles={styleImg3}></Image>
        </div>
    )
}

export default ImagesLine