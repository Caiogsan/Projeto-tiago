import {FaFacebook, FaInstagram} from 'react-icons/fa'

function Home(){
    return (
        <div className="bg-gray-200 pb-8">
            <section className="bg-tiago h-[650px] font-principal bg-fixed bg-cover bg-[left_top_-180px] text-end bg-no-repeat">
                <div className="inline-block text-center pr-24 pt-28">
                    <h1 className="text-6xl tracking-wide mb-4 text-white">T IAGO</h1>
                    <h1 className="text-6xl tracking-wide mb-4 text-white">SOBREIRO</h1>
                    <h1 className="text-6xl tracking-wide text-white">TATOO</h1>    
                </div>
            </section>
            <section>
                <div className="my-12 flex justify-center">
                    <h1 className="font-principal text-3xl">DESENHOS FEITOS Á MÃO</h1>
                </div>
                <div className="flex justify-between m-auto h-[600px] w-[90%]">
                    <div className="rounded-full bg-img1 border-4 border-black bg-center bg-cover h-full w-[32%]"></div>
                    <div className="rounded-full bg-img3 border-4 border-black bg-center bg-cover h-full w-[32%]"></div>
                    <div className="rounded-full bg-img2 border-4 border-black bg-center bg-cover h-full w-[32%]"></div>
                </div>
                <div className="rounded-full w-[90%] m-auto bg-img4 bg-cover border-4 border-black h-[700px] mt-6">

                </div>
                <div className="my-12 flex justify-center">
                    <h1 className="font-principal text-3xl">ALGUMAS TATUAGENS</h1>
                </div>
                <div className="flex justify-between m-auto h-[600px] w-[90%]">
                    <div className="rounded-full bg-img6 border-4 border-black bg-center bg-cover h-full w-[32%]"></div>
                    <div className="rounded-full bg-img7 border-4 border-black bg-center bg-cover h-full w-[32%]"></div>
                    <div className="rounded-full bg-img8 border-4 border-black bg-center bg-cover h-full w-[32%]"></div>
                </div>
                <div className="flex justify-between m-auto mt-6 h-[600px] w-[90%]">
                    <div className="rounded-full bg-img9 border-4 border-black bg-center bg-cover h-full w-[32%]"></div>
                    <div className="rounded-full bg-img10 border-4 border-black bg-center bg-cover h-full w-[32%]"></div>
                    <div className="rounded-full bg-img11 border-4 border-black bg-center bg-cover h-full w-[32%]"></div>
                </div>
                <div className="my-12 flex justify-center">
                    <h1 className="font-principal text-3xl">CONTATO</h1>
                </div>
                <div className="h-[550px] rounded bg-gray-300 flex w-[70%] my-6 m-auto">
                    <div className="w-[50%] rounded border-r-2">
                        
                        <form className='m-auto flex flex-col justify-between h-full py-16 w-[80%]'>
                            <h1 className='text-center font-principal text-2xl'>Envie uma mensagem!</h1>
                            <input className='text-sm rounded p-2' type="text" placeholder="Nome"></input>
                            <input className='text-sm rounded p-2' type="email" placeholder="Email"></input>
                            <input className='text-sm rounded p-2' type="number" placeholder="Telefone"></input>
                            <textarea placeholder="Mensagem" className="resize-none h-24 rounded p-2"></textarea>
                            <button type="submit" className='text-sm rounded hover:bg-yellow-400 duration-300 p-2 bg-red-500'>Enviar!</button>
                        </form>
                    </div>
                    <div className="w-[50%] border-black border-l-2 py-8 rounded contato">
                        <iframe className="w-[80%] rounded h-[220px] m-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.1396823318096!2d-45.454183925063205!3d-22.423767820786498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cb7ca924f3c873%3A0x734498cb7b5cb7d3!2sLa%20Familia%20Tattoo%20%26%20piercing!5e0!3m2!1sen!2sbr!4v1687022618499!5m2!1sen!2sbr" title="maps" width="600" height="450" loading="lazy"></iframe>
                        <p className="w-[80%] font-semibold m-auto mt-12">Rua Dr Américo de Oliveira 623, centro, Itajubá Mg, 37.500-061</p>
                        <p className="w-[80%] font-semibold m-auto mt-8">La Familia Tattoo & Piercing</p>
                        <div className="h-14 w-[80%] m-auto mt-8">
                            <ul className='flex h-14 justify-between items-center px-20'>
                                <a target='_blank' rel='noreferrer' href='https://www.instagram.com/tiago_ssf/'><li className='text-5xl hover:text-white duration-300 hover:cursor-pointer'><FaInstagram></FaInstagram></li></a>
                                <a target='_blank' rel='noreferrer' href='https://www.facebook.com/TiagoSobreiro15' ><li className='text-5xl  hover:text-white duration-300 hover:cursor-pointer'><FaFacebook></FaFacebook></li></a>
                            </ul>
                        </div>
                    </div>  
                </div>
            </section>
        </div>
    )
}

export default Home