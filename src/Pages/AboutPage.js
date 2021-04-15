import React from 'react';
import AboutPanel from '../AboutPanel/AboutPanel';
import './AboutPage.css'

class AboutPage extends React.Component {
    render() {
        return (
            <div className="panel">
                <div className="about-container">
                    <img src={require("../img/AboutHeader.jpg")} className="about-header" />
                </div>
                <div className="heading-container">
                    <p className="about-body-heading">1519 was created in honor the the 15th Amendment and 19th Amendment.  With the right for all people to vote the next hurdle in history is empowering voters by creating a platform to exchange relevent information about ballot choices.</p>
                    <p className="about-body-heading">We the People of 1519 want voters to be informed by the people for the people.  Read up on the latest news about your local ballot.  Add relevant articles yourself. Become an informed voter all on one site. </p>
                </div>

                <AboutPanel />
            </div>
        );
    };
}

export default AboutPage;