import { useEffect, useRef, useState } from "react";
import { navLink } from "../../assets/data/navData"
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import NavDrawer from "./NavDrawer";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navBarRef = useRef(null);

  const dropdownRefs = useRef({});
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the Navbar and NavDrawer
      if (navBarRef.current && !navBarRef.current.contains(event.target)) {
        setOpen(false);
      }

      // Check if the click is outside the specific dropdown elements
      for (const id in dropdownRefs.current) {
        if (dropdownRefs.current[id] && !dropdownRefs.current[id].contains(event.target)) {
          setOpen((prevState) => ({
            ...prevState,
            [id]: false,
          }));
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={navBarRef} className="bg-slate-700 py-4 sticky top-0 z-50 md:bg-opacity-100 bg-opacity-30">
      <button onClick={() => setOpen(!open)} className="absolute top-1/2 -translate-y-1/2 left-10 lg:hidden md:block block text-white">
        <HiOutlineMenuAlt1 />
      </button>
      <div className="flex items-end justify-center gap-5 uppercase text-sm text-white  tracking-wider">
        <div className="lg:flex md:hidden gap-5 hidden mb-1">
          {
            navLink?.slice(0, 3)?.map((nav, index) => (
              <a
                key={index}
                onClick={() => scrollToSection(nav.id)}
                className="cursor-pointer hover:text-orange-400 transition duration-300"
              >
                {nav.nav}
              </a>
            ))
          }
        </div>
        <div className="mx-6 flex flex-col items-center">
          <p className="text-xs text-gray-300">Portfolio</p>
          <a onClick={() => scrollToSection(7)} className="text-2xl uppercase text-orange-500 font-bold tracking-widest cursor-pointer">
            Aminul Rashed
          </a>
        </div>
        <div className="lg:flex md:hidden gap-5 hidden mb-1">
          {
            navLink?.slice(3, 6)?.map((nav, index) => (
              <a
                key={index}
                onClick={() => scrollToSection(nav.id)}
                className="cursor-pointer hover:text-orange-400 transition duration-300"
              >
                {nav.nav}
              </a>
            ))
          }
        </div>
      </div>

      <NavDrawer
        open={open}
        setOpen={setOpen}
        scrollToSection={scrollToSection}
      />

    </div>
  )
}

export default Navbar