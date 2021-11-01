import "./portfolio-modal.scss"
import Modal from 'react-modal';
import macbook from "../../assets/portfolio/macbook.png";
import { useState } from "react";

export default function PortfolioModal({ isModalOpen, setIsModalOpen, selectedProject }) {

    const [currentSlide, setCurrentSlide] = useState(0);
    const maxNumberSlides = selectedProject?.images.length;

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const nextSlide = () => {
        const nextIndex = (currentSlide + 1) < maxNumberSlides ? (currentSlide + 1) : 0;
        console.log('nextIndex:', nextIndex)
        setCurrentSlide(nextIndex);
    }

    const previousSlide = () => {
        const previousIndex = (currentSlide - 1) >= 0 ? (currentSlide - 1) : maxNumberSlides - 1;
        console.log('previousIndex:', previousIndex)
        setCurrentSlide(previousIndex);
    }

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

    return (
        <div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >
                <div className="right" >
                    <div className="close-modal" onClick={closeModal}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                    </div>
                </div>
                <div className="center" >
                    <div className="arrow previous" onClick={previousSlide} />
                    <div className="arrow next" onClick={nextSlide} />
                </div>
                <div className="parent">
                    <img className="portfolio-image" src={selectedProject?.images[currentSlide]} alt="" />
                    <img className="macbook" src={macbook} alt="" />
                </div>

                <h2>{selectedProject?.name}</h2>
                <h3>{selectedProject?.description}</h3>
            </Modal>
        </div>
    )
}

