import "./topbar.scss"
import { useTranslation } from 'react-i18next';


export default function Topbar({ menuOpen, setMenuOpen }) {
    const { i18n } = useTranslation();

    const languages = {
        en: { nativeName: 'English' },
        es: { nativeName: 'Español' }
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
                            <button key={language} style={{ fontWeight: i18n.language === language ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(language)}>
                                {languages[language].nativeName}
                            </button>
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