interface ContainerPropTypes {
  children: React.ReactNode;
}

const Container = (props: ContainerPropTypes) => {
  return (
    <div className="max-w-8xl mx-auto mb-10 mt-10 px-3 sm:px-4 lg:px-8">
      {props.children}
    </div>
  );
};

export default Container;
