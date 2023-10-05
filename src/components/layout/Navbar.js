import { Link } from "react-router-dom"
import logo from "../../img/logo.PNG"


function Navbar(){
    return (
        <div className="absolute bg-transparent h-20 w-[100%] px-12 pt-6 md:px-16 lg:px-20 p-4">
            <div className="flex justify-between w-[100%]">
                <div className=" sm:w-[30%] w-[20%] items-center flex">
                    <Link to={"/Projeto-tiago"}><img className="hover:scale-110 duration-300 h-12" src={logo} alt="Logotipo"></img></Link>
                    <a href="https://www.instagram.com/tiago_ssf/" target="__blank" className="text-white hover:text-yellow-400 duration-300 text-xs pt-[20px]">@tiago_ssf</a>
                </div>
                <div className="sm:w-[70%] w-[80%] font-principal text-xl flex justify-between text-white  items-center">
                    <Link className="hover:text-yellow-400 duration-300" to={"/about"}>Sobre</Link>
                    <Link className="hover:text-yellow-400 duration-300" to={"/galery"}>Galeria</Link>
                    <Link className="hover:text-yellow-400 duration-300" to={"/contact"}>Contato</Link>
                    <Link className="hover:text-yellow-400 duration-300" to={"/feedbacks"}>Feedbacks</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar