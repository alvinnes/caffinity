import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionAbout from "../components/Sections/SectionAbout/SectionAbout";
import SectionContact from "../components/Sections/SectionContact/SectionContact";
import SectionFeatures from "../components/Sections/SectionFeatures/SectionFeatures";
import SectionHome from "../components/Sections/SectionHome";
import SectionMenus from "../components/Sections/SectionMenus/SectionMenus";
import SectionProducts from "../components/Sections/SectionProducts/SectionProducts";
import SectionRating from "../components/Sections/SectionRating";
import SectionReason from "../components/Sections/SectionReason";
import SectionTestimonials from "../components/Sections/SectionTestimonials";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <SectionHome />
      <SectionAbout />
      <SectionRating />
      <SectionMenus />
      <SectionReason />
      <SectionFeatures />
      <SectionTestimonials />
      <SectionProducts />
      <SectionContact />
      <Footer />
      <Sidebar />
    </main>
  );
};

export default HomePage;
