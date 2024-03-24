import React from "react";
import Form from "react-bootstrap/Form";

const TextArea = ({label, type, value, onChange}) => {
  return (
    <div className="depth-6-frame-05">
      <div className="depth-7-frame-06">
        <div className="address">{label}</div>
      </div>
      <Form.Control
        as="textarea"
        rows={3}
        placeholder={label}
        className="depth-7-frame-14"
        type={type}
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
