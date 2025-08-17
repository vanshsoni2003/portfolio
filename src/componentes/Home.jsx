import About from "./About"
import Contact from "./Contact"
import Herosection from "./Herosection"
import Navbar from "./Navbar"
import Ourservices from "./Ourservices"
import Projects from "./Projects"

const Home = () => {
    return (
        <>
            {/* <Navbar/> */}
            <Herosection/>
            <About/>
            <Ourservices/>
            <Projects/>
            <Contact/>


        </>
    )

}
export default Home