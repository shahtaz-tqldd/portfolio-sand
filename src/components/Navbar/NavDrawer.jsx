import { HiXMark } from 'react-icons/hi2'
import { navLink } from '../../assets/data/navData'
import { socialLink } from '../../assets/data/socialLink'

// eslint-disable-next-line react/prop-types
const NavDrawer = ({ open, setOpen, scrollToSection }) => {

  return (
    <div className={`bg-[#E5D4FF] w-64 p-6 fixed top-0 bottom-0 transition duration-300 overflow-y-auto ${open ? 'translate-x-0' : '-translate-x-64'}`}>
      <HiXMark onClick={() => setOpen(!open)} className='absolute top-4 right-4 hover:bg-red-400 rounded-full p-1 text-2xl' />
      <div className="mt-10">
        <a onClick={() => scrollToSection(7)} className="text-2xl uppercase text-orange-500 font-bold tracking-widest cursor-pointer">Portfolio</a>
      </div>
      <div className="flex flex-col gap-6 mt-10">
        {
          navLink?.map((nav, index) => (
            <div key={index}>
              <a
                onClick={() => scrollToSection(nav.id)}
                className="cursor-pointer hover:text-orange-400 transition duration-300"
              >
                {nav.nav}
              </a>
            </div>
          ))
        }
      </div>
      <div className="flex items-center gap-8 text-orange-600 justify-center mt-20">
        {
          socialLink?.map((link, index) => (
            <a key={index} href={link?.link} target="_blank" rel="noreferrer" className="hover:text-red-500 transition duration-300" ><link.icon className="text-xl" /></a>
          ))
        }
      </div>
    </div>
  )
}

export default NavDrawer
