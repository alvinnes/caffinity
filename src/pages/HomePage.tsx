import Navbar from "../components/Navbar";
import SectionAbout from "../components/Sections/SectionAbout";
import SectionHome from "../components/Sections/SectionHome";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <SectionHome />
      <SectionAbout />
      <Sidebar />
    </main>
  );
};

export default HomePage;
