import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/img/chrislogo.png";

export default function NotFound() {

    const { t } = useTranslation();
    return (
        <div
            style={{
                backgroundColor: "#112134",
                color: "#fff",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "0 20px",
            }}
        >
            {/* Logo: cambia el src por tu imagen */}
            <img
                src={logo}
                alt="Logo"
                style={{ width: "150px", marginBottom: "40px" }}
            />

            <h1 style={{ fontSize: "6rem", margin: 0 }}>404</h1>
            <h2 style={{ fontSize: "2rem", margin: "20px 0" }}>
                Página no encontrada
            </h2>
            <p style={{ fontSize: "1.2rem", maxWidth: "400px" }}>
                Lo sentimos, la página que buscas no existe o ha sido movida.
            </p>
            <a
                className="link-404"
                href="/"
            // onMouseEnter={e => (e.target.style.backgroundColor = "#e0e0e0")}
            // onMouseLeave={e => (e.target.style.backgroundColor = "#fff")}
            >
                Volver al inicio
            </a>
        </div>
    );
}