import { useState } from 'react';
import { Link } from 'react-router-dom';

const About = ({ aboutpagecontent }) => {

    const AboutContent = () => {
        return (
            <div className="row section-overlay2 pt-4 pb-4 ml-5 mr-5">
                <div className="col-12 my-auto">
                <h1 className="mb-5">{aboutpagecontent.heading}</h1>
                </div>
                <div className="col-12 my-auto">
                    <img src={aboutpagecontent.img} alt={aboutpagecontent.name} width="50%" />
                </div>
                <div className="col my-auto">
                    <h5 className="mb-5 mt-5">{aboutpagecontent.content1}</h5>
                    <h5 className="mt-5">{aboutpagecontent.content2}</h5>
                    <h5 className="mt-5">{aboutpagecontent.content3}</h5>
                    <Link to={aboutpagecontent.link}>
                        <button className="mt-5">{aboutpagecontent.button}</button>
                    </Link>  
                </div>
            </div>
        )
    }
    
    return (
        <div id="about">
            <div className="row about-image-1 image-section">
                <AboutContent />
            </div>
        </div>
    )
}

export default About