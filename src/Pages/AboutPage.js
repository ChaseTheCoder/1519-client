import React from 'react';
import AboutPanel from '../AboutPanel/AboutPanel';
import './AboutPage.css'

class AboutPage extends React.Component {
    render() {
        return (
            <div className="panel">
                <img src={require("../img/AboutHeader.jpg")} className="about-header" />
            </div>
        );
    };
}

export default AboutPage;