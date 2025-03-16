import React, { useState } from "react";
import { register } from "../services/AuthService";

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await register({ email, password });
            alert("Registrierung erfolgreich!");
        } catch (err) {
            setError(err.response?.data || "Fehler bei der Registrierung");
        }
    };

    return (
        <div>
            <h2>Registrieren</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleRegister}>
                <input type="email" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Passwort" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Registrieren</button>
            </form>
        </div>
    );
};

export default RegisterPage;
