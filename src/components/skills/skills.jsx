import { useTranslation } from 'react-i18next';

import typescriptIcon from "../../assets/logos/icon-typescript.svg"
import javascriptIcon from "../../assets/logos/icon-javascript.svg"
import css3Icon from "../../assets/logos/icon-css3.svg"
import html5Icon from "../../assets/logos/icon-html-5.svg"
import reactIcon from "../../assets/logos/icon-react.svg"
import sassIcon from "../../assets/logos/icon-sass.svg"
import reduxIcon from "../../assets/logos/icon-redux.svg"
import pupeeteer from "../../assets/logos/icon-puppeeter.svg"
import mysql from "../../assets/logos/icon-mysql.svg"
import protractor from "../../assets/logos/icon-protractor.svg"
import webDriverIO from "../../assets/logos/icon-webdriverio.svg"
import java from "../../assets/logos/icon-java.svg"
import StarRating from "./star-rating"

import "./skills.scss"

export const skillsIcons = {
    icons: [
        {
            name: "JavaScript",
            icon: javascriptIcon,
            rating: 5
        },
        {
            name: "TypeScript",
            icon: typescriptIcon,
            rating: 5
        },
        {
            name: "React",
            icon: reactIcon,
            rating: 5
        },
        {
            name: "Redux",
            icon: reduxIcon,
            rating: 5
        },
        {
            name: "HTML 5",
            icon: html5Icon,
            rating: 4
        },
        {
            name: "CSS 3",
            icon: css3Icon,
            rating: 4
        },
        {
            name: "Sass",
            icon: sassIcon,
            rating: 4
        },
        {
            name: "Java",
            icon: java,
            rating: 2
        },
        {
            name: "Puppeeter",
            icon: pupeeteer,
            rating: 4
        },
        {
            name: "MySQL",
            icon: mysql,
            rating: 4
        },
        {
            name: "Protractor",
            icon: protractor,
            rating: 4
        },
        {
            name: "WebDriverIO",
            icon: webDriverIO,
            rating: 4
        },
    ]
};

export default function Skills() {
    const { t } = useTranslation();

    var skillsList = skillsIcons.icons.map(function (skills, index) {
        return (
            <div key={index} className="skill-tile">
                <img src={skills.icon} alt="" className="skill-logo" />
                {skills.name}
                <StarRating rating={skills.rating} />
            </div>
        );
    });

    return (
        <section className="skills" id="skills">
            <h1>{t("menu.skills")}</h1>
            <div className="skills-container">
                {skillsList}
            </div>
        </section>
    )
}
