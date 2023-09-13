import Drawings from "../galery.components/Drawings"
import Tattoo from "../galery.components/Tattoo"
import MainImg from "../layout/MainImg"

function Galery(){
    return (
        <section className="bg-gray-200 pb-6 w-[100%]">
            <MainImg styles={"bg-img18 h-[615px] font-principal pl-12 pt-16 bg-fixed bg-cover flex justify-start bg-no-repeat"}></MainImg>
            <Drawings></Drawings>
            <Tattoo></Tattoo>
        </section>
    )
}

export default Galery