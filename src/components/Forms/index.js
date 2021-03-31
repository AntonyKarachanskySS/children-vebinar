import React, { useState } from "react";

import { StringInput, CheckboxInput } from "./Inputs";
import Validator from "./Validator";

import "./index.css";

const Forms = ({ values, onChange, children }) => {
  console.log(values);

  return React.Children.map(children, child => {
    const name =
      child.type === Validator
        ? child.props.children.props.name
        : child.props.name;

    const value = values?.[name];
    const handleChange = newValue => onChange({ ...values, [name]: newValue });

    return React.cloneElement(child, { value, onChange: handleChange });
  });
};

// if we want to control form from outside
// or use it as standalone control
// this pattern will allow such behaviour
// like if we are getting user data with async method
const FormsWithState = ({ defaultValues = {}, values, onChange, ...rest }) => {
  // we create local state
  // but we will not really use it, if "values" aren't passed to props
  const [localValues, setLocalValues] = useState(defaultValues ?? {});
  // we wrap "onChange" prop
  // so we update local state and send values with "onChange"
  // as the same time
  const handleChange = newValues => {
    setLocalValues(newValues);
    onChange?.(newValues)
  }

  // we use values if they are set
  // if nobody specified values - we use inner state
  return <Forms {...rest} values={values ?? localValues} onChange={handleChange} />
}

FormsWithState.StringInput = StringInput;
FormsWithState.CheckboxInput = CheckboxInput;
FormsWithState.Validator = Validator;

export default FormsWithState;
