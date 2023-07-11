import { Link } from "react-router-dom"
import logo from "../../img/logo.PNG"


function Navbar(){
    return (
        <div className="flex bg-black h-20">
            <div className=" sm:w-[30%] w-[20%] ml-8 sm:ml-0 items-center justify-center flex">
                <Link to={"/"}><img className=" h-12" src={logo} alt="Logotipo"></img></Link>
            </div>
            <div className="sm:w-[70%] w-[80%] font-principal text-xl flex justify-between text-white px-12 md:px-24 items-center">
                <Link className="hover:text-yellow-400 duration-300" to={"/about"}>Sobre</Link>
                <Link className="hover:text-yellow-400 duration-300" to={"/galery"}>Galeria</Link>
                <Link className="hover:text-yellow-400 duration-300" to={"/contact"}>Contato</Link>
                <Link className="hover:text-yellow-400 duration-300" to={"/feedbacks"}>Feedbacks</Link>
            </div>
        </div>
    )
}

export default Navbar