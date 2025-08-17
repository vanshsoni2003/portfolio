const base = import.meta.env.BASE_URL;
const About = () => {
    return (
        <>
            <div className="h-[620px] bg-[#112C3F] ">
                <div className="text-center text-white ">
                    <div className="py-7">
                        <h1 className="font-bold text-3xl" style={{fontFamily: "Berkshire Swash",fontWeight: "400",fontStyle:"normal"}} >About <span className="text-blue-500"> Me</span></h1>
                        <div className="flex justify-center items-center h-[300px]">
                            <div className="relative w-[200px] h-[200px] rounded-full border-4 border-blue-500 shadow-[0_0_30px_#00bfff] overflow-hidden">
                                <img
                                   img src={`${base}images/profile.png`} alt="pic"
                                    className="w-[192px] h-[200px] object-cover rounded-full"
                                />
                                <div className="absolute inset-0 rounded-full border-2 border-blue-500 animate-ping"></div>
                            </div>
                        </div>

                        <h3 className="font-bold">Frontend Developer!</h3>
                        <div className="w-[1000px]  h-[200px] place-content-center mx-auto">
                            <span className="" style={{fontFamily: "Neuton",fontWeight: "400",fontStyle:"normal"}}>As a front-end developer, I create visually appealing interfaces with interactive functionality.
I use modern tools like React and Tailwind to handle both design and component logic.</span>
                            <div className="mt-4">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded">
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
export default About 

