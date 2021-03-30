import React, { useState } from "react";

import PropTypes from "prop-types";

const CommonValidator = ({ value, maxLength, required, children }) => {
  if (!value && required) {
    return <div style={{ border: "1px solid red" }}>{children}</div>;
  }
  if (value && maxLength && value.length > maxLength) {
    return <div style={{ border: "1px solid red" }}>{children}</div>;
  }
  return <div>{children}</div>;
};

const CommonInput = ({ value = "", onChange, label }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {label && <span>{label}</span>}
      <input
        key={"input"}
        value={value}
        onChange={e => onChange(e.target.value, e)}
      ></input>
    </div>
  );
};

const YesNoInput = ({ value = "", onChange, label }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {label && <span>{label}</span>}
      <input
        key={"input"}
        type={"checkbox"}
        checked={value}
        onChange={e => onChange(e.target.checked, e)}
      ></input>
    </div>
  );
};

const Form = ({ validator = CommonValidator, values, onChange, children }) => {
  // console.log(children);
  return (
    <>
      {React.Children.toArray(children).map(child => {
        const name =
          child.type === validator
            ? child.props.children.props.name
            : child.props.name;

        const value = values?.[name];
        const handleChange = (val, ...rest) => {
          const newValues = { ...(values || {}), [name]: val };
          //   if (!val) {
          //     delete newValues[name];
          //   }
          onChange?.(newValues, ...rest);
        };

        if (child.type === validator) {
          const newChild = React.cloneElement(child.props.children, {
            value,
            onChange: handleChange,
          });

          return React.cloneElement(child, { children: newChild, value });
        }

        return React.cloneElement(child, { value, onChange: handleChange });
      })}
    </>
  );
};

const FormWithState = ({ values, defaultValues = {}, onChange, ...rest }) => {
  const [localValues, setLocalValues] = useState(defaultValues ?? {});
  const handleChange = (vals, ...rest) => {
    setLocalValues(vals);

    onChange?.(vals, ...rest);
  };

  return (
    <Form {...rest} values={values ?? localValues} onChange={handleChange} />
  );
};

FormWithState.CommonInput = CommonInput;
FormWithState.YesNoInput = YesNoInput;

FormWithState.Validator = CommonValidator;

export default FormWithState;

// const FormsDemo = () => {
//   return (
//     <Form>
//       <Form.StringInput name="location" />
//       <Form.ChechboxInput name="signed" />
//       <Form.NumberInput name="age" />
//     </Form>
//   );
// };

// const FormsDemo2 = () => {
//   const [values, setValues] = useState({});

//   return (
//     <Form>
//       <StringInput
//         name="location"
//         value={values?.location}
//         onChange={val =>
//           setValues(oldValues => ({ ...oldValues, location: val }))
//         }
//       />
//       <ChechboxInput
//         name="signed"
//         value={values?.signed}
//         onChange={val =>
//           setValues(oldValues => ({ ...oldValues, signed: val }))
//         }
//       />
//       <NumberInput
//         name="age"
//         value={values?.age}
//         onChange={val => setValues(oldValues => ({ ...oldValues, age: val }))}
//       />
//     </Form>
//   );
// };
