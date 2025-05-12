import Title from "../../UI/Title";

const ContentLocation = () => {
  return (
    <div className="mb-15 flex h-110 w-full flex-col items-center p-4 sm:mb-0 sm:h-135 sm:w-xl">
      <Title text="Kunjungi Sekarang!" customStyle="text-[#B17457] text-nowrap" />
      <div className="size-full mt-15 bg-white p-1 shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15852.461744206577!2d110.71160615541989!3d-6.632582699999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e71216b0472c6c3%3A0x1afc6d45743f1fa5!2sAngkringan%20KEMBAR!5e0!3m2!1sid!2sid!4v1746796384382!5m2!1sid!2sid"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="size-full"
        ></iframe>
      </div>
    </div>
  );
};

export default ContentLocation;
