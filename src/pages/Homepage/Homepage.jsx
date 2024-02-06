import About from "./About"
// import Contact from "./Contact"
import AboutMe from "./AboutMe"
import Banner from "./Banner"
// import Hero from "./Hero"
// import Membership from "./Membership"
// import MyBusiness from "./MyBusiness"
// import Philanthropy from "./Philantrhopy"
import Review from "./Review"
import Experiences from "./Experiences"
import MyWork from "./MyWork"
import Achivements from "./Achivements"
// import PhotoGalary from "./PhotoGalary"

const Homepage = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Banner />
      <AboutMe />
      <About />
      <Experiences />
      <MyWork />
      {/* <MyBusiness /> */}
      {/* <Philanthropy /> */}
      <Review />
      <Achivements />
      {/* <Membership /> */}

      {/* <Contact /> */}
      {/* <PhotoGalary /> */}
    </div>
  )
}

export default Homepage