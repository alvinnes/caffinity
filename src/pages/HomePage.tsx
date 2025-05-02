import Navbar from "../components/Navbar";
import SectionAbout from "../components/Sections/SectionAbout";
import SectionHome from "../components/Sections/SectionHome";
import SectionMenus from "../components/Sections/SectionMenus";
import SectionRating from "../components/Sections/SectionRating";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <SectionHome />
      <SectionAbout />
      <SectionRating />
      <SectionMenus />
      <Sidebar />
    </main>
  );
};

export default HomePage;
