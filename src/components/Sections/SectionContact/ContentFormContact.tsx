import { useState } from "react";
import Title from "../../UI/Title";
import InputItem from "./InputItem";
import Message from "./Message";
import { Envelope, User } from "@phosphor-icons/react";

const ContentFormContact = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <form
      action={"/"}
      method="post"
      className="flex w-11/12 flex-col items-center gap-6 p-4 sm:w-xl"
    >
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
      <button
        onClick={() => setIsClicked(!isClicked)}
        // disabled={isClicked}
        className="w-30 cursor-pointer self-start rounded-sm bg-[#B17457] px-4 py-2 text-sm font-semibold text-white shadow-[4px_4px_0_black] transition-all active:translate-y-1 active:shadow-none sm:ml-11"
      >
        {isClicked ? "Loading..." : "Kirim"}
      </button>
    </form>
  );
};

export default ContentFormContact;
