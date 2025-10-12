const base = import.meta.env.BASE_URL;

const Projects = () => {

    const latest = [
        {
            href: "https://vanshsoni2003.github.io/perfume-project/",
            img: `${base}images/perfume.webp`
        },
        {
            href: "https://vanshsoni2003.github.io/Belaxa/",
            img: `${base}images/download (4).png`
        },
        {
            href: "https://joyful-pasca-7991b0.netlify.app/",
            img: `${base}images/download (7).png`
        }
    ]

    return (
        <>
            <div className="min-h-[100vh] bg-[#112C3F] md:min-h-[100vh]">
                <div className="py-8 bg-[#112C3F]">
                    <h1 className="text-center text-white font-bold text-7xl">
                        <b> <span className="text-blue-500"> Projects </span> </b>
                    </h1>
                </div>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center text-white px-4 mt-20">

                        {latest.map((i, index) => {
                            return (
                                <a key={index} href={i.href} target="_blank" rel="noopener noreferrer">
                                    <div className="relative border-2 h-[250px] w-[250px] sm:h-[280px] sm:w-[280px] md:h-[400px] md:w-[430px] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                                        <div className="absolute h-full w-full bg-blue-800">
                                            <img src={i.img} alt="" className="opacity-15 h-full w-full object-cover" />
                                        </div>
                                        <div className="absolute z-20 flex items-center justify-center text-center h-full w-full text-black">
                                            <h1 className="font-bold">Click And Check</h1>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;
