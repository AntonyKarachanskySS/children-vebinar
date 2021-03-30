import React from "react";
import ReactJson from "react-json-view";

import FormsDemo from "./Demo";

const inputElement = <input />;
// console.log(inputElement);
const inputElementWithProps = <input className={"our-input"} />;
// console.log(inputElementWithProps);

const MarkerComponent = ({ color, size, text }) => {
  return (
    <div className="marker">
      <span
        className="marker__icon"
        style={{ width: size, height: size, background: color }}
      ></span>
      <span className="marker__text">{text}</span>
    </div>
  );
};

const AwesomeComponent = () => "test";
const TextContiner = () => "";

console.log(
  <MarkerComponent>
    <AwesomeComponent />
    <span>SomeText</span>
    MORE TEXT
  </MarkerComponent>
);

// console.log(MarkerComponent);

// console.log(
//   <div className="marker">
//     <span
//       className="marker__icon"
//       style={{ width: 10, height: 10, background: "red" }}
//     ></span>
//     <span className="marker__text">{"text"}</span>
//   </div>
// );

const ReconcilerTest = ({ hasError, errorText, text, moreText }) => {
  if (hasError) {
    return (
      <div>
        <span>{text}</span>
        <div>{errorText}</div>
        <TextContiner>{moreText}</TextContiner>
      </div>
    );
  }
  return (
    <div>
      <span>{text}</span>
      <TextContiner>{moreText}</TextContiner>
    </div>
  );
};

const ReconcilerWorks = ({ hasError, errorText, text, moreText }) => {
  return (
    <div>
      <span>{text}</span>
      {hasError && <div>{errorText}</div>}
      <TextContiner>{moreText}</TextContiner>
    </div>
  );
};

const ReconcilerRocks = ({ hasError, errorText, text, moreText }) => {
  if (hasError) {
    return (
      <div>
        <span>{text}</span>
        <div>{errorText}</div>
        <TextContiner key="moreText">{moreText}</TextContiner>
      </div>
    );
  }
  return (
    <div>
      <span>{text}</span>
      <TextContiner key="moreText">{moreText}</TextContiner>
    </div>
  );
};

// console.log(ReconcilerTest);
// console.log(ReconcilerWorks);
// console.log(ReconcilerRocks);

const TestComponents = () => {
  const spanElement = (
    <span>
      {/* <div /> */}
      <div>TEXT</div>
    </span>
  );
  // console.log(spanElement);

  const buttonElement = <button className={"our-button"}>Click me</button>;
  // console.log(buttonElement);

  return (
    <>
      {buttonElement}
      {/* <ReactJson src={buttonElement} /> */}
      {/* <ReactJson src={inputElement} /> */}
      <ReactJson src={inputElementWithProps} />

      <MarkerComponent key={"red-marker"} />
      <MarkerComponent key={"blue-marker"} />
      <MarkerComponent key={"marker-marker"} />
      <FormsDemo />
    </>
  );
};

export default TestComponents;
