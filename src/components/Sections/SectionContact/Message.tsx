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
        className="focus:ring-coffe/50 w-full rounded-2xl border-0 bg-white p-3 text-sm shadow-lg ring-slate-100 outline-0 transition-all duration-500 focus:ring-3"
        cols={7}
        rows={7}
      ></textarea>
      <button className="mt-3 rounded-sm bg-[#B17457] px-4 py-2 text-sm font-semibold text-white">
        Kirim
      </button>
    </label>
  );
};

export default Message;
