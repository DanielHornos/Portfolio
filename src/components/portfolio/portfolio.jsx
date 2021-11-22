import "./portfolio.scss"
import office1 from "../../assets/portfolio/office/office1.png"
import office2 from "../../assets/portfolio/office/office2.png"
import office3 from "../../assets/portfolio/office/office3.png"
import office4 from "../../assets/portfolio/office/office4.png"
import subscription1 from "../../assets/portfolio/subscriptions/subscription1.png"
import subscription2 from "../../assets/portfolio/subscriptions/subscription2.png"
import subscription3 from "../../assets/portfolio/subscriptions/subscription3.png"
import subscription4 from "../../assets/portfolio/subscriptions/subscription4.png"
import scraper1 from "../../assets/portfolio/web-scrapper/scrapper1.png"
import scraper2 from "../../assets/portfolio/web-scrapper/scrapper2.png"
import { useState } from "react";
import PortfolioModal from "./portfolio-modal";
import { useTranslation } from 'react-i18next';

export default function Portfolio() {
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [hoveredProject, setHoveredProject] = useState(null);

    const portfolioProjects = {
        professional: [
            {
                name: t("portfolio.projects.professional.first.title"),
                images: [office1, office2, office3, office4],
                description: [
                    t("portfolio.projects.professional.first.description"),
                    t("portfolio.projects.professional.first.description2"),
                    t("portfolio.projects.professional.first.description3"),
                    t("portfolio.projects.professional.first.description4"),
                ],
                skills: ["JavaScript", "React", "HTML 5", "CSS 3"],
                link: "https://www2.microstrategy.com/producthelp/Current/Readme/en-us/Content/mstr_office.htm"
            },
            {
                name: t("portfolio.projects.professional.second.title"),
                images: [subscription1, subscription2, subscription3, subscription4],
                description: [
                    t("portfolio.projects.professional.second.description"),
                    t("portfolio.projects.professional.second.description2"),
                    t("portfolio.projects.professional.second.description3"),
                    t("portfolio.projects.professional.second.description4"),
                ],
                skills: ["JavaScript", "React", "TypeScript", "Redux", "Sass"],
                link: "",
                youtubeLink: "https://www.youtube.com/watch?t=91&v=m_WM4hu9lpY&feature=emb_imp_woyt"
            },
            {
                name: t("portfolio.projects.professional.third.title"),
                images: [office2, subscription1, office3],
                description: [
                    t("portfolio.projects.professional.third.description"),
                    t("portfolio.projects.professional.third.description2"),
                    t("portfolio.projects.professional.third.description3"),
                ],
                skills: ["JavaScript", "Protractor", "WebDriverIO"]
            }
        ],
        personal: [
            {
                name: t("portfolio.projects.personal.first.title"),
                images: [scraper1, scraper2],
                description: [
                    t("portfolio.projects.personal.first.description"),
                    t("portfolio.projects.personal.first.description2"),
                ],
                skills: ["JavaScript", "Puppeeter", "MySQL"]
            }
        ]
    };

    const handleClickItem = (project) => {
        setHoveredProject(null)
        setSelectedProject(project)
        setTimeout(() => { setIsModalOpen(true) }, 200);
    }

    const getPortfolioItem = (project) => {
        const { name, images, description } = project;
        return (
            <div key={name}
                className={`portfolio-item ${hoveredProject === name ? 'active' : ''}`}
                onClick={() => handleClickItem(project)}
                onMouseEnter={() => setHoveredProject(name)}
                onMouseLeave={() => setHoveredProject(null)}
            >
                <img src={images[0]} alt="" className="portfolio-image" />
                <h2>{name}</h2>
                <h5>{description[0]}</h5>
            </div>
        )
    }

    return (
        <div className="portfolio" id="portfolio">
            <h1>{t("portfolio.professionalProjects").toUpperCase()}</h1>
            <div className="portfolio-container">
                {portfolioProjects.professional.map((project) => getPortfolioItem(project))}
            </div>
            <h1>{t("portfolio.personalProjects").toUpperCase()}</h1>
            <div className="portfolio-container">
                {portfolioProjects.personal.map((project) => getPortfolioItem(project))}
            </div>
            <PortfolioModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} selectedProject={selectedProject} />
        </div>
    )
}

