interface SubTitleProps {
  text: string;
  customStyle?: string;
}
const SubTitle = (props: SubTitleProps) => {
  const { text, customStyle } = props;
  return (
    <h3
      className={`relative ml-10  tracking-[0.2rem] uppercase before:absolute before:top-1/2 before:-left-10 before:h-1 before:w-8 before:-translate-y-1/2 before:rounded-full before:bg-[#B17457] sm:ml-2 ${customStyle}`}
    >
      {text}
    </h3>
  );
};

export default SubTitle;
