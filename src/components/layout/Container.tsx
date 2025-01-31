interface ContainerPropTypes {
  children: React.ReactNode;
}

const Container = (props: ContainerPropTypes) => {
  return (
    <div className="max-w-8xl mx-auto mt-10 mb-10 px-3 sm:px-4 lg:px-8">
      {props.children}
    </div>
  );
};

export default Container;
