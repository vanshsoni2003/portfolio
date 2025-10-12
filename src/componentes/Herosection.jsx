const base = import.meta.env.BASE_URL;
const Herosection = ()=>{
    return(
        <>
           <div className="bg-[#051423] text-white py-10 px-5 md:px-20 h-[100vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-14">

          <div>
            <h1
              className="font-bold text-3xl md:text-5xl bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text mb-3"
              style={{ fontFamily: "Berkshire Swash" }}
            >
              Hi, I'm Vansh Mandaliya
            </h1>
            <h3 className="text-lg md:text-xl text-blue-600 font-bold mb-4">
              Frontend Developer
            </h3>
            <p
              className="mb-6 text-sm md:text-base"
              style={{ fontFamily: "Neuton" }}
            >
             I specialize in creating responsive, user-friendly web interfaces using HTML, CSS, and JavaScript.
With experience in frameworks like React and Tailwind CSS, I build modern, interactive websites.
            </p>


            <div className="flex flex-wrap gap-4 mb-6">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all">
                Hire me
              </button>
             <a
  href="https://wa.me/916354459943?text=Hi%20Vansh%2C%20I%27m%20interested%20in%20working%20with%20you."
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-all">
    Let’s Talk on WhatsApp
  </button>
</a>

            </div>

            <div className="flex flex-wrap gap-6">
              <a href="https://github.com/vanshsoni2003" target="_blank" rel="noreferrer"><i className="fa-brands fa-github text-[30px] p-3 border-2 border-blue-500 rounded-full shadow-[0_0_12px_#00bfff] hover:scale-110 transition" /></a>
              <a href="https://www.linkedin.com/in/vansh-mandaliya-66b182271"target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in text-[30px] p-3 border-2 border-blue-500 rounded-full shadow-[0_0_12px_#00bfff] hover:scale-110 transition"/></a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] aspect-square rounded-full border-4 border-blue-500 shadow-[0_0_30px_#00bfff] overflow-hidden">
              <img
                img src={`${base}images/profile.png`} alt="pic"
                // alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default Herosection