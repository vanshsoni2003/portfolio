import { NavLink } from "react-router-dom"
const base = import.meta.env.BASE_URL;

const Projectes = () => {

    const info = [
        {
            name: "Perfume web site",
            para: "PERFUME WEB SITE",
            href: "https://vanshsoni2003.github.io/perfume-project/",
            img: `${base}images/perfume.webp`
        },
        {
            name: "Belaxa",
            para: "belaxa",
            href: "https://vanshsoni2003.github.io/Belaxa/",
            img: `${base}images/download (4).png`
        },
         {
            name: "ProEnlist it solution",
            para: "belaxa",
            href: "https://vanshsoni2003.github.io/ProEnlist_IT_Solutions/",
            img: `${base}images/download (7).png`
        },
        {
            name: "food web site",
            para: "Food web site",
            href: "https://vanshsoni2003.github.io/zodicsign/",
            img: `${base}images/donload.png`
        },
        {
            name: "insta_story_feture",
            para: "story_feture",
            href: " https://vanshsoni2003.github.io/Insta-story-feature/",
            img: `${base}images/download (1).png`
        },
        {
            name: "Add-friend-feature-with-same-button",
            para: "Add-friend",
            href: " https://vanshsoni2003.github.io/add-friend-feature-with-same-button/",
            img: `${base}images/download (2).png`
        },
        {
            name: "jewllery",
            para: "UI",
            href: " https://vanshsoni2003.github.io/jewellery_ui_design/",
            img: `${base}images/images (1).png`
        },
        {
            name: "Bulb_on_off",
            para: "Bulb_on_off",
            href: "http://vanshsoni2003.github.io/Bulb_on_off/",
            img: `${base}images/download (3).png`
        },
        {
            name: "Den_product",
            para: "UI",
            href: " https://vanshsoni2003.github.io/den_product/",
            img: `${base}images/perfume.webp`
        },
        {
            name: "Drumkit",
            para: "web ",
            href: " https://vanshsoni2003.github.io/Drumkit/",
            img: `${base}images/download.png`
        },
    ]

    return (
        <>
            <div className="bg-[#112C3F] min-h-[100vh] px-4 sm:px-6 lg:px-12 py-8">
                <div className="text-white font-bold text-2xl sm:text-3xl md:text-4xl py-4 text-center">
                    <h1>My Projects</h1> 
                </div>

                {/* Responsive Grid */}
                <div className="border-2 w-full max-w-[1300px] justify-self-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4 px-2 sm:px-4 overflow-y-auto h-[500px] sm:h-[600px]">

                    {info.map((i, index) => {
                        return (
                            <div key={index} className="border h-auto w-full max-w-[400px] py-3 px-4 mx-auto bg-[#0b1e2a] rounded-lg">
                                <a href={i.href} target="_blank" rel="noopener noreferrer">
                                    <div className="border h-[200px] overflow-hidden rounded-md">
                                        <img src={i.img} alt={i.name} className="h-[200px] w-full object-cover opacity-25 hover:opacity-100 transition duration-300 " />
                                    </div>
                                </a>

                                <div className="py-4">
                                    <p className="text-green-100 ml-1 font-bold text-sm sm:text-base">{i.para}</p>

                                    <div className="border w-full text-center bg-white rounded-[8px] mt-4 px-2">
                                        <h1 className="font-bold border-2 text-lg sm:text-xl text-[#00bfff] bg-gradient-to-r from-black to-black text-transparent bg-clip-text" style={{ fontFamily: "Silkscreen" }}>
                                            {i.name}
                                        </h1>
                                    </div>
                                </div>
                            </div>   
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Projectes;
