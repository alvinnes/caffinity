import ContentFormContact from "./ContentFormContact";
import ContentLocation from "./ContentLocation";

const SectionContact = () => {
  return (
    <section
      id="contact"
      className="flex w-full flex-col bg-coffe/50 items-center justify-center py-20 sm:flex-row sm:items-start"
    >
      <ContentLocation />
      <ContentFormContact />
    </section>
  );
};

export default SectionContact;
