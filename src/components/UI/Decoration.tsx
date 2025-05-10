interface Decoration {
  position: string;
  size?: string;
  rotate?: string;
  img: string;
}

const Decoration = (props: Decoration) => {
  const { position, size, rotate, img } = props;
  return (
    <img
      src={img}
      alt=""
      className={`absolute ${position} ${size} ${rotate}`}
    />
  );
};

export default Decoration;
