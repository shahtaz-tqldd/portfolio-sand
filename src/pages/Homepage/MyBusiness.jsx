import { useState } from "react";
import SectionHeader from "../../components/Typography/SectionHeader";

const businessImg = "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=ZAXJYLesh6gSd9huAgpy6rjpR4z-IFVH9MpxrKIXCrs="

const MyBusiness = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  const business = (
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
    <div id="2" className='bg-[#A0D995] md:pb-20 pb-0 z-10 relative'>
      <SectionHeader>My Business</SectionHeader>
      <div className='grid md:grid-cols-2 grid-cols-1 max-w-[1280px] lg:gap-20 md:gap-8 gap-8 mx-auto pb-20'>
        <div
          data-aos="fade-up"
          data-aos-duration="1400"
          data-aos-delay="400"
        >
          <img src={businessImg} className='lg:h-[420px] md:h-[360px] h-[280px] w-full object-cover' alt='' />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          className="lg:px-0 md:px-4 px-4"
        >
          <div className={`flex flex-col gap-4 text-justify ${expanded ? '' : 'h-[400px] overflow-hidden'}`}>
            {business}
          </div>
          <button className="mt-6 text-orange-700" onClick={toggleReadMore}>{!expanded ? 'Read More' : 'Read Less'}</button>
        </div>

      </div>
    </div>
  )
}

export default MyBusiness
