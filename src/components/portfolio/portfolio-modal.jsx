import "./portfolio-modal.scss"
import Modal from 'react-modal';
import macbook from "../../assets/portfolio/macbook.png";
import { useState } from "react";
import { skillsIcons } from "../skills/skills";

export default function PortfolioModal({ isModalOpen, setIsModalOpen, selectedProject }) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const maxNumberSlides = selectedProject?.images.length;

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: '2px solid',
        },
    };

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const nextSlide = () => {
        const nextIndex = (currentSlideIndex + 1) < maxNumberSlides ? (currentSlideIndex + 1) : 0;
        setCurrentSlideIndex(nextIndex);
    }

    const previousSlide = () => {
        const previousIndex = (currentSlideIndex - 1) >= 0 ? (currentSlideIndex - 1) : maxNumberSlides - 1;
        setCurrentSlideIndex(previousIndex);
    }

    const getIcon = (name) => skillsIcons.icons.filter(obj => {
        return obj.name === name
    })[0].icon;

    return (
        <div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
            // closeModal={closeModal}
            >
                {/* <div className="right" >
                    <div className="close-modal" onClick={closeModal}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                    </div>
                </div> */}
                <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={closeModal}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="center" >
                    <div className="arrow previous" onClick={previousSlide} />
                    <div className="arrow next" onClick={nextSlide} />
                </div>
                <div className="parent">
                    <img className="portfolio-image" src={selectedProject?.images[currentSlideIndex]} alt="" />
                    <img className="macbook" src={macbook} alt="" />
                </div>
                <div className="dots">
                    {selectedProject?.images.map((image, index) => {
                        return (
                            <span key={index} className={`dot ${currentSlideIndex === index ? 'active' : ''}`} onClick={() => setCurrentSlideIndex(index)}></span>
                        )
                    })}
                </div>
                <h2>{selectedProject?.name}</h2>
                <h5>{selectedProject?.description[currentSlideIndex]}</h5>
                <div className="project-skills">
                    {selectedProject?.skills.map((skill, index) => {
                        return (
                            <div key={index} className="skill-tile">
                                <img src={getIcon(skill)} alt="" className="skill-logo" />
                                {skill}
                            </div>
                        )
                    })}
                </div>
            </Modal>
        </div>
    )
}

