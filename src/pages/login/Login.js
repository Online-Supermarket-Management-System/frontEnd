import { useState } from 'react';
import "./Login.css";

import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const renderInputField = (label, type, onChange, value) => {
    return (
      <div className="depth-6-frame-01">
        <div className="depth-7-frame-01">
          <div className="email">Email</div>
        </div>
        <Form.Control
          placeholder={label}
          className="depth-7-frame-12"
          type={type}
          required
          onChange={onChange}
          value={value}
        />
      </div>
    );
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <div className="login">
      <main className="depth-0-frame-0">
        <section className="depth-1-frame-0">
          <div className="depth-2-frame-1">
            <form className="depth-3-frame-0">
              <div className="depth-4-frame-0">
                <div className="depth-5-frame-0">
                  <div className="depth-6-frame-0">
                    <img
                      className="depth-7-frame-0"
                      loading="lazy"
                      alt=""
                      src="home page.jpg"
                    />
                  </div>
                </div>
              </div>
              <div className="depth-4-frame-1">
                <div className="depth-5-frame-01">
                  <h1 className="welcome-back">Welcome back!</h1>
                </div>
              </div>
              <div className="depth-4-frame-2">
                <div className="depth-5-frame-02">
                  {renderInputField("Email", "email", handleEmailChange, email)}
                </div>
              </div>
              <div className="depth-4-frame-3">
                <div className="depth-5-frame-03">
                {renderInputField("Password", "password", handlePasswordChange, password)}
                </div>
              </div>
              <div className="depth-4-frame-4">
                <div className="depth-5-frame-04">
                  <div className="forgot-password">Forgot Password?</div>
                </div>
              </div>
              <div className="depth-4-frame-5">
                {/* <div className="depth-5-frame-05">
                  <div className="depth-6-frame-03">
                    <div className="depth-7-frame-03">
                      <b className="log-in">Log in</b>
                    </div>
                  </div>
                </div> */}
                <Button variant="outline-success" style = {{width: "100%"}} onClick={handleSubmit}>
                  Log in
                </Button>{' '}
              </div>
              <div className="depth-4-frame-6">
                <div className="depth-5-frame-06">
                  <div className="new-customer-register">
                    New Customer? Register
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
    </Form>
  );
};

export default Login;
