import React from "react";
import Form from "react-bootstrap/Form";

const InputField = ({label, type}) => {
  return (
    <div className="depth-6-frame-04">
      <div className="depth-7-frame-04">
        <div className="first-name">{label}</div>
      </div>
      <Form.Control
        placeholder={label}
        className="depth-7-frame-12"
        type={type}
      />
    </div>
  );
};

export default InputField;
