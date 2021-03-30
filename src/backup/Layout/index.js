import React from "react";

import "./index.css";

const Layout = ({ children }) => {
  return (
    <div
      className={"layout"}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 40,
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
