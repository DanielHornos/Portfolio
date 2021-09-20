import { useTranslation } from 'react-i18next';

import enFlag from "../../assets/en-flag.png"
import esFlag from "../../assets/es-flag.png"
import plFlag from "../../assets/pl-flag.png"

import "./topbar.scss"


export default function Topbar({ menuOpen, setMenuOpen }) {
    const { i18n } = useTranslation();

    const languages = {
        en: { flag: enFlag },
        es: { flag: esFlag },
        pl: { flag: plFlag }
    };

    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        Daniel Hornos
                    </a>
                    <div>
                        {Object.keys(languages).map((language) => (
                            <div className="flagItem" style={{ opacity: i18n.language === language ? '100%' : '50%' }}>
                                <img src={languages[language].flag} alt="" onClick={() => i18n.changeLanguage(language)} />
                            </div>
                        ))}
                    </div>

                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}