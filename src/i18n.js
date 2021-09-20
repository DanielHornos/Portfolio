import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    menu: {
                        home: 'Home',
                        portfolio: 'Portfolio',
                        works: 'Works',
                        contact: 'Contact'
                    },
                    intro: {
                        welcome: "Hi there, I'm",
                        webDeveloper: 'Web Developer: ',
                    },
                }
            },
            es: {
                translation: {
                    menu: {
                        home: 'Inicio',
                        portfolio: 'Catalogo',
                        works: 'Trabajos',
                        contact: 'Contacto'
                    },
                    intro: {
                        welcome: "Hola ¿Qué tal?, soy",
                        webDeveloper: 'Desarrollador Web: ',
                    },
                }
            }
        }
    });

export default i18n;