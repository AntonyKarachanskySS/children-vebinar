import React from "react";

import Form from "./Forms";

// const ThisValidator = props => {
//     // console.log(props);
//     return <Form.Validator {...props} />
// }

const Demo = () => {
  return (
    <div
      className={"forms-container"}
      style={{ display: "flex", flexDirection: "column", width: 500 }}
    >
      <Form
        // validator={ThisValidator}
        onChange={val => console.log(val)}
      >
        <Form.Validator required maxLength={20}>
          <Form.CommonInput name={"location"} label={"Location"} />
        </Form.Validator>
        <Form.Validator maxLength={20}>
          <Form.CommonInput name={"phone"} label={"Phone"} />
        </Form.Validator>
        <Form.YesNoInput name={"alive"} label={"Alive"} />
      </Form>
    </div>
  );
};

export default Demo;
