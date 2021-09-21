import { useTranslation } from 'react-i18next';

import typescriptIcon from "../../assets/logos/icon-typescript.svg"
import javascriptIcon from "../../assets/logos/icon-javascript.svg"
import css3Icon from "../../assets/logos/icon-css3.svg"
import html5Icon from "../../assets/logos/icon-html-5.svg"
import reactIcon from "../../assets/logos/icon-react.svg"
import sassIcon from "../../assets/logos/icon-sass.svg"
import reduxIcon from "../../assets/logos/icon-redux.svg"

import "./skills.scss"

export default function Skills() {
    const { t } = useTranslation();

    const skills = {
        icons: [
            {
                name: "HTML 5",
                icon: html5Icon,
            },
            {
                name: "CSS 3",
                icon: css3Icon,
            },
            {
                name: "TypeScript",
                icon: typescriptIcon,
            },
            {
                name: "JavaScript",
                icon: javascriptIcon,
            },
            {
                name: "React",
                icon: reactIcon,
            },
            {
                name: "Sass",
                icon: sassIcon,
            },
            {
                name: "Redux",
                icon: reduxIcon,
            },
        ]
    };
    var skillsList = skills.icons.map(function (skills, i) {
        return (
            <div className="skill-tile">
                <img src={skills.icon} alt="" className="skill-logo" />
                {skills.name}
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
