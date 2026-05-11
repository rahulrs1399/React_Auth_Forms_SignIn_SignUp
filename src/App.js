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

  return (
    <div className="app-container">
      <div className="auth-card">
        <h1 className="title">Welcome Back 👋</h1>
        <p className="subtitle">
          Practice authentication flow with React forms
        </p>

        <div className="toggle-container">
          <button
            className={`toggle-btn ${active === "signin" ? "active" : ""}`}
            onClick={() => setActive("signin")}
          >
            Sign In
          </button>

          <button
            className={`toggle-btn ${active === "signup" ? "active" : ""}`}
            onClick={() => setActive("signup")}
          >
            Sign Up
          </button>
        </div>

        <div className="form-wrapper">
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
      </div>
    </div>
  );
}
