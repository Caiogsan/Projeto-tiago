import { FaFacebook, FaInstagram } from "react-icons/fa"


function Contato(){
    return (
        <section>
            <div className="py-12 flex justify-center">
                    <h1 className="font-bold text-white text-3xl">Fale comigo!</h1>
                </div>
                <div className=" rounded sm:h-[50rem] bg-gray-300 flex flex-col sm:flex-row w-[70%] m-auto">
                    <div className="sm:w-[50%] rounded border-b-2 sm:border-r-2">
                        
                        <form className='m-auto flex flex-col justify-between h-[30rem] sm:h-full py-8 sm:py-14 w-[80%]'>
                            <h1 className='text-center font-principal text-2xl'>Envie uma mensagem!</h1>
                            <input className='text-sm rounded p-2' type="text" placeholder="Nome"></input>
                            <input className='text-sm rounded p-2' type="email" placeholder="Email"></input>
                            <input className='text-sm rounded p-2' type="number" placeholder="Telefone"></input>
                            <textarea placeholder="Mensagem" className="resize-none h-24 rounded p-2"></textarea>
                            <button type="submit" className='text-sm rounded hover:bg-yellow-400 duration-300 p-2 bg-red-500'>Enviar!</button>
                        </form>
                    </div>
                    <div className="sm:w-[50%] h-[30rem] sm:h-full border-black border-t-2 sm:border-l-2 sm:border-t-0 flex flex-col py-4  sm:py-8 rounded">
                        <iframe className="w-[80%] rounded h-[150px] sm:h-[220px] m-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.1396823318096!2d-45.454183925063205!3d-22.423767820786498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cb7ca924f3c873%3A0x734498cb7b5cb7d3!2sLa%20Familia%20Tattoo%20%26%20piercing!5e0!3m2!1sen!2sbr!4v1687022618499!5m2!1sen!2sbr" title="maps" width="600" height="450" loading="lazy"></iframe>
                        <p className="w-[80%] text-center font-semibold m-auto sm:mt-12">Rua Dr Américo de Oliveira 623, centro, Itajubá Mg, 37.500-061</p>
                        <p className="w-[80%] text-center font-semibold m-auto sm:mt-8">La Familia Tattoo & Piercing</p>
                        <div className=" w-[80%] m-auto sm:mt-4 sm:mt-8 md:mt-12">
                            <ul className='flex justify-between items-end px-8 sm:px-12 md:px-12 lg:px-16'>
                                <a target='_blank' rel='noreferrer' href='https://www.instagram.com/tiago_ssf/'><li className='text-xl md:text-3xl lg:text-4xl hover:text-rose-700 duration-300 hover:cursor-pointer'><FaInstagram></FaInstagram></li></a>
                                <a target='_blank' rel='noreferrer' href='https://www.facebook.com/TiagoSobreiro15' ><li className='text-xl md:text-3xl lg:text-4xl  hover:text-blue-800 duration-300 hover:cursor-pointer'><FaFacebook></FaFacebook></li></a>
                            </ul>
                        </div>
                    </div>  
                </div>
        </section>
    )
}

export default Contato