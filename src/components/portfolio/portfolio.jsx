import "./portfolio.scss"
import office from "../../assets/portfolio/office.png"
import subscriptions from "../../assets/portfolio/subscriptions.png"
import { useState } from "react";
import PortfolioModal from "./portfolio-modal";

export default function Portfolio() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [hoveredProject, setHoveredProject] = useState(null);

    const objItems = {
        items: [
            {
                name: "office addin",
                images: [office, subscriptions, subscriptions],
                description: "This is the description"
            },
            {
                name: "subscriptions",
                images: [subscriptions],
                description: "This is the description"
            },
            {
                name: "web scrapper",
                images: [office],
                description: "This is the description"
            }
        ]
    };

    const handleClickItem = (item) => {
        setHoveredProject(null)
        setSelectedProject(item)
        setTimeout(() => { setIsModalOpen(true) }, 200);
    }

    return (
        <div className="portfolio" id="portfolio">
            PROFESSIONAL PROJECTS
            <div className="portfolio-container">
                {objItems.items.map((item) => {
                    const { name, images, description } = item;
                    return (
                        <div key={name}
                            className={`portfolio-item ${hoveredProject === name ? 'active' : ''}`}
                            onClick={() => handleClickItem(item)}
                            onMouseEnter={() => setHoveredProject(name)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <img src={images[0]} alt="" className="portfolio-image" />
                            <h1>{name}</h1>
                            <h3>{description}</h3>
                        </div>)
                })}
            </div>
            <PortfolioModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} selectedProject={selectedProject} />
        </div>
    )
}

