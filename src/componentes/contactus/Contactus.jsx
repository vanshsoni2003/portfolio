const Contactus =()=>{

    return(
        <>
            <div className="bg-[#112C3F] h-[1400px]">
               <div className="relative ">
                    <div className="absolute h-[800px] w-[500px] left-24 ">
                    <img src="../public/images/telephtwo.png" alt="" className="h-[800px] w-[500px] "/>
                    </div>
                    <div className="absolute h-[550px] w-[450px] right-49 top-18  object-cover m-auto">
                    <img src="../public/images/telephonetwo.png" alt="" className=" h-[800px] w-[450px] object-cover "/>
                    </div>
                    <div class="absolute top-9 left-69">
                         <div className="flex justify-center items-center  h-[300px]">
                            <div className="relative w-[160px] h-[160px] rounded-full border-4 border-blue-500 shadow-[0_0_30px_#00bfff] overflow-hidden">
                                <img
                                    src="../public/images/profile.png"
                                    // alt="Profile"
                                    className="w-[180px] h-[200px] object-cover rounded-full"
                                />
                                <div className="absolute inset-0 rounded-full border-2 border-blue-500 animate-ping"></div>
                            </div>
                        </div>
                    </div>
                    <div className="text-white w-[800px]  text-center absolute top-125 left-55 gap-7 ">
                        <h1 className="font-bold text-[40px] tracking-[.15em] ..." style={{  fontFamily: "Monoton",fontWeight: 10 }}> <b> Conotact <span className="ml-7">Us</span> </b> </h1>
                    </div>
               </div>

            </div>
              <div className="border mt-[-620px]  justify-self-center border-blue-500 shadow-[inset_0_0_10px_#00bfff]">
                  <fieldset className="fieldset  border-base-300 rounded-box w-xs  p-4 text-white " >
                      
                        <div className="gap-4 w-[900px]  justify-self-center ">
                            <div className=" gap-18  grid grid-cols-2" >
                                <div className="" style={{fontFamily: "Fredericka the Great",fontWeight: "100",fontStyle:"normal"}}>
                                    <p className="label font-bold text-[20px] text-green-200" style={{fontFamily: "Fredericka the Great",fontWeight: "100",fontStyle:"normal"}}>Your Name</p>
                                    <input type="text" className="input text-white-500 bg-[#112C3F] placeholder-green-100 mt-2" placeholder="My awesome page" />
                                </div>
                                <div>
                                    <p className="label font-bold text-[20px] text-green-200">Your Name</p>
                                    <input type="text" className="input text-white-500 bg-[#112C3F]" placeholder="My awesome page" />
                                </div>
                                 <div>
                                    <p className="label font-bold text-[20px] text-green-200">Your Name</p>
                                    <input type="text" className="input text-white-500 bg-[#112C3F]" placeholder="My awesome page" />
                                </div>
                                <div>
                                    <p className="label font-bold text-[20px] text-green-200">Your Name</p>
                                    <input type="text" className="input text-white-500 bg-[#112C3F]" placeholder="My awesome page" />
                                </div>
                            </div>
                            <div className="mt-4  ">
                                   <h1 className="font-bold text-[20px] label text-green-200">Message</h1>
                                   <input type="" className="input text-white-500 w-[680px] h-[190px] bg-[#112C3F]" placeholder="enter " />
                            </div>
                        </div>
                        <div className="mt-4 w-[400px] m-auto">
                         <button className="font-bold hover:bg-blue-500 shadow:bg-[blue] text-[white] shadow-[0_0_5px_#00bfff] hover:cursor-pointer w-[150px] h-[40px] rounded-3xl ml-32 bg-blue-700">Send more</button>
                         </div>
                    </fieldset>
                </div>
        </>
    )

}
export default Contactus