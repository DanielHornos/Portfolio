const enTranslations = {
    translation: {
        menu: {
            home: 'Home',
            portfolio: 'Portfolio',
            skills: 'Skills',
            experience: 'Experience',
            contact: 'Contact'
        },
        intro: {
            welcome: "Hi there, I'm",
            softwareEngineer: 'Senior Software Engineer',
        },
        portfolio: {
            professionalProjects: "Professional projects",
            personalProjects: "Personal projects",
            projects: {
                professional: {
                    first: {
                        title: "Office Addin",
                        description: "The MicroStrategy for Office add-in enables user to use Microsoft Excel to connect to data from MicroStrategy",
                        description2: "The add-in introduces the ability to import, edit and refresh reports, datasets and dossiers from MicroStrategy into Microsoft Excel",
                        description3: "It supports all Windows and Mac versions of Office and Office 365 Online for all major browsers including Google Chrome, Firefox, Safari and Microsoft Edge",
                        description4: "It was developed using multiple technologies, but mainly JavaScript and React. \n MicroStrategy REST API to fetch information from MicroStrategy and Excel JS API to insert the data into office"
                    },
                    second: {
                        title: "Subscriptions",
                        description: "It is an plugin for MicroStrategy Workstation that enables user to create subscriptions of reports, documents and send periodically an update",
                        description2: "Email subscriptions allows user to create email subscriptions through Distribution Services. User can select one or more documents, reports, or dossiers in a variety of formats, define a schedule and message, and specify settings for the subscription object",
                        description3: "Cache subscription allows a report or document to be run as quickly as possible using the latest available data without query the data warehouse",
                        description4: "Both subscriptions were developed using multiple technologies, but mainly TypeScript, React and Redux. \n MicroStrategy REST API to fetch information from MicroStrategy and create the subscriptions",
                    },
                    third: {
                        title: "Automation",
                        description: "Automation framework for Office add-in and MicroStrategy Subscriptions to increase the effectiveness, efficiency and coverage of both software testing",
                        description2: "Automation framework for Office add-in was developed for all major browsers using JavaScript, WebDriverIO and tools like Allure report",
                        description3: "Automation framework for Workstation subscription plugin was developed using Python, Protractor and Appium",
                    }
                },
                personal: {
                    first: {
                        title: "Web Scrapper",
                        description: "Tool used to get the promotions from multiple flight companies using web scrapping and add this information to my database",
                        description2: "It was developed using JavaScript and XXX and MySQL database",
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
                job: "Technical Support Engineer",
                date: "10/2017 - 01/2019",
            },
        },
        contact: {
            contactMe: "Contact me",
            email: "Email",
            message: 'Message',
            send: 'Send',
            description: 'Interested in working together? \nPlease fill the form below with some info about your project and I will get you back as soon as possible. \nPlease allow a couple of days for me to respond.',
            validInput: {
                thanks: 'Thanks, message was sent correctly',
                replyAsap: "I'll reply ASAP :)"
            },
            invalidEmail: 'Please introduce a valid email',
            invalidMessage: 'Please write some message',
        },
    }
};

export default enTranslations;