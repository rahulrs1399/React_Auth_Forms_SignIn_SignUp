import { useState } from "react";
import SignInForm from "./component/signInform";
import SignUpForm from "./component/signUpform";
import {
  initialSignInFormData,
  signInFormControls,
  signUpFormControls,
  initialSignUpFormData,
} from "./data";
import "./styles.css";

export default function App() {
  const [active, setActive] = useState("signin");

  const handleClick = () => {
    active === "signin" ? setActive("signin") : setActive("signup");
  };
  return (
    <div className="App">
      <h1>Welcome to My form!</h1>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <div
          onClick={() => setActive("signin")}
          style={{
            paddingRight: "30px",
            cursor: "pointer",
            border: active === "signin" ? "2px solid blue" : "2px solid black",
            background: active === "signin" ? "#ADD8E6" : "none",
          }}
        >
          Sign In
        </div>
        <div
          onClick={() => setActive("signup")}
          style={{
            paddingLeft: "30px",
            cursor: "pointer",
            border: active === "signup" ? "2px solid blue" : "2px solid black",
            background: active === "signup" ? "#ADD8E6" : "none",
          }}
        >
          Sign Up
        </div>
      </div>
      {active === "signin" ? (
        <SignInForm
          signInFormControls={signInFormControls}
          initialSignInFormData={initialSignInFormData}
        />
      ) : (
        <SignUpForm
          signUpFormControls={signUpFormControls}
          initialSignUpFormData={initialSignUpFormData}
        />
      )}
    </div>
  );
}
