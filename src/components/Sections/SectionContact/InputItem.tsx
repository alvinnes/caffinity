import { ReactNode } from "react";

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
      <span className="mb-2.5 flex items-center gap-2 text-slate-700">
        {icon}
        {label}
      </span>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="focus:ring-coffe/50 w-full rounded-2xl border-0 bg-white p-3 text-sm shadow-lg ring-slate-100 outline-0 transition-all duration-500 focus:ring-3"
      />
    </label>
  );
};

export default InputItem;
