import React, { useState } from "react";

const RegisterUser = () => {
    const [userType, setUserType] = useState("FAHRER"); // Default: Fahrer
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [extraField, setExtraField] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = { email, password };
        if (userType === "FAHRER") userData.fahrzeug = extraField;
        if (userType === "FIRMA") userData.firmenName = extraField;

        const url =
            userType === "FAHRER"
                ? "http://localhost:8080/api/users/fahrer"
                : "http://localhost:8080/api/users/firma";

        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });

        if (response.ok) {
            alert("Erfolgreich registriert!");
        } else {
            alert("Fehler bei der Registrierung!");
        }
    };

    return (
        <div>
            <h2>Registrierung</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label>Passwort:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <label>User-Typ:</label>
                <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                    <option value="FAHRER">Fahrer</option>
                    <option value="FIRMA">Firma</option>
                </select>

                {userType === "FAHRER" && (
                    <>
                        <label>Fahrzeug:</label>
                        <input type="text" value={extraField} onChange={(e) => setExtraField(e.target.value)} required />
                    </>
                )}

                {userType === "FIRMA" && (
                    <>
                        <label>Firmenname:</label>
                        <input type="text" value={extraField} onChange={(e) => setExtraField(e.target.value)} required />
                    </>
                )}

                <button type="submit">Registrieren</button>
            </form>
        </div>
    );
};

export default RegisterUser;
