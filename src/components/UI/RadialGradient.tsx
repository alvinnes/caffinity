type RadialGradientProps = {
  position: string;
  size: string;
};

const RadialGradient = (props: RadialGradientProps) => {
  const { position, size } = props;
  return (
    <div
      className={`absolute ${position} bg-indigo-300/20 blur-[6rem] ${size} rounded-full -z-1`}
    ></div>
  );
};

export default RadialGradient;
