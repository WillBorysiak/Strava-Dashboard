interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <div id="layout" className="bg-gradient-to-b from-[#3e4549] to-[#1a1b1c]">
      {props.children}
    </div>
  );
};

export default Layout;
