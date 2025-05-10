import Title from "../../UI/Title";
import InputItem from "./InputItem";
import Message from "./Message";
import { Envelope, User } from "@phosphor-icons/react";

const ContentFormContact = () => {
  return (
    <div className="flex w-11/12 flex-col items-center gap-6 p-4 sm:w-xl">
      <Title text="Hubungi Kami" customStyle="text-slate-700" />
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

export default ContentFormContact;
