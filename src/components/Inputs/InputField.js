import React from "react";
import Form from "react-bootstrap/Form";

const InputField = ({label, type, value, onChange}) => {
  return (
    <div className="depth-6-frame-04">
      <div className="depth-7-frame-04">
        <div className="first-name">{label}</div>
      </div>
      <Form.Control
        placeholder={label}
        className="depth-7-frame-12"
        type={type}
        required
        value = {value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
