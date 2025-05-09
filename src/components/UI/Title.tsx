interface TitleProps {
  text: string;
}

const Title = (props: TitleProps) => {
  const { text } = props;
  return (
    <h2 className="font-outfit mb-8 text-5xl font-semibold tracking-wide text-slate-700">
      {text}
    </h2>
  );
};

export default Title;
