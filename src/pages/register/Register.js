import React, { useState } from "react";
import "./Register.css";

import Form from 'react-bootstrap/Form';
import InputField from "../../components/Inputs/InputField";
import TextArea from "../../components/Inputs/TextArea";
import InputSelect from "../../components/Inputs/InputSelect";

import Button from 'react-bootstrap/Button';

const RegistrationCopy = () => {
  const [privacy, setPrivacy] = useState(
    "I agree to the Terms of Use and Privacy Policy"
  );
  const [accepted, setAccepted] = useState(false);

  const changePrivacy = () => {
    if (!accepted) {
      setPrivacy("Terms and privacy policy accepted.");
    } else {
      setPrivacy("I agree to the Terms of Use and Privacy Policy");
    }

    setAccepted(!accepted);
  };

  // const renderInputField = (label, type) => {
  //   return (
  //     <div className="depth-6-frame-04">
  //       <div className="depth-7-frame-04">
  //         <div className="first-name">{label}</div>
  //       </div>
  //       <Form.Control placeholder={label} className="depth-7-frame-12" type={type}/>
  //     </div>
  //   );
  // };

  // const renerTextArea = (label, type) => {
  //   return (
  //     <div className="depth-6-frame-05">
  //       <div className="depth-7-frame-06">
  //         <div className="address">{label}</div>
  //       </div>
  //       <Form.Control as="textarea" rows={3} placeholder={label} className="depth-7-frame-14" type={type}/>
  //     </div>
  //   );
  // };

  // const renderSelectField = (label, options) => {
  //   return (
  //     <div className="depth-6-frame-06">
  //       <div className="depth-7-frame-07">
  //         <div className="city">{label}</div>
  //       </div>
  //       <Form.Select aria-label="Default select example">
  //         <option>{label}</option>
  //         {/* <option value="1">Jaffna</option> */}
  //         {
  //           options.map((option, index) => {
  //             return <option value="1">{option}</option>
  //           })
  //         }
  //       </Form.Select>
  //     </div>
  //   );
  // };

  return (
    <div className="registration-copy">
      <div className="logic-gate"></div>
      <main className="instance-parent">
        <img className="frame-child" loading="lazy" alt="" src="/line-3.svg" />
        <section className="frame-wrapper">
          <div className="frame-parent">
            <div className="image-1-parent">
              <img
                className="image-1-icon"
                loading="lazy"
                alt=""
                src="home page.jpg"
              />
              <div className="welcome-to-northway-supermart-wrapper">
                <h1 className="welcome-to-northway">
                  Welcome to Northway Supermart
                </h1>
              </div>
            </div>
            <div className="frame-group">
              <div className="frame-container">
                <div className="depth-6-frame-0-parent">
                  <InputField label={"First Name"} type={"text"} />
                  <InputField label={"Last Name"} type={"text"} />
                </div>
              </div>
              <div className="depth-4-frame-31">
                <div className="depth-5-frame-07">
                  <TextArea label = {"Address"} type={"text"}/>
                </div>
              </div>
              <div className="frame-div">
                <div className="depth-6-frame-0-group">
                  <InputSelect label={"City"} options={["Jaffna"]}/>
                  <InputSelect label={"State"} options={["Northern"]}/>
                </div>
              </div>
              <div className="depth-4-frame-5-parent">
                <div className="depth-4-frame-51">
                  <div className="depth-5-frame-08">
                    <InputField label={"Contact Number"} type={"number"} />
                  </div>
                </div>
                <div className="depth-4-frame-61">
                  <div className="depth-5-frame-09">
                    <InputField label={"Email"} type={"email"} />
                  </div>
                </div>
                <div className="depth-4-frame-7">
                  <div className="depth-5-frame-010">
                    <InputField label={"Password"} type={"password"} />
                  </div>
                </div>
                <div className="depth-4-frame-8">
                  <div className="depth-5-frame-011">
                    <InputField label={"Confirm Password"} type={"password"} />
                  </div>
                </div>
              </div>
              <div
                className={
                  accepted
                    ? "depth-5-frame-0-wrapper-accepted"
                    : "depth-5-frame-0-wrapper"
                }
              >
                <div className="depth-5-frame-012">
                  <div className="depth-6-frame-011">
                    <div className="depth-7-frame-013">
                      <div className="i-agree-to" onClick={changePrivacy}>
                        {privacy}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="depth-4-frame-10-parent">
                <div className="depth-4-frame-10">
                  {/* <div className="depth-5-frame-013">
                    <div className="depth-6-frame-012">
                      <div className="depth-7-frame-014">
                        <b className="create-account">Create Account</b>
                      </div>
                    </div>
                  </div> */}
                  <Button variant="outline-success" style = {{width: "100%"}}>Create Account</Button>{' '}
                </div>
                
                <div className="already-registered-log-in-wrapper">
                  <div className="already-registered-log">
                    Already registered? Log in.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RegistrationCopy;
