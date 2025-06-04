import { Mailbox } from "@phosphor-icons/react";

const Message = () => {
  return (
    <label className="w-full sm:w-10/12">
      <span className="mb-2.5 flex items-center gap-2 text-slate-700">
        <Mailbox size={25} />
        Pesan
      </span>
      <textarea
        name="message"
        id="message"
        placeholder="masukkan pesan disini.."
        className="w-full rounded-sm border-0 bg-white p-3 text-sm shadow-[6px_5px_0_black] outline-0 transition-all duration-300 focus:translate-y-1 focus:shadow-[2px_2px_0_black]"
        cols={7}
        rows={7}
      ></textarea>
    </label>
  );
};

export default Message;
