import React, { useState } from "react";
import { login } from "../services/AuthService";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await login({ email, password });
            alert("Login erfolgreich!");
            console.log("Token:", response.data.token);
        } catch (err) {
            setError(err.response?.data || "Fehler beim Login");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Passwort" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
