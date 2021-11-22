const esTranslations = {
    translation: {
        menu: {
            home: 'Inicio',
            portfolio: 'Catalogo',
            skills: 'Habilidades',
            experience: 'Experiencia',
            contact: 'Contacto'
        },
        intro: {
            welcome: "Hola ¿Qué tal?, soy",
            softwareEngineer: 'Desarrollador de Software Senior',
        },
        portfolio: {
            professionalProjects: "Professional projects",
            personalProjects: "Personal projects",
            projects: {
                professional: {
                    first: {
                        title: "Office Addin",
                        description: "Add-in para Office que permite al usuario utilizar Microsoft Excel para conectar con datos de MicroStrategy",
                        description2: "Este add-in sirve  importar, editar y actualizar informes, conjuntos de datos y dosieres de MicroStrategy a Microsoft Excel.",
                        description3: "Es compatible con todas las versiones de Windows y Mac de Office y Office 365 Online para los principales navegadores, incluidos Google Chrome, Firefox, Safari y Microsoft Edge",
                        description4: "Fue desarrollado utilizando múltiples tecnologías, pero principalmente JavaScript y React. \ n REST API para obtener información de MicroStrategy y API de Excel JS para insertar los datos en Office"
                    },
                    second: {
                        title: "Subcripciones",
                        description: "Es un plugin para MicroStrategy Workstation que permite al usuario crear suscripciones de informes, documentos y enviar periódicamente una actualización",
                        description2: "Las suscripciones por email permiten al usuario crear suscripciones a través de los Servicios de distribución. El usuario puede seleccionar uno o más informes en una variedad de formatos, definir las fechas y mensaje de la suscripción",
                        description3: "Las suscripciónes a la caché permite ejecutar un informe o documento lo más rápido posible utilizando los últimos datos disponibles sin consultar la base de datos.",
                        description4: "Ambas suscripciones se desarrollaron utilizando múltiples tecnologías, pero principalmente TypeScript, React y Redux. \n REST API para obtener información de MicroStrategy y crear las suscripciones",
                    },
                    third: {
                        title: "Automatization",
                        description: "Automatización para plugins de Office y suscripciones de MicroStrategy para aumentar la efectividad, la eficiencia y la cobertura pruebas de ambos softwares",
                        description2: "La automatización para el plugin de Office se desarrolló para los principales navegadores usando JavaScript, WebDriverIO y herramientas como Allure report",
                        description3: "La automatización para el plugin de suscripción de Workstation se desarrolló utilizando Python, Protractor y Appium",
                    }
                },
                personal: {
                    first: {
                        title: "Web Scrapper",
                        description: "Herramienta usada para obtener las promociones de varias compañías de vuelos utilizando el web scrapping y agregando esta información a mi base de datos",
                        description2: "Fue desarrollada usando JavaScript y Puppeeter y usando MySQL como base de datos",
                    },
                }
            }

        },
        experience: {
            first: {
                job: "Senior Software Engineer",
                date: "08/2021 - present",
            },
            second: {
                job: "Software Engineer",
                date: "08/2020 - 08/2021",
            },
            third: {
                job: "Quality Engineer",
                date: "01/2019 - 08/2020",
            },
            fourth: {
                job: "Soporte Técnico Informático",
                date: "10/2017 - 01/2019",
            },
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
};

export default esTranslations;