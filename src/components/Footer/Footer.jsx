import { socialLink } from "../../assets/data/socialLink"

const Footer = () => {
  return (
    <div className="bg-slate-800 py-6 relative z-20">
      <div className="flex items-center gap-8 text-white justify-center mb-3">
        {
          socialLink?.map((link, index) => (
            <a key={index} href={link?.link} target="_blank" rel="noreferrer" className="hover:text-red-500 transition duration-300" ><link.icon className="text-xl" /></a>
          ))
        }
      </div>
      <p className="text-white text-xs text-center">copyright &copy; 2023 Portfolio</p>
    </div>
  )
}

export default Footer