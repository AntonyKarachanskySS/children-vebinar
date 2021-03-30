import React from "react";

export const StringInput = ({ label, value = "", onChange }) => {
  return (
    <div className="form-input-container">
      {label && <span>{label}</span>}
      <input value={value} onChange={e => onChange?.(e.target.value)} />
    </div>
  );
};

export const CheckboxInput = ({ label, value = "", onChange }) => {
  return (
    <div className="form-input-container">
      {label && <span>{label}</span>}
      <input
        type="checkbox"
        checked={value}
        onChange={e => onChange?.(e.target.checked)}
      />
    </div>
  );
};
