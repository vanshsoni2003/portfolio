const base = import.meta.env.BASE_URL;

const Aboutus = () => {
    return (
        <>
            <div className="bg-[#051423] text-white min-h-[100vh] px-4 md:px-8 lg:px-16 py-10 ">

                {/* Grid Responsive */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">

                    {/* Left Image */}
                    <div className="flex justify-center ">
                        <div className="rounded-[10px] h-[300px] w-[300px] sm:h-[350px] sm:w-[350px]  md:h-[70%] md:w-[70%] xl:h-[50%] xl:w-[50%] shadow-[0_0_30px_#00bfff]">
                            <img
                                src={`${base}images/profile.png`}
                                className="h-full w-full object-cover rounded-[10px]"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="text-center md:text-left ">
                        <div className="max-w-lg mx-auto md:mx-0">
                            <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
                                About <span className="text-blue-500"> Me </span>
                            </h1>

                            <h3 className="mt-3 text-lg sm:text-xl">
                                <b>Hi, My name is Vansh</b>
                            </h3>

                            <p className="mt-4 text-sm sm:text-base leading-relaxed">
                                Hi, I'm Vansh Mandaliya — a passionate front-end developer with a strong interest in creating clean, responsive, and user-friendly web interfaces using HTML, CSS, JavaScript, React.js, and Tailwind CSS. I enjoy bringing designs to life in the browser and focusing on smooth user experiences. Currently, I’m expanding my skills by learning back-end development and RESTful APIs using Node.js and Express.js, with the goal of becoming a full-stack developer.
                            </p>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 font-bold text-base sm:text-lg text-center shadow-[0_0_10px_black] py-4 px-2 rounded-lg">
                                <h1>1. Problem solving</h1>
                                <h1>2. Goal-Oriented</h1>
                                <h1>3. Time Management</h1>
                                <h1>4. Hard working</h1>
                            </div>

                            {/* Button */}
                            <button className="border-2 bg-blue-400 hover:bg-blue-900 text-black h-[45px] mt-7 py-2 rounded-[20px] w-[130px]">
                                Contact me
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutus;