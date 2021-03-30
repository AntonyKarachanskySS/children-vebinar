import React, { useCallback, useState } from "react";

import "./index.css";

const Header = ({ children, collapsed, onCollapse }) => (
  <div className={"collapser-header"}>
    <span style={{ cursor: "pointer" }} onClick={onCollapse}>
      {collapsed ? "⯈" : "⯆"}
    </span>
    {children}
  </div>
);

const Content = ({ children }) => (
  <div className={"collapser-content"}>{children}</div>
);

const Collapser = ({ defaultCollapsed, children }) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed ?? true);

  const handleCollapse = useCallback(() => setCollapsed(c => !c), []);

  const thisChildren = React.Children.toArray(children);

  return (
    <div style={{ paddingTop: 10, paddingBottom: 10 }}>
      {thisChildren.map(child => {
        if (child.type === Header)
          return React.cloneElement(child, {
            collapsed,
            onCollapse: handleCollapse,
          });
        if (!collapsed && child.type === Content) return child;

        return null;
      })}
    </div>
  );
};

Collapser.Header = Header;
Collapser.Content = Content;

export default Collapser;
