import "./Register.css";
import React, { useState } from 'react';


const RegistrationCopy = () => {
    const [privacy, setPrivacy] = useState("I agree to the Terms of Use and Privacy Policy")
    const [accepted, setAccepted] = useState(false)

    const changePrivacy = () => {
        if (!accepted) {
            setPrivacy("Terms and privacy policy accepted.")
        } else {
            setPrivacy("I agree to the Terms of Use and Privacy Policy")
        }

        setAccepted(!accepted)
    }

  return (
    <div className="registration-copy">
      <div className="logic-gate">
      </div>
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
                  <div className="depth-6-frame-04">
                    <div className="depth-7-frame-04">
                      <div className="first-name">First Name</div>
                    </div>
                    <div className="depth-7-frame-12">
                      <div className="depth-8-frame-02">
                        <div className="depth-9-frame-02">
                          <div className="depth-10-frame-02">
                            <div className="first-name1">First Name</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="depth-6-frame-1">
                    <div className="depth-7-frame-05">
                      <div className="last-name">Last Name</div>
                    </div>
                    <div className="depth-7-frame-13">
                      <div className="depth-8-frame-03">
                        <div className="depth-9-frame-03">
                          <div className="depth-10-frame-03">
                            <div className="last-name1">Last Name</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="depth-4-frame-31">
                <div className="depth-5-frame-07">
                  <div className="depth-6-frame-05">
                    <div className="depth-7-frame-06">
                      <div className="address">Address</div>
                    </div>
                    <div className="depth-7-frame-14">
                      <div className="depth-8-frame-04">
                        <div className="depth-9-frame-04">
                          <div className="depth-10-frame-04">
                            <div className="address1">Address</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-div">
                <div className="depth-6-frame-0-group">
                  <div className="depth-6-frame-06">
                    <div className="depth-7-frame-07">
                      <div className="city">City</div>
                    </div>
                    <div className="depth-7-frame-15">
                      <div className="depth-8-frame-05">
                        <div className="depth-9-frame-05">
                          <div className="depth-10-frame-05">
                            <div className="city1">City</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="depth-6-frame-11">
                    <div className="depth-7-frame-08">
                      <div className="state">State</div>
                    </div>
                    <div className="depth-7-frame-16">
                      <div className="depth-8-frame-06">
                        <div className="depth-9-frame-06">
                          <div className="depth-10-frame-06">
                            <div className="state1">State</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="depth-4-frame-5-parent">
                <div className="depth-4-frame-51">
                  <div className="depth-5-frame-08">
                    <div className="depth-6-frame-07">
                      <div className="depth-7-frame-09">
                        <div className="contact-number">Contact Number</div>
                      </div>
                      <div className="depth-7-frame-17">
                        <div className="depth-8-frame-07">
                          <div className="depth-9-frame-07">
                            <div className="depth-10-frame-07">
                              <div className="contact-number1">
                                Contact Number
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="depth-4-frame-61">
                  <div className="depth-5-frame-09">
                    <div className="depth-6-frame-08">
                      <div className="depth-7-frame-010">
                        <div className="email1">Email</div>
                      </div>
                      <div className="depth-7-frame-18">
                        <div className="depth-8-frame-08">
                          <div className="depth-9-frame-08">
                            <div className="depth-10-frame-08">
                              <div className="email2">Email</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="depth-4-frame-7">
                  <div className="depth-5-frame-010">
                    <div className="depth-6-frame-09">
                      <div className="depth-7-frame-011">
                        <div className="password1">Password</div>
                      </div>
                      <div className="depth-7-frame-19">
                        <div className="depth-8-frame-09">
                          <div className="depth-9-frame-09">
                            <div className="depth-10-frame-09">
                              <div className="password2">Password</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="depth-4-frame-8">
                  <div className="depth-5-frame-011">
                    <div className="depth-6-frame-010">
                      <div className="depth-7-frame-012">
                        <div className="confirm-password">Confirm Password</div>
                      </div>
                      <div className="depth-7-frame-110">
                        <div className="depth-8-frame-010">
                          <div className="depth-9-frame-010">
                            <div className="depth-10-frame-010">
                              <div className="confirm-password1">
                                Confirm Password
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className= {accepted ? "depth-5-frame-0-wrapper-accepted" : "depth-5-frame-0-wrapper"}>
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
                  <div className="depth-5-frame-013">
                    <div className="depth-6-frame-012">
                      <div className="depth-7-frame-014">
                        <b className="create-account">Create Account</b>
                      </div>
                    </div>
                  </div>
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
