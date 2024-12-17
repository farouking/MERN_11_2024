import React, { useState } from "react";
import "./UserForm.css";

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [errors, setErrors] = useState({}); // For inline error messages

    const validateForm = () => {
        const newErrors = {};

        if (firstName.length <= 2) {
            newErrors.firstName = "First name must be more than 2 characters.";
        }
        if (lastName.length <= 2) {
            newErrors.lastName = "Last name must be more than 2 characters.";
        }
        if (email.length < 8) {
            newErrors.email = "Email must be at least 8 characters long.";
        }
        if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters long.";
        }
        if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // No errors
    };

    const createUser = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const newUser = { firstName, lastName, email, password };
        console.log("User created:", newUser);

        // Reset form and state
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setErrors({});
        setHasBeenSubmitted(true);
    };

    const formMessage = () =>
        hasBeenSubmitted
            ? "Thank you for submitting the form!"
            : "Welcome, please submit the form";

    return (
        <form onSubmit={createUser} className="user-form">
            <h3>{formMessage()}</h3>
            <div className="form-group">
                <label>First Name:</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>
            <div className="form-group">
                <label>Last Name:</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
            <div className="form-group">
                <label>Email Address:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="form-group">
                <label>Confirm Password:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && (
                    <p className="error">{errors.confirmPassword}</p>
                )}
            </div>
            <input type="submit" value="Create User" className="submit-btn" />
        </form>
    );
};

export default UserForm;
