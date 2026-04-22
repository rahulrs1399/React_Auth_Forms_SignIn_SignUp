import { useState } from "react";

export default function SignInForm() {
  // console.log(signInFormControls);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiMessage, setApiMessage] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
    if (Object.keys(newError).length > 0) {
      setError(newError);
    } else {
      setError({});
      console.log("Form submitted successfully");
    }

    setLoading(true);
    setApiMessage("");

    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;

      if (isSuccess) {
        setApiMessage("Login successful ✅");

        // Reset form
        setUserData({
          email: "",
          password: "",
        });
      } else {
        setApiMessage("Invalid credentials ❌");
      }

      setLoading(false);
    }, 2000);
  };

  const isFormValid = userData.email && userData.password;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email : </label>
          <input
            type="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            disabled={loading}
          />
          {error?.email && <p style={{ color: "red" }}>{error.email}</p>}
        </div>
        <div>
          <label>Password : </label>
          <input
            type="password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            disabled={loading}
          />
          {error?.password && <p style={{ color: "red" }}>{error.password}</p>}
        </div>

        <button type="submit" disabled={!isFormValid || loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
        {apiMessage && <p>{apiMessage}</p>}
      </form>
    </div>
  );
}
