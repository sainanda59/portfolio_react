import React from 'react'
import SocialContact from '../../common/social-contact';
import ('./about.css');
function About() {
    return (
        <div className="about">
            <div className="about-top">
            <div className="about-info">
                Hello There 👋, I am <br/>
                <span className="info-name">Sai Soumyak Nanda</span>. <br />
                I know how to Google and<br />
                love exploring things.
            </div>

            <div className="about-photo">
               <img src={require('../../../assests/coding.png').default} className="picture" alt="coding-pic" />
            </div>

            </div>

            <SocialContact />
            

        </div>
    )
}

export default About;
