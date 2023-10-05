function MainImg({styles, stylesText}){
    return (
        <section className={styles}>
            <div className="sm:text-4xl text-2xl md:text-6xl p-12 lg:text-8xl text-end flex md:flex-col font-principal pt-40 pr-40 gap-4">
                <h1 className="tracking-wide mb-4 tracking-widest text-gray-200">TIAGO</h1>
                <h1 className="tracking-wide mb-4 text-gray-200 tracking-widest">SOBREIRO</h1>
                <h1 className=" tracking-wide text-gray-200 tracking-widest">TATOO</h1>    
            </div>
        </section>
    )
}

export default MainImg