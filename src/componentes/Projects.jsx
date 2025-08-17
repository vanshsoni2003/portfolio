const Projects = () => {

    const latest = [
        {
            href: "https://vanshsoni2003.github.io/perfume-project/",
            img: '../public/images/perfume.webp'
        },
        {
           
            href: "https://vanshsoni2003.github.io/zodicsign/",
            img: '../public/images/perfume.webp'
        },
        {           
            href: "https://vanshsoni2003.github.io/food_web-site-/",
            img: '../public/images/perfume.webp'
        }
    ]

    return (

        <>
            <div className=" h-[1000px] bg-[#112C3F] md:h-[500px]">
                <div className="py-8 bg-[#112C3F]">
                    <h1 className="text-center text-white font-bold text-3xl"> <b> <span className="text-blue-500 "> Projects </span> </b> </h1>
                </div>
                <div>
                    <div className="md:flex text-white justify-self-center gap-8 grid grid-cols-1">

                        {
                            latest.map((i) => {
                                return (
                                    <>
                                            <a href={i.href}>
                                        <div className="relative border-2 h-[300px] w-[300px] ">
                                            <div className="  absolute border-2 h-[100%] w-[100%] bg-blue-800  ">
                                                <img src="../public/images/back-end.png" alt="" className="opacity-15" />
                                            </div>
                                            <div className="  absolute z-20 ... text-center justify-self-center h-[100%] w-[100%] place-content-center text-black ">
                                                <h1 className="font-bold">click And cheack</h1>
                                            </div>
                                          

                                        </div>
                                          </a>
                                    </>
                                )
                            })
                        }


                        {/* <div className="relative border-2 h-[300px] w-[300px] ">
                        
                                <div className="  absolute border-2 h-[100%] w-[100%] bg-blue-800  ">
                                <img src="../public/images/back-end.png" alt="" className="opacity-15"/>
                                </div>
                                <div className="  absolute z-20 ... text-center justify-self-center h-[100%] w-[100%] place-content-center text-black ">
                                    <h1 className="font-bold">click And cheack</h1>
                                </div>

                            </div>

                             <div className="relative border-2 h-[300px] w-[300px] ">
                                <div className="  absolute border-2 h-[100%] w-[100%] bg-blue-800  ">
                                <img src="../public/images/back-end.png" alt="" className="opacity-15"/>
                                </div>
                                <div className="  absolute z-20 ... text-center justify-self-center h-[100%] w-[100%] place-content-center text-black ">
                                    <h1 className="font-bold">click And cheack</h1>
                                </div>

                            </div>

                              <div className="relative border-2 h-[300px] w-[300px] ">
                                <div className="  absolute border-2 h-[100%] w-[100%] bg-blue-800  ">
                                <img src="../public/images/back-end.png" alt="" className="opacity-15"/>
                                </div>
                                <div className="  absolute z-20 ... text-center justify-self-center h-[100%] w-[100%] place-content-center text-black ">
                                    <h1 className="font-bold">click And cheack</h1>
                                </div>

                            </div> */}

                    </div>

                </div>

            </div>
        </>
    )

}
export default Projects