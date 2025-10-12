import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbar bg-[#051423] shadow-sm text-white flex flex-col md:flex-row items-center justify-between px-4 py-3">
        {/* Logo */}
        <a
          className="btn btn-ghost text-3xl"
          style={{ fontFamily: "Silkscreen" }}
        >
          vansh
        </a>

        {/* Hamburger btn (only mobile) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Menu items */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row space-x-0 md:space-x-4 mt-2 md:mt-0 gap-4 md:gap-8 text-center`}
          style={{ fontFamily: "Neuton" }}
        >
          <li className="hover:text-[#00bfff]">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="hover:text-[#00bfff]">
            <NavLink to="/aboutus">About</NavLink>
          </li>
          <li className="hover:text-[#00bfff]">
            <NavLink to="/projectes">Project</NavLink>
          </li>
          <li className="hover:text-[#00bfff]">
            <NavLink to="/skill">Skill</NavLink>
          </li>
          <li className="hover:text-[#00bfff]">
            <NavLink to="/contactus">Contact</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
