import React, { useState } from "react";

import { StringInput, CheckboxInput } from "./Inputs";
import Validator from "./Validator";

import "./index.css";

const Forms = ({ children }) => {
  const [values, setValues] = useState({});

  console.log(values);

  return React.Children.map(children, child => {
    const name =
      child.type === Validator
        ? child.props.children.props.name
        : child.props.name;

    const value = values?.[name];
    const handleChange = newValue => setValues({ ...values, [name]: newValue });

    return React.cloneElement(child, { value, onChange: handleChange });
  });
};

Forms.StringInput = StringInput;
Forms.CheckboxInput = CheckboxInput;
Forms.Validator = Validator;

export default Forms;
