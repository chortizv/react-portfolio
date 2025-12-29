import "../assets/css/inicio.css";
import { useTranslation } from "react-i18next";

export default function Inicio() {

    const { t } = useTranslation();
    return (
        <section id="inicio">
            <div className="inicio-content">
                <div className="inicio-1">
                    <h3 className="tag">Christian Ortiz Vargas</h3>
                    <h1 className="titulo-inicio">{t("titulo-inicio")}</h1>
                    <h3 className="dedicacion">{t("dedicacion")}</h3>
                    <p className="descripcion-inicio">{t("description")}</p>
                    <div className="inicio-1-botones">
                        <button>MI CV</button>
                        <a>logo1</a>
                        <a>logo2</a>
                        <a>logo3</a>
                    </div>
                </div>
                <div className="inicio-2">
                    <img src="" alt="yo en foto" />
                </div>
            </div>
        </section>
    );
}