const Aboutus = () => {

    return (
        <>
            <div className="bg-[#051423]  text-white h-[664px]">

                <div className="grid grid-cols-2 ">
                    <div className=" h-[664px] w-[100%] m-auto ">
                        <div className="justify-self-center rounded-[10px] m-auto mt-25 h-[70%]  w-[50%] shadow-[0_0_30px_#00bfff] ">
                            <img src="../public/images/profile.png" alt="" className="h-[100%] w-[100%]" />
                        </div>
                    </div>

                    <div className="justify-self-center m-auto">
                        <div className=" h-[400px] ">
                            <h1 className="text-start font-bold text-[30px]">About <span className="text-blue-500"> Me </span></h1>
                            <h3 className="mt-2"><b>Hi,My name is Vansh</b></h3>
                            <br />

                            <p>Hi, I'm Vansh Mandaliya — a passionate front-end developer with a strong interest in creating clean, responsive, and user-friendly web interfaces using HTML, CSS, JavaScript, React.js, and Tailwind CSS. I enjoy bringing designs to life in the browser and focusing on smooth user experiences. Currently, I’m expanding my skills by learning back-end development and RESTful APIs using Node.js and Express.js, with the goal of becoming a full-stack developer.

</p>
                            <br />
                            {/* <p>Lorem ipsum dolor sima r, dolorum laborum officia excepturi voluptatem voluptatibus soluta ipsa.ri voluptatem voluptatibus solutari voluptatem voluptatibus soluta</p> */}

                            <div className="grid grid-cols-2 mt-5 font-bold text-[20px] py-4 text-center w-[500px] justify-self-center shadow-[0_0_10px_black]">
                                <h1> 1.Problem solving </h1>
                                <h1> 2.Problem solving </h1>
                                <h1> 3.Problem solving </h1>
                                <h1> 4.web developerrr </h1>


                            </div>

                            <button className="border-2 bg-blue-400 hover:bg-blue-900 text-black h-[45px] mt-7 py-2 rounded-[20px] ml-2 w-[130px]">Contact me</button>

                        </div>

                    </div>



                </div>

            </div>
        </>
    )

}

export default Aboutus