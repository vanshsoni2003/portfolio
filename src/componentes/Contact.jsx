

const Contact = () => {

    return (
        <>
            <div className="bg-[#051423]">

                <div className="py-8">
                    <h1 className="text-center text-white font-bold text-3xl" style={{fontFamily: "Berkshire Swash",fontWeight: "400",fontStyle:"normal"}} > <b> Contact  <span className="text-blue-500 "> Me </span> </b> </h1>
                </div>

                <div className="place-content-center justify-self-center ">

                    <fieldset className="fieldset  border-base-300 rounded-box w-xs  p-4 text-white ">
                      
                        <div className="gap-4 w-[700px]  justify-self-center " >
                            <div className=" gap-4  grid grid-cols-2">
                                <div className=""   >
                                    <p className="label font-bold text-[20px] ">Your Name</p>
                                    <input type="text" className="input text-black" placeholder="My awesome page" />
                                </div>
                                <div>
                                    <p className="label font-bold text-[20px]">Your Name</p>
                                    <input type="text" className="input text-black" placeholder="My awesome page" />
                                </div>
                                 <div>
                                    <p className="label font-bold text-[20px]">Your Name</p>
                                    <input type="text" className="input text-black" placeholder="My awesome page" />
                                </div>
                                <div>
                                    <p className="label font-bold text-[20px]">Your Name</p>
                                    <input type="text" className="input text-black" placeholder="My awesome page" />
                                </div>
                            </div>
                            <div className="mt-4  ">
                                   <h1 className="font-bold text-[20px] label">Message</h1>
                                   <input type="" className="input text-black w-[680px] h-[190px] " placeholder="enter " />
                            </div>
                        </div>
                        <div className="mt-4 w-[400px] m-auto">
                         <button className="font-bold hover:bg-blue-500 shadow:bg-[blue] text-[white] shadow-[0_0_5px_#00bfff] hover:cursor-pointer w-[150px] h-[40px] rounded-3xl ml-32 bg-blue-700">Send more</button>
                         </div>
                    </fieldset>

                </div>
            </div>
        </>
    )


}

export default Contact