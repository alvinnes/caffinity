import { Envelope, Mailbox, User } from "@phosphor-icons/react";
import Title from "../UI/Title";
import { ReactNode } from "react";

const SectionContact = () => {
  return (
    <section
      id="contact"
      className="flex w-full flex-col items-center justify-center py-20 sm:flex-row sm:items-start"
    >
      <ContentLocation />
      <ContentFormContact />
    </section>
  );
};

const ContentFormContact = () => {
  return (
    <div className="flex w-11/12 flex-col items-center gap-6 p-4 sm:w-xl">
      <Title text="Hubungi Kami" customStyle="text-[#B17457]" />
      <InputItem
        label="Username"
        id="username"
        placeholder="masukkan namamu disini.."
        icon={<User size={20} />}
        type="text"
      />
      <InputItem
        label="Email"
        id="email"
        placeholder="masukkan emailmu disini.."
        icon={<Envelope size={20} />}
        type="email"
      />
      <Message />
    </div>
  );
};

const Message = () => {
  return (
    <label className="w-full sm:w-10/12">
      <span className="mb-2.5 flex items-center gap-2">
        <Mailbox size={25} />
        Pesan
      </span>
      <textarea
        name="message"
        id="message"
        placeholder="masukkan pesan disini.."
        className="w-full border-0 bg-slate-100 p-3 text-sm outline-0 transition-all duration-300 focus:ring-1 focus:ring-slate-300"
        cols={7}
        rows={7}
      ></textarea>
      <button className="mt-3 rounded-sm bg-[#B17457] px-4 py-2 text-sm font-semibold text-white">
        Kirim
      </button>
    </label>
  );
};

interface InputItem {
  icon: ReactNode;
  label: string;
  type: string;
  id: string;
  placeholder: string;
}

const InputItem = (props: InputItem) => {
  const { icon, label, type, id, placeholder } = props;
  return (
    <label className="w-full sm:w-10/12">
      <span className="mb-2.5 flex items-center gap-2">
        {icon}
        {label}
      </span>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full border-0 bg-slate-100 p-3 text-sm outline-0 transition-all duration-300 focus:ring-1 focus:ring-slate-300"
      />
    </label>
  );
};

const ContentLocation = () => {
  return (
    <div className="flex h-110 mb-15 sm:mb-0 w-full flex-col items-center p-4 sm:h-150 sm:w-xl">
      <Title text="Kunjungi Sekarang!" customStyle="text-[#B17457]" />
      <div className="size-full bg-slate-300 p-1">
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

export default SectionContact;
