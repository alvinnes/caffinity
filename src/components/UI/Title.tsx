interface TitleProps {
  text: string;
}

const Title = (props: TitleProps) => {
  const { text } = props;
  return (
    <h2 className="font-fair mb-8 text-4xl leading-11 font-semibold tracking-wide text-slate-700 sm:text-5xl sm:leading-14">
      {text}
    </h2>
  );
};

export default Title;
