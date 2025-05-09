interface SubTitleProps {
  text: string;
  customStyle?: string;
}
const SubTitle = (props: SubTitleProps) => {
  const { text, customStyle } = props;
  return (
    <h3
      className={`relative ml-11 text-sm font-light tracking-[0.2rem] uppercase before:absolute before:top-1/2 before:-left-10 before:h-[0.20rem] before:w-8 before:-translate-y-1/2 before:bg-[#B17457] ${customStyle}`}
    >
      {text}
    </h3>
  );
};

export default SubTitle;
