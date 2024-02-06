import { BsDot } from "react-icons/bs"
import SectionHeader from "../../components/Typography/SectionHeader"
import people from '../../assets/images/people.png'
import moment from "moment/moment"


const Experiences = () => {
  const experiences = [
    {
      startDate: "02/20/2023",
      endDate: "11/24/2023",
      title: "Marketing manager",
      organization: "Daraz",
      description: "Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas id ligula ac dui mollis tempor. Sed vitae ex eros. Proin nisl felis, consectetur sed elit sed, vestibulum ultrices nibh."
    },
    {
      startDate: "02/20/2023",
      endDate: "11/24/2023",
      title: "Marketing manager",
      organization: "Daraz",
      description: "Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas id ligula ac dui mollis tempor. Sed vitae ex eros. Proin nisl felis, consectetur sed elit sed, vestibulum ultrices nibh."
    },
    {
      startDate: "02/20/2023",
      endDate: "11/24/2023",
      title: "Marketing manager",
      organization: "Daraz",
      description: "Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas id ligula ac dui mollis tempor. Sed vitae ex eros. Proin nisl felis, consectetur sed elit sed, vestibulum ultrices nibh."
    },
  ]
  return (
    <div id="3" className="bg-[#D0BFFF]">
      <div className="max-w-[1280px] mx-auto md:px-0 px-4">
        <SectionHeader>Experiences</SectionHeader>
        <div className="grid grid-cols-5 gap-10 items-end">
          <div className="col-span-2 md:block hidden">
            <img src={people} alt="" className="w-2/3 mx-auto" />
          </div>
          <div className="md:col-span-3 col-span-5">
            <div className="relative mt-5 text-left pb-20">
              {
                experiences?.map(({ startDate, endDate, title, organization, description }, i) => (
                  <div
                    key={i} className="flex items-center relative">
                    <div className="hidden md:block w-20">
                      <div className="font-bold ">{moment(startDate).format('YYYY')}</div>
                      <div className="md:flex space-x-1 text-xs">
                        <div>{moment(startDate).format('MMM')}</div>
                        <div>-</div>
                        <div>{moment(endDate).format('MMM')}</div>
                      </div>
                    </div>

                    <div className="border-r-2 border-gray-700 absolute h-full left-1 md:left-20 top-2 z-10">
                      <BsDot className="text-7xl text-gray-700 -top-6 -ml-[35px] absolute" />
                    </div>

                    <div
                      data-aos="fade-left"
                      data-aos-duration="500"
                      data-aos-delay={`${150 * (i + 1)}`}
                      className="md:ml-16 ml-10">
                      <div className="font-bold">{title}</div>
                      <div className=" md:mb-4">{organization}</div>
                      <div className="mb-4 mt-2 md:hidden">
                        <div className="font-bold">{moment(startDate).format('YYYY')}</div>
                        <div className="text-xs">{moment(startDate).format('MMM')} - {moment(endDate).format('MMM')}</div>
                      </div>
                      <div className="mb-10">{description}</div>
                    </div>
                  </div>

                ))
              }


            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Experiences