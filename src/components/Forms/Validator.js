import React, { useEffect, useState } from "react";

const Status = ({ loading, valid, value }) => {
  if (!value) return null;
  if (loading) return '...';

  return valid ? "Y" : "N"
}

// example of server/async validation
const AsyncValidator = ({ children, validate, value, debounce = 200 }) => {
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const perform = async () => {
      setLoading(true);

      const valid = await validate?.(value);
      console.log(valid);
      setValid(valid);

      setLoading(false);
    }

    // no need to use actual debounce
    // this way we only validate after 200ms of wait
    const timeout = setTimeout(perform, debounce);

    return () => {
      clearTimeout(timeout)
    }
  }, [value])

  return <div style={{ display: 'flex', alignItems: "flex-end" }}>
    {children}
    <span>
      <Status value={value} loading={loading} valid={valid} />
    </span>
  </div>
}

const Validator = ({ async, validate, children, maxLength, required, value, onChange }) => {
  const newChildren = React.cloneElement(children, { value, onChange });

  if (async) {
    return <AsyncValidator value={value} validate={validate}>{newChildren}</AsyncValidator>
  }

  if (value?.length > maxLength) {
    return <div style={{ border: "1px solid red" }}>{newChildren}</div>;
  }

  if (value !== undefined && !value && required) {
    return <div style={{ border: "1px solid red" }}>{newChildren}</div>;
  }

  return <div key="valid">{newChildren}</div>;
};

export default Validator;
