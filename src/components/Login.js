import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

function Login() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <Form className="row" noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="col-md-12">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <InputGroup hasValidation>
              <Form.Control
                required
                type="email"
                placeholder="E-mail"
                className="ps-3 pe-5"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid E-mail.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </div>
        <div className="col-md-12">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <InputGroup hasValidation>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                className="ps-3 pe-5"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid Password.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </div>
        <div className="col-md-12 justify-content-center d-flex">
          <Button variant="" type="submit">
            <span>Login</span>
          </Button>
        </div>
      </Form>
    </>
  );
}

export default Login;
