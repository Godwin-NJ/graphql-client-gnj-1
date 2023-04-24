import React from "react";
type childrenProp = {
  children: React.ReactNode;
};

const Layout = ({ children }: childrenProp) => {
  return <div>{children}</div>;
};

export default Layout;
