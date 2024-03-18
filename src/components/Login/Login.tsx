import Form from "react-bootstrap/Form";
import Button from "../UI/Button";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={`${styles["form-area"]}`}>
      <Form className={`${styles["login-form"]}`}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button
          children="Sign In"
          className={`${styles["login-button"]}`}
        ></Button>
      </Form>
    </div>
  );
};

export default Login;
