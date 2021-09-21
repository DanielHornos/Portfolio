import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import { useTranslation } from 'react-i18next';

import introImage from '../../assets/daniel portfolio.png';

import "./intro.scss";

export default function Intro() {
    const textRef = useRef();
    const { t } = useTranslation();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Javascript", "React", "Redux"],
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src={introImage} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>{t("intro.welcome")}</h2>
                    <h1>Daniel Hornos Valiente</h1>
                    <h3>
                        {t("intro.webDeveloper")}: <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    );
}