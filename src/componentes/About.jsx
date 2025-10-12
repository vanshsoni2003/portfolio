const base = import.meta.env.BASE_URL;
const About = () => {
    return (
        <>
            <div className="min-h-[100vh] bg-[#112C3F] px-4 sm:px-6 md:px-8">
                <div className="text-center text-white">
                    <div className="py-7">
                        <h1
                            className="font-bold text-2xl sm:text-3xl md:text-4xl"
                            style={{ fontFamily: "Berkshire Swash", fontWeight: "400", fontStyle: "normal" }}
                        >
                            About <span className="text-blue-500"> Me</span>
                        </h1>

                        <div className="flex justify-center items-center h-[220px] sm:h-[260px] md:h-[300px]">
                            <div className="relative w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] rounded-full border-4 border-blue-500 shadow-[0_0_30px_#00bfff] overflow-hidden">
                                <img
                                    src={`${base}images/profile.png`}
                                    alt="pic"
                                    className="w-full h-full object-cover rounded-full"
                                />
                                <div className="absolute inset-0 rounded-full border-2 border-blue-500 animate-ping"></div>
                            </div>
                        </div>

                        <h3 className="font-bold text-lg sm:text-xl md:text-2xl">Frontend Developer!</h3>

                        <div className="max-w-[1000px] w-full h-auto min-h-[150px] md:h-[200px] place-content-center mx-auto mt-4">
                            <span
                                className="block text-sm sm:text-base md:text-lg leading-relaxed"
                                style={{ fontFamily: "Neuton", fontWeight: "400", fontStyle: "normal" }}
                            >
                                As a front-end developer, I create visually appealing interfaces with interactive functionality.
                                I use modern tools like React and Tailwind to handle both design and component logic.
                            </span>
                            <div className="mt-6">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                                    Read more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;
