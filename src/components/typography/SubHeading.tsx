interface HeadingPropTypes {
  text: string;
}

const SubHeading = (props: HeadingPropTypes) => {
  return (
    <h3
      id="sub-heading"
      className="font-extraboldsm:text-3xl font-oswald px-5 text-center text-2xl"
    >
      {props.text}
    </h3>
  );
};

export default SubHeading;
