import React, { useState } from "react";
import styles from "./Sign.module.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const SignUp = ({ onSwitch }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleLogout = () => {
    setFormData({ username: "", email: "", password: "" }); // clear form
    setSubmitted(false); // go back to form
  };

  return (
    <div className={styles.formContainer}>

      <div className={styles.rightPanel}>
        {!submitted ? (
          <form
            className={styles.form}
            onSubmit={handleSubmit}
            autoComplete="off"
            key={submitted ? "done" : "form"}
          >
            <h2 className={styles.formTitle}>Sign Up</h2>

            <div className={styles.inputBox}>
              <FaUser className={styles.icon} />
              <input
                type="text"
                name="username"
                placeholder="Username"
                autoComplete="new-username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

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
              Register
            </button>

            <p className={styles.switchText}>
              Already have an account?{" "}
              <span className={styles.link} onClick={onSwitch}>
                Login
              </span>
            </p>
          </form>
        ) : (
          <div style={{ textAlign: "center" }}>
            <div className={styles.profileIcon}>
            <FaUser />
  </div>
            <h2 style={{ color: "#a855f7" }}>Sign Up Successful </h2>
            <p style={{ color: "#a855f7" }}>Welcome, {formData.username}!</p>
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

export default SignUp;
