import React from "react";
import Form from "react-bootstrap/Form";

const InputSelect = ({label, options}) => {
  return (
    <div className="depth-6-frame-06">
      <div className="depth-7-frame-07">
        <div className="city">{label}</div>
      </div>
      <Form.Select aria-label="Default select example">
        <option>{label}</option>
        {options.map((option, index) => {
          return <option value="1" key = {index}>{option}</option>;
        })}
      </Form.Select>
    </div>
  );
};

export default InputSelect;
