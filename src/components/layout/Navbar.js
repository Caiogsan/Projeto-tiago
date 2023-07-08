import { Link } from "react-router-dom"
import logo from "../../img/logo.PNG"


function Navbar(){
    return (
        <div className="flex bg-black h-20">
            <div className=" w-[30%] items-center flex">
                <Link to={"/"}><img className="ml-32 h-12" src={logo} alt="Logotipo"></img></Link>
            </div>
            <div className="w-[70%] font-principal text-xl flex justify-between text-white px-24 items-center">
                <Link className="hover:text-yellow-400 duration-300" to={"/about"}>Sobre</Link>
                <Link className="hover:text-yellow-400 duration-300" to={"/galery"}>Galeria</Link>
                <Link className="hover:text-yellow-400 duration-300" to={"/contact"}>Contato</Link>
                <Link className="hover:text-yellow-400 duration-300" to={"/feedbacks"}>Feedbacks</Link>
            </div>
        </div>
    )
}

export default Navbar