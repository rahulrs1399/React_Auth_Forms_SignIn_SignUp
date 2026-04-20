import { useState } from "react";

export default function SignUpForm() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);

  const validateEmail = (email) => {
    const regex = "/^[^s@]+@[^s@]+.[^s@]+$/";
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newError = {};
    if (!userData.email.trim()) {
      newError.email = "Email is required";
    } else if (!validateEmail(userData.email)) {
      newError.email = "Invalid email";
    }

    if (!userData.password.trim()) {
      newError.password = "Password is required";
    }
    if (!userData.username.trim()) {
      newError.username = "Username is required";
    }

    if (!userData.confirmPassword.trim()) {
      newError.confirmPassword = "Confirm password is required";
    } else if (userData.password !== userData.confirmPassword) {
      newError.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newError).length > 0) {
      setError(newError);
    } else {
      setError({});
      console.log("Form submitted successfully");
    }
  };

  const isLengthValid = userData.password.length >= 8;
  const hasUppercase = /[A-Z]/.test(userData.password);
  const hasLowercase = /[a-z]/.test(userData.password);
  const hasNumber = /[0-9]/.test(userData.password);
  const hasSpecialChar = /[!@#$%^&*]/.test(userData.password);

  const isFormValid =
    userData.email &&
    userData.password &&
    isLengthValid &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecialChar;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username : </label>
          <input
            type="text"
            value={userData.username}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
          />
          {error?.username && <p style={{ color: "red" }}>{error.username}</p>}
        </div>
        <div>
          <label>Email : </label>
          <input
            type="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div>
        <div>
          <label>Password : </label>
          <input
            type="password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </div>
        <div>
          <label>Confirm Password : </label>
          <input
            type="password"
            value={userData.confirmPassword}
            onChange={(e) =>
              setUserData({ ...userData, confirmPassword: e.target.value })
            }
          />
        </div>
        <ul
          style={{
            textDecoration: "none",
          }}
        >
          <li
            style={{
              color: isLengthValid ? "green" : "red",
              listStyle: "none",
            }}
          >
            Min 8 characters
          </li>
          <li
            style={{ color: hasUppercase ? "green" : "red", listStyle: "none" }}
          >
            One uppercase letter
          </li>
          <li
            style={{ color: hasLowercase ? "green" : "red", listStyle: "none" }}
          >
            One lowercase letter
          </li>
          <li
            style={{
              color: hasSpecialChar ? "green" : "red",
              listStyle: "none",
            }}
          >
            One special character letter
          </li>
          <li style={{ color: hasNumber ? "green" : "red", listStyle: "none" }}>
            One number
          </li>
        </ul>

        {error?.email && <p style={{ color: "red" }}>{error.email}</p>}
        {error?.password && <p style={{ color: "red" }}>{error.password}</p>}
        {error?.confirmPassword && (
          <p style={{ color: "red" }}>{error.confirmPassword}</p>
        )}
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </div>
  );
}
