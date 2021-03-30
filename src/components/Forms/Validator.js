import React from "react";

const Validator = ({ children, maxLength, required, value, onChange }) => {
  const newChildren = React.cloneElement(children, { value, onChange });

  if (value?.length > maxLength) {
    return <div style={{ border: "1px solid red" }}>{newChildren}</div>;
  }

  if (value !== undefined && !value && required) {
    return <div style={{ border: "1px solid red" }}>{newChildren}</div>;
  }

  return <div key="valid">{newChildren}</div>;
};

export default Validator;
