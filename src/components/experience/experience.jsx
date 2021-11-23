import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./experience.scss"
import Work from './work'
import { useTranslation } from 'react-i18next';

import microstrategyLogo from "../../assets/microstrategy-logo_red.svg"


export default function Experience() {
    const { t } = useTranslation();
    const mstrUrl = "https://www.microstrategy.com"
    function openInNewTab(url) {
        // window.open(url, '_blank').focus();
        // window.open(url, "_blank");
    }

    const mstrLogo = (
        <div className="mstr-logo" onClick={openInNewTab(mstrUrl)}>
            <img src={microstrategyLogo} alt="" />
        </div>
    )

    return (
        <div className="experience" id="experience">
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date={t("experience.first.date")}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<Work />}
                >
                    <h3 className="vertical-timeline-element-title">{t("experience.first.job")}</h3>
                    {mstrLogo}
                    <p>
                        TypeScript, Redux, React, RESTful APIs, SASS
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={t("experience.second.date")}
                    iconStyle={{ background: 'white', color: '#fff' }}
                    icon={<Work />}

                >
                    <h3 className="vertical-timeline-element-title">{t("experience.second.job")}</h3>
                    {mstrLogo}
                    <p>
                        JavaScript, Redux, React, CSS, RESTful APIs
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={t("experience.third.date")}
                    iconStyle={{ background: 'white', color: '#fff' }}
                    icon={<Work />}
                >
                    <h3 className="vertical-timeline-element-title">{t("experience.third.job")}</h3>
                    {mstrLogo}
                    <p>
                        Protractor, WebDriverIO, Javascript, Rally, Python
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={t("experience.fourth.date")}
                    iconStyle={{ background: 'white', color: '#fff' }}
                    icon={<Work />}
                >
                    <h3 className="vertical-timeline-element-title">{t("experience.fourth.job")}</h3>
                    {mstrLogo}
                    <p>
                        Servidores Web: Tomcat, IIS, Weblogic.
                    </p>
                    <p>
                        Bases de datos: Microsoft, Oracle, MySQL, PostgreSQL, IBM.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}
