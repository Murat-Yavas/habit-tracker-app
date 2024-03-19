import Form from "react-bootstrap/Form";
import styles from "./Login.module.css";
import { useAppDispatch } from "../../redux/hooks";
import { userActions } from "../../redux/user-slice";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [isInvalid, setIsInvalid] = useState(true);
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    {
      isInvalid ? "" : dispatch(userActions.login());
    }
  };

  const checkEmail = () => {
    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    if (!emailRegex.test(email)) {
      setEmailErrorMessage("Error! you have entered invalid email.");
      setIsInvalid(true);
    } else {
      setEmailErrorMessage("");
      setIsInvalid(false);
    }
  };

  const checkPassword = () => {
    let passwordRegex = /^.{6,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordErrorMessage(
        "Your password must contain at least 6 characters"
      );
      setIsInvalid(true);
    } else {
      setPasswordErrorMessage("");
      setIsInvalid(false);
    }
  };

  return (
    <div className={`${styles["form-area"]}`}>
      <Form className={`${styles["login-form"]}`}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter email"
            onBlur={checkEmail}
          />
          {email !== "" && <div> {emailErrorMessage} </div>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            onBlur={checkPassword}
          />
          {password !== "" && <div> {passwordErrorMessage} </div>}
        </Form.Group>

        <NavLink
          to={isInvalid ? "/login" : "/"}
          onClick={handleLogin}
          children="Sign In"
          className={`${styles["login-button"]}`}
        ></NavLink>
      </Form>
    </div>
  );
};

export default Login;
