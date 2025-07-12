import React, { useState } from "react";
import styles from "./Login.module.css";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const Login = ({ onSwitch }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setFormData({ email: "", password: "" }); // Clear inputs
    setLoggedIn(false); // Show form again
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.rightPanel}>
        {!loggedIn ? (
          <form
            className={styles.form}
            onSubmit={handleSubmit}
            autoComplete="off"
            key={loggedIn ? "success" : "form"}
          >
            <h2 className={styles.formTitle}>Login</h2>

            <div className={styles.inputBox}>
              <FaEnvelope className={styles.icon} />
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="new-email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputBox}>
              <FaLock className={styles.icon} />
              <input
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Login
            </button>

            <p className={styles.switchText}>
              Don't have an account?{" "}
              <span className={styles.link} onClick={onSwitch}>
                Sign Up
              </span>
            </p>
          </form>
        ) : (
          <div className={styles.successBox}>
            <div className={styles.profileIcon}>
              <FaUser />
            </div>
            <h2 style={{ color: "#a855f7" }}>Login Has Been Successful </h2>
            <p style={{ color: "#a855f7" }}>Welcome back, {formData.email.split("@")[0]}!</p>
            <button
              className={styles.submitBtn}
              onClick={handleLogout}
              style={{ marginTop: "20px" }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
