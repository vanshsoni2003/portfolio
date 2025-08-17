const Ourservices = () => {

    return (
        <>
            <div className="bg-[#051423] ">
                <div className="py-8">  
                    <h1 className="text-center text-white font-bold text-3xl" style={{fontFamily: "Berkshire Swash",fontWeight: "400",fontStyle:"normal"}}> <b> Our <span className="text-blue-500 "> Services </span> </b> </h1>
                </div>

                <div>
                    <div className="md:flex w-[full] grid grid-cols-1  text-white p-4 gap-15 place-content-center">
                        <div className="w-[400px] h-[400px] place-content-center">
                            <img src="../public/images/back-end.png" className="h-[100px] m-auto" alt="" />
                            <h3 className="text-center font-bold text-[25px] text-blue-500">Web delveloment</h3>
                            <p className="text-wrap text-center  "style={{fontFamily: "Neuton",fontWeight: "400",fontStyle:"normal"}}>I design and develop responsive websites using HTML, CSS, JavaScript, React.js, and Tailwind CSS. My focus is on creating clean, user-friendly interfaces with modern layouts and smooth interactivity. I use React for building reusable components and Tailwind CSS for efficient styling. I’m currently expanding my skills in back-end development with Node.js, Express.js, and MongoDB to become a full-stack developer.</p>
                            <div className=" mt-5">
                            <button className="hover:bg-blue-500 shadow:bg-[blue] text-[white] shadow-[0_0_12px_#00bfff] hover:cursor-pointer w-[120px] h-[40px] rounded-3xl ml-32 bg-blue-700">Read more</button>
                            </div>
                        </div>
                       <div className="w-[400px] h-[400px] place-content-center">
                             <img src="../public/images/web-developer.png" className="h-[100px] m-auto" alt="" />
                            <h3 className="text-center font-bold text-[25px] text-blue-500">front-end development</h3>
                            <p className="text-wrap text-center  "style={{fontFamily: "Neuton",fontWeight: "400",fontStyle:"normal"}}>I design and develop responsive websites using HTML, CSS, JavaScript, React.js, and Tailwind CSS. My focus is on creating clean, user-friendly interfaces with modern layouts and smooth interactivity. I use React for building reusable components and Tailwind CSS for efficient styling. I’m currently expanding my skills in back-end development with Node.js, Express.js, and MongoDB to become a full-stack developer.

</p>
                            <div className=" mt-5">
                            <button className="hover:bg-blue-500 shadow:bg-[blue] text-[white] shadow-[0_0_12px_#00bfff] hover:cursor-pointer w-[120px] h-[40px] rounded-3xl ml-32 bg-blue-700">Read more</button>
                            </div>
                        </div>
                       <div className="w-[400px] h-[400px] place-content-center">
                             <img src="../public/images/back-end.png" className="h-[100px] m-auto" alt="" />
                            <h3 className="text-center font-bold text-[25px] text-blue-500">Back-end developer</h3>
                            <p className="text-wrap text-center  "style={{fontFamily: "Neuton",fontWeight: "400",fontStyle:"normal"}}>I’m currently learning back-end development with a focus on building RESTful APIs using Node.js and Express.js. I’ve practiced creating routes, handling HTTP requests (GET, POST, PUT, DELETE), and connecting front-end applications to server responses. This learning phase is helping me understand server-side logic and API integration in web development.</p>
                            <div className=" mt-5">
                            <button className="hover:bg-blue-500 shadow:bg-[blue] text-[white] shadow-[0_0_12px_#00bfff] hover:cursor-pointer w-[120px] h-[40px] rounded-3xl ml-32 bg-blue-700">Read more</button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )


}
export default Ourservices