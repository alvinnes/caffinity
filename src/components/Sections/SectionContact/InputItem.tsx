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
        className="w-full border-0 bg-white p-3 text-sm outline-0 transition-all duration-300 focus:ring-3 focus:ring-amber-100/40"
      />
    </label>
  );
};

export default InputItem;
