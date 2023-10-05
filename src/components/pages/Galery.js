import Drawings from "../galery.components/Drawings"
import Tattoo from "../galery.components/Tattoo"
import MainImg from "../layout/MainImg"

function Galery(){
    return (
        <section className="bg-gray-700 pb-6 w-[100%]">
            <MainImg styles={"bg-img18 h-[45rem] bg-fixed bg-no-repeat bg-cover"}></MainImg>
            <Drawings></Drawings>
            <Tattoo></Tattoo>
        </section>
    )
}

export default Galery