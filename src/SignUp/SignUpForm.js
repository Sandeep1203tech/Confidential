// import React, { useEffect } from "react";
import React, { useEffect, useState } from "react";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import PasswordStr from "./PasswordStr";
import "./Signup.css";
import Home from "../Home/Home";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({
  history,
  onSubmit,
  onChange,
  errors,
  user,
  score,
  btnTxt,
  type,
  pwMask,
  onPwChange,
}) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("isAuthenticated", true);
      navigate("/");
    });
  };

  return (
    <div className="loginBox">
      <h1>Sign Up</h1>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
      <form onSubmit={onSubmit}>
        <TextField
          name="username"
          floatingLabelText="Username"
          value={user.username}
          onChange={onChange}
          errorText={errors.username}
        />
        <TextField
          name="email"
          floatingLabelText="Email"
          value={user.email}
          onChange={onChange}
          errorText={errors.email}
        />
        <TextField
          type={type}
          name="password"
          floatingLabelText="Password"
          value={user.password}
          onChange={onPwChange}
          errorText={errors.password}
        />

        <div className="pwStrRow">
          {score >= 1 && (
            <div>
              <PasswordStr score={score} />
              <FlatButton
                className="pwShowHideBtn"
                label={btnTxt}
                onClick={pwMask}
                style={{
                  position: "relative",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            </div>
          )}
        </div>
        <TextField
          type={type}
          name="pwconfirm"
          floatingLabelText="Confirm password"
          value={user.pwconfirm}
          onChange={onChange}
          errorText={errors.pwconfirm}
        />
        <br />

        <RaisedButton
          className="signUpSubmit"
          primary={true}
          type="submit"
          label="submit"
          //   style= "background-color:#13395"
        />
      </form>
      <p>
        Aleady have an account? <br />
        <a href="/">Log in here</a>
      </p>{" "}
      <button className="Googlebutton" onClick={handleClick}>
        SignIn with Google
      </button>
    </div>
  );
};

export default SignUpForm;
