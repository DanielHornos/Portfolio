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
                        webDeveloper: 'Web Developer',
                    },
                    contact: {
                        contactMe: "Contact me",
                        email: "Email",
                        message: 'Message',
                        send: 'Send',
                        validInput: {
                            thanks: 'Thanks, message was sent correctly',
                            replyAsap: "I'll reply ASAP :)"
                        },
                        invalidEmail: 'Please introduce a valid email',
                        invalidMessage: 'Please write some message',
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
                        webDeveloper: 'Desarrollador Web',
                    },
                    contact: {
                        contactMe: "Contáctame",
                        email: "Correo electrónico",
                        message: 'Mensaje',
                        send: 'Enviar',
                        validInput: {
                            thanks: 'Gracias, el mensaje se ha enviado correctamente',
                            replyAsap: "Le contestaré lo antes posible :)"
                        },
                        invalidEmail: 'Introduzca un correo electrónico válido',
                        invalidMessage: 'Por favor escribe algún mensaje',
                    },
                }
            }
        }
    });

export default i18n;