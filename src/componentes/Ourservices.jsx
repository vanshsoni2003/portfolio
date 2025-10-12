const base = import.meta.env.BASE_URL;

const Ourservices = () => {
    return (
        <>
            <div className="bg-[#051423]  xl:h-[100vh]">
                <div className="py-8">
                    <h1
                        className="text-center text-white font-bold text-2xl sm:text-3xl md:text-4xl"
                        style={{
                            fontFamily: "Berkshire Swash",
                            fontWeight: "400",
                            fontStyle: "normal",
                        }}
                    >
                        <b>
                            Our <span className="text-blue-500"> Services </span>
                        </b>
                    </h1>
                </div>

                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-white p-4 place-items-center mt-12">
                        {/* Card 1 */}
                        <div className="w-full max-w-[400px] h-auto min-h-[400px] place-content-center bg-[#0b2235] rounded-xl p-4 shadow-md hover:shadow-lg transition">
                            <img
                                src={`${base}images/back-end.png`}
                                className="h-[80px] sm:h-[90px] md:h-[100px] m-auto"
                                alt=""
                            />
                            <h3 className="text-center font-bold text-xl sm:text-[22px] md:text-[25px] text-blue-500 mt-3">
                                Web Development
                            </h3>
                            <p
                                className="text-center text-sm sm:text-base mt-2 leading-relaxed"
                                style={{
                                    fontFamily: "Neuton",
                                    fontWeight: "400",
                                    fontStyle: "normal",
                                }}
                            >
                                I design and develop responsive websites using HTML, CSS,
                                JavaScript, React.js, and Tailwind CSS. My focus is on
                                creating clean, user-friendly interfaces with modern layouts
                                and smooth interactivity. I use React for building reusable
                                components and Tailwind CSS for efficient styling. I’m
                                currently expanding my skills in back-end development with
                                Node.js, Express.js, and MongoDB to become a full-stack
                                developer.
                            </p>
                            <div className="mt-5 flex justify-center">
                                <button className="hover:bg-blue-500 shadow-[0_0_12px_#00bfff] text-white hover:cursor-pointer w-[120px] h-[40px] rounded-3xl bg-blue-700 transition">
                                    Read more
                                </button>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="w-full max-w-[400px] h-auto min-h-[400px] place-content-center bg-[#0b2235] rounded-xl p-4 shadow-md hover:shadow-lg transition">
                            <img
                                src={`${base}images/web-developer.png`}
                                className="h-[80px] sm:h-[90px] md:h-[100px] m-auto"
                                alt=""
                            />
                            <h3 className="text-center font-bold text-xl sm:text-[22px] md:text-[25px] text-blue-500 mt-3">
                                Front-end Development
                            </h3>
                            <p
                                className="text-center text-sm sm:text-base mt-2 leading-relaxed"
                                style={{
                                    fontFamily: "Neuton",
                                    fontWeight: "400",
                                    fontStyle: "normal",
                                }}
                            >
                                I design and develop responsive websites using HTML, CSS,
                                JavaScript, React.js, and Tailwind CSS. My focus is on
                                creating clean, user-friendly interfaces with modern layouts
                                and smooth interactivity. I use React for building reusable
                                components and Tailwind CSS for efficient styling. I’m
                                currently expanding my skills in back-end development with
                                Node.js, Express.js, and MongoDB to become a full-stack
                                developer.
                            </p>
                            <div className="mt-5 flex justify-center">
                                <button className="hover:bg-blue-500 shadow-[0_0_12px_#00bfff] text-white hover:cursor-pointer w-[120px] h-[40px] rounded-3xl bg-blue-700 transition">
                                    Read more
                                </button>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="w-full max-w-[400px] h-auto min-h-[400px] place-content-center bg-[#0b2235] rounded-xl p-4 shadow-md hover:shadow-lg transition">
                            <img
                                src={`${base}images/back-end.png`}
                                className="h-[80px] sm:h-[90px] md:h-[100px] m-auto"
                                alt=""
                            />
                            <h3 className="text-center font-bold text-xl sm:text-[22px] md:text-[25px] text-blue-500 mt-3">
                                Back-end Development
                            </h3>
                            <p
                                className="text-center text-sm sm:text-base mt-2 leading-relaxed"
                                style={{
                                    fontFamily: "Neuton",
                                    fontWeight: "400",
                                    fontStyle: "normal",
                                }}
                            >
                                I’m currently learning back-end development with a focus on
                                building RESTful APIs using Node.js and Express.js. I’ve
                                practiced creating routes, handling HTTP requests (GET, POST,
                                PUT, DELETE), and connecting front-end applications to server
                                responses. This learning phase is helping me understand
                                server-side logic and API integration in web development.
                            </p>
                            <div className="mt-5 flex justify-center">
                                <button className="hover:bg-blue-500 shadow-[0_0_12px_#00bfff] text-white hover:cursor-pointer w-[120px] h-[40px] rounded-3xl bg-blue-700 transition">
                                    Read more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ourservices;
