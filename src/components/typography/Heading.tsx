interface HeadingPropTypes {
  text: string;
}

const Heading = (props: HeadingPropTypes) => {
  return (
    <h2
      id="heading"
      className="font-oswald text-zinc px-5 text-center text-4xl font-extrabold sm:text-5xl"
    >
      {props.text}
    </h2>
  );
};

export default Heading;
