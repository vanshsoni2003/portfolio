import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-[#051423] shadow-sm text-white flex flex-col md:flex-row items-center justify-between px-4 py-3">
        <a className="btn btn-ghost text-3xl" style={{ fontFamily: "Silkscreen" }}>
          vansh
        </a>
        <ul className="flex space-x-4 mt-2 md:mt-0 mr-22 gap-8" style={{ fontFamily: "Neuton" }}>
          <li className="hover:text-[#00bfff]"><NavLink to="/home">Home</NavLink></li>
          <li className="hover:text-[#00bfff]"><NavLink to="/aboutus">About</NavLink></li>
          <li className="hover:text-[#00bfff]"><NavLink to="/projectes">Project</NavLink></li>
          <li className="hover:text-[#00bfff]"> <NavLink to="/skill"> Skill </NavLink> </li>
          <li className="hover:text-[#00bfff]"> <NavLink to="/contactus">Contact</NavLink> </li>
        </ul>
      </div>

      {/* <div className="bg-[#051423] text-white py-10 px-5 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempora,
              unde, amet qui perspiciatis, neque similique in maxime quos fugit
              suscipit pariatur perferendis reprehenderit laudantium!
            </p>


            <div className="flex flex-wrap gap-4 mb-6">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all">
                Hire me
              </button>
              <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-all">
                Let's talk
              </button>
            </div>


            <div className="flex flex-wrap gap-6">
              <a href="https://github.com/vanshsoni2003" target="_blank" rel="noreferrer"><i className="fa-brands fa-github text-[30px] p-3 border-2 border-blue-500 rounded-full shadow-[0_0_12px_#00bfff] hover:scale-110 transition" /></a>
              <a href="https://www.linkedin.com/in/vansh-mandaliya-66b182271"target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in text-[30px] p-3 border-2 border-blue-500 rounded-full shadow-[0_0_12px_#00bfff] hover:scale-110 transition" /></a>
            </div>
          </div>


          <div className="flex justify-center">
            <div className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] aspect-square rounded-full border-4 border-blue-500 shadow-[0_0_30px_#00bfff] overflow-hidden">
              <img
                src="/images/profile.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div> */}


    </>
  )
}

export default Navbar 










//  <div className="navbar bg-[#051423] shadow-sm text-white">
//         <div className="flex-1">
//           <a className="btn btn-ghost text-3xl ml-15"style={{fontFamily: "Silkscreen",fontWeight: "400",fontStyle:"normal"}}>vansh</a>
//         </div>
//         <div className="flex-none mr-18">
//           <ul className="menu menu-horizontal px-1 " style={{fontFamily: "Neuton",fontWeight: "400",fontStyle:"normal"}}>
//             <li className="hover:text-[#00bfff]"><a>Home</a></li>
//             <li className="hover:text-[#00bfff]"><a>About</a></li>
//             <li className="hover:text-[#00bfff]"><a>Education</a></li>
//             <li className="hover:text-[#00bfff]"><a>Skill</a></li>
//             <li className="hover:text-[#00bfff]"><a>Contact</a></li>


//           </ul>
//         </div>
//       </div>


//       <div className='mt-[-64px] h-[700px]'>

//         <div className='grid grid-cols-2 bg-[#051423] text-white h-[700px]'>
//           <div className="flex items-center justify-center h-screen ">
//             <div className="text-left  p-6 ml-15 ">
//               <h1 className="font-bold h-[60px] text-5xl mb-2 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text" style={{fontFamily: "Berkshire Swash",fontWeight: "400",fontStyle:"normal"}}  >Hi, I'm Vansh Mandaliya</h1>
//               <h3 className="text-lg text-blue-600 mb-4 font-bold text-2x1">Frontend Developer</h3>
//               {/* <marquee direction="right" className="text-lg text-blue-600 mb-4 font-bold text-2x1 w-[200px]">Frontend Developer</marquee> */}

//               <p className="mb-6" style={{fontFamily: "Neuton",fontWeight: "400",fontStyle:"normal"}}>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempora, unde, amet qui perspiciatis, neque similique in maxime quos fugit suscipit pariatur perferendis reprehenderit laudantium! Quaerat reiciendis aut atque qui!
//               </p>

//               <div className="flex gap-4">
//                 <button className="px-4 py-2 bg-blue-600 text-white rounded">Hire me</button>
//                 <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded">Let's talk</button>
//               </div>

//               <div className='flex   mt-22 gap-9 '>
//              <a href="https://github.com/vanshsoni2003"> <i class="fa-brands fa-github text-[50px] border-5 rounded-[100%] border-blue-500 shadow-[0_0_12px_#00bfff]"> </i> </a> 
//              <a href="www.linkedin.com/in/vansh-mandaliya-66b182271" className="border-5 rounded-[100%] border-blue-500 shadow-[0_0_12px_#00bfff] w-[60px]" ><i className="fa-brands fa-linkedin-in text-[35px] ml-[10px] mt-2"></i> </a>
             
//                <i class="fa-brands fa-github text-[50px] border-5 rounded-[100%] border-blue-500 shadow-[0_0_12px_#00bfff]"></i>
//                <i class="fa-brands fa-github text-[50px] border-5 rounded-[100%] border-blue-500 shadow-[0_0_12px_#00bfff]"></i>

//               </div>

//             </div>
//           </div>

//           <div className="">
//             <div className="justify-self-center mt-30  h-[500px] w-[500px] rounded-full border-4 border-blue-500 shadow-[0_0_30px_#00bfff] overflow-hidden">
//               <img
//                 src="../public/images/profile.png"
//                 alt="Profile"
//                 className="w-[500px] h-[500px] object-cover rounded-full"
//               />
//               {/* <div className="absolute inset-0 rounded-full border-2 border-blue-500 animate-ping"></div> */}
//             </div>
//           </div>

//         </div>

//       </div> 