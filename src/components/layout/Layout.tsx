import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <div id="layout" className="bg-linear-to-b from-[#3e4549] to-[#1a1b1c]">
      {props.children}
    </div>
  );
};

export default Layout;
