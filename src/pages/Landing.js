import React from "react";
import "../assets/css/landing.css";
import Inicio from "../components/Inicio";
// import Lenguajes from "../components/Lenguajes";
// import Proyectos from "../components/Proyectos";
// import SobreMi from "../components/SobreMi";
// import Contacto from "../components/Contacto";
import { useTranslation } from "react-i18next";
import logo from "../assets/img/chrislogo.png";

export default function Landing() {
    const { i18n, t } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <header className="customheader">
                <div className="customnav">
                    <a className="customlink" href="#inicio">{t("inicio")}</a>
                    <a className="customlink" href="#lenguajes">{t("lenguajes")}</a>
                    <a className="customlink" href="#proyectos">{t("proyectos")}</a>

                    <img src={logo} className="logoinicial" alt="Logo" />

                    <a className="customlink" href="#sobre-mi">{t("sobre-mi")}</a>
                    <a className="customlink" href="#contacto">{t("contacto")}</a>

                    {/* Selector de idioma reemplazando la segunda imagen */}
                    <div className="lang-switcher">
                        <button
                            className="lang-btn"
                            onClick={() => changeLanguage(i18n.language === "es" ? "en" : "es")}
                        >
                            {i18n.language === "es" ? t("en 🇺🇸") : t("es 🇪🇦")}
                        </button>
                    </div>
                </div>
            </header>

            <main className="custommain">
                <Inicio />
                {/* <Lenguajes /> */}
                {/* <Proyectos /> */}
                {/* <SobreMi /> */}
                {/* <Contacto /> */}
            </main>
        </>
    );
}
