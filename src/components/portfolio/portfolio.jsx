import "./portfolio.scss"
import office from "../../assets/portfolio/office.png"
import subscriptions from "../../assets/portfolio/subscriptions.png"
import { useState } from "react";
import PortfolioModal from "./portfolio-modal";

export default function Portfolio() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [hoveredProject, setHoveredProject] = useState(null);

    const portfolioProjects = {
        professional: [
            {
                name: "office addin",
                images: [office, subscriptions, subscriptions],
                description: "This is the description",
                skills: ["JavaScript", "React", "HTML 5", "CSS 3"]
            },
            {
                name: "subscriptions",
                images: [subscriptions],
                description: "This is the description",
                skills: ["JavaScript", "React", "TypeScript", "Redux", "Sass"]
            },
            {
                name: "automation",
                images: [office],
                description: "This is the description",
                skills: ["JavaScript",]
            }
        ],
        personal: [
            {
                name: "web scrapper",
                images: [office],
                description: "This is the description",
                skills: ["JavaScript",]
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
                <h1>{name}</h1>
                <h3>{description}</h3>
            </div>
        )
    }

    return (
        <div className="portfolio" id="portfolio">
            <h1>PROFESSIONAL PROJECTS</h1>
            <div className="portfolio-container">
                {portfolioProjects.professional.map((project) => getPortfolioItem(project))}
            </div>
            <h1>PERSONAL PROJECTS</h1>
            <div className="portfolio-container">
                {portfolioProjects.personal.map((project) => getPortfolioItem(project))}
            </div>
            <PortfolioModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} selectedProject={selectedProject} />
        </div>
    )
}

