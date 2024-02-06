import { useState } from "react";
import SectionHeader from "../../components/Typography/SectionHeader";

const short = "https://img.freepik.com/premium-photo/young-man-running-small-business-from-home-office_507264-5447.jpg"

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  const shortBio = (
    <>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </>
  );
  return (
    <div id="2" className='bg-[#9AD0C2] md:pb-20 pb-0'>
      <SectionHeader>Short biography</SectionHeader>
      <div className='grid md:grid-cols-2 grid-cols-1 max-w-[1280px] lg:gap-20 md:gap-8 gap-8 mx-auto pb-20'>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          className="md:order-first order-last lg:px-0 md:px-4 px-4"
        >
          <div className={`flex flex-col gap-4 text-justify ${expanded ? '' : 'h-[400px] overflow-hidden'}`}>
            {shortBio}
          </div>
          <button className="mt-6 text-orange-700" onClick={toggleReadMore}>{!expanded ? 'Read More' : 'Read Less'}</button>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1400"
          data-aos-delay="400"
        >
          <img src={short} className='lg:h-[420px] md:h-[360px] h-[280px] w-full object-cover' alt='' />
        </div>
      </div>
    </div>
  )
}

export default About
