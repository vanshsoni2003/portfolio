import { NavLink } from "react-router-dom"

const Projectes = () => {

    const info = [
        {
            name: "Perfume web site",
            para: "PERFUME WEB SITE",
            href: "https://vanshsoni2003.github.io/perfume-project/",
            img: '../public/images/perfume.webp'
        },
        {
            name: "food web site",
            para: "Food web site",
            href: "https://vanshsoni2003.github.io/zodicsign/",
            img: '../public/images/perfume.webp'
        },
        {
            name: "insta_story_feture",
            para: "story_feture",
            href: " https://vanshsoni2003.github.io/Insta-story-feature/",
            img: '../public/images/perfume.webp'
        },
        {
            name: "Add-friend-feature-with-same-button",
            para: "Add-friend",
            href: " https://vanshsoni2003.github.io/add-friend-feature-with-same-button/",
            img: '../public/images/perfume.webp'
        },
        {
            name: "jewllery",
            para: "UI",
            href: " https://vanshsoni2003.github.io/jewellery_ui_design/",
            img: '../public/images/perfume.webp'
        },
        {
            name: "Bulb_on_off",
            para: "Bulb_on_off",
            href: "http://vanshsoni2003.github.io/Bulb_on_off/",
            img: '../public/images/perfume.webp'
        },
        {
            name: "Den_product",
            para: "UI",
            href: " https://vanshsoni2003.github.io/den_product/",
            img: '../public/images/perfume.webp'
        },
         {
            name: "Drumkit",
            para: "web ",
            href: " https://vanshsoni2003.github.io/Drumkit/",
            img: '../public/images/perfume.webp'
        },
    ]

    return (
        <>

            <div className="bg-[#112C3F] h-[780px]">
                <div className="text-white font-bold text-[30px] py-4 text-center">
                    <h1>My Projects</h1> 
                </div>
                <div className="border-2 w-full max-w-[1300px] justify-self-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-4 px-4 overflow-y-auto h-[500px] md:h-[600px]">

                    {
                        info.map((i, index) => {
                            return (
                             
                                <div key={index} className="border h-auto max-w-full sm:w-[350px] md:w-[400px] py-2 px-4 mx-auto">
                                    <a href={i.href}>
                                        <div className="border h-[200px] overflow-hidden">
                                            <img src={i.img} alt="" className="h-[200px] w-full object-cover opacity-25" />
                                        </div>
                                    </a>

                                    <div className="py-4">
                                        <p className="text-green-100 ml-1 font-bold">{i.para}</p>

                                        <div className="border w-full text-center bg-white rounded-[8px] mt-4 px-2">
                                            <h1 className="font-bold border-2 text-[20px] text-[#00bfff] bg-gradient-to-r from-black to-black text-transparent bg-clip-text" style={{ fontFamily: "Silkscreen" }}>
                                                {i.name}
                                            </h1>
                                        </div>
                                    </div>
                                </div>   

                            )
                        })
                    }

                </div>

            </div>

        </>
    )

}
export default Projectes



{/* <div className="border h-[320px] w-[400px] py-2 px-4">
                          <a href="https://vanshsoni2003.github.io/zodicsign/"> 
                        <div className="border h-[200px] py-4 px-2">
                            <img src="" alt="" />
                        </div>
                         </a> 
                        <div className="py-4">
                            <p className="text-green-100 ml-1 font-bold">web app developer</p>
                            <div className="border w-[300px] text-center bg-white rounded-[8px] mt-4">
                            <h1 className="font-bold border-2  text-[20px] text-[#00bfff] bg-gradient-to-r from-black to-black text-transparent bg-clip-text" style={{ fontFamily: "Silkscreen" }} >Perfume-web-site</h1>
                            </div>
                        </div>


                    </div>
                    <div className="border h-[320px] w-[400px] py-2 px-4">
                        <div className="border h-[200px] py-4 px-2">
                            <img src="" alt="" />
                        </div>
                        <div className="py-4">
                            <p className="text-green-100 ml-1 font-bold">web app developer</p>
                            <div className="border w-[300px] text-center bg-white rounded-[8px] mt-4">
                            <h1 className="font-bold border-2  text-[20px] text-[#00bfff] bg-gradient-to-r from-black to-black text-transparent bg-clip-text" style={{ fontFamily: "Silkscreen" }} >Perfume-web-site</h1>
                            </div>
                        </div>


                    </div>
                     <div className="border h-[320px] w-[400px] py-2 px-4">
                        <div className="border h-[200px] py-4 px-2">
                            <img src="" alt="" />
                        </div>
                        <div className="py-4">
                            <p className="text-green-100 ml-1 font-bold">web app developer</p>
                            <div className="border w-[300px] text-center bg-white rounded-[8px] mt-4">
                            <h1 className="font-bold border-2  text-[20px] text-[#00bfff] bg-gradient-to-r from-black to-black text-transparent bg-clip-text" style={{ fontFamily: "Silkscreen" }} >Perfume-web-site</h1>
                            </div>
                        </div>
                    

                    </div>
                     <div className="border h-[320px] w-[400px] py-2 px-4">
                        <div className="border h-[200px] py-4 px-2">
                            <img src="" alt="" />
                        </div>
                        <div className="py-4">
                            <p className="text-green-100 ml-1 font-bold">web app developer</p>
                            <div className="border w-[300px] text-center bg-white rounded-[8px] mt-4">
                            <h1 className="font-bold border-2  text-[20px] text-[#00bfff] bg-gradient-to-r from-black to-black text-transparent bg-clip-text" style={{ fontFamily: "Silkscreen" }} >Perfume-web-site</h1>
                            </div>
                        </div>


                    </div> */}