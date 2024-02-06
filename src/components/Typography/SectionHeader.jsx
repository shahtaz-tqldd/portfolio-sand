// eslint-disable-next-line react/prop-types
const SectionHeader = ({ children }) => {
  return (
    <div>
      <h2
        data-aos="fade-up"
        data-aos-duration="700"
        className='lg:text-6xl md:text-6xl text-4xl uppercase text-gray-100 font-bold text-center pt-20 mb-16 select-none'
      >
        {children}
      </h2>
    </div>
  )
}

export default SectionHeader
