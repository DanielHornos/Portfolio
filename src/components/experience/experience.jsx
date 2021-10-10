import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./experience.scss"
import Graduation from './graduation'
import Work from './work'

import microstrategyLogo from "../../assets/microstrategy-logo_red.svg"


export default function Experience() {
    const mstrUrl = "https://www.microstrategy.com"
    function openInNewTab(url) {
        // window.open(url, '_blank').focus();
        // window.open(url, "_blank");
    }

    const mstrLogo = (
        <td className="mstr-logo" onClick={openInNewTab(mstrUrl)}>
            <img src={microstrategyLogo} alt="" />
        </td>
    )

    return (
        <div className="experience" id="experience">
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="08 2021 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<Work />}
                >
                    <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
                    {mstrLogo}
                    <p>
                        Javascript, Typescript, React, Redux
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="08/2020 - 08/2021"
                    iconStyle={{ background: 'white', color: '#fff' }}
                    icon={<Work />}

                >
                    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                    {mstrLogo}
                    <p>
                        Javascript, Typescript, React, Redux
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="01/2019 - 08/2020"
                    iconStyle={{ background: 'white', color: '#fff' }}
                    icon={<Work />}
                >
                    <h3 className="vertical-timeline-element-title">Quality Engineer</h3>
                    {mstrLogo}
                    <p>
                        Protractor, WebDriverIO, Javascript, Rally, Python
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="10/2017 - 01/2019"
                    iconStyle={{ background: 'white', color: '#fff' }}
                    icon={<Work />}
                >
                    <h3 className="vertical-timeline-element-title">Support Engineer</h3>
                    {mstrLogo}
                    <p>
                        Tomcat, IIS,
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}
