import "./portfolio-modal.scss"
import { useState } from "react";
import Modal from 'react-modal';
import macbook from "../../assets/portfolio/macbook.png";

export default function PortfolioModal({ isModalOpen, setIsModalOpen, selectedProject }) {
    let subtitle;
    // const [isModalOpen, setIsModalOpen] = useState(false);

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsModalOpen(false);
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
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="right" >
                    <div className="close-modal" onClick={closeModal}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                    </div>
                </div>
                <div className="parent">
                    <img className="portfolio-image" src={selectedProject?.icon} alt="" />
                    <img className="macbook" src={macbook} alt="" />
                </div>

                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{selectedProject?.name}</h2>
                <h3 ref={(_subtitle) => (subtitle = _subtitle)}>{selectedProject?.description}</h3>
            </Modal>
        </div>
    )
}

