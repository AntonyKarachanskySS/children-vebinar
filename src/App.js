import React, { useState } from "react";

import Forms from "./components/Forms";

import "./App.css";

const validateCity = async (city) => {
  await new Promise(resolve => setTimeout(resolve, 2000));

  return !!Math.round(Math.random())
}

const App = () => {
  return (
    <Forms>
      <Forms.Validator maxLength={10}>
        <Forms.StringInput label="Name" name="name" />
      </Forms.Validator>
      <Forms.Validator async validate={validateCity}>
        <Forms.StringInput label="City" name="city" />
      </Forms.Validator>
      <Forms.CheckboxInput label="Alive" name="alive" />
    </Forms>
  );
};

export default App;
