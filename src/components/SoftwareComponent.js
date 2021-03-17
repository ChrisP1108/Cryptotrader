import { useState } from 'react';
import { Link } from 'react-router-dom';

const Software = ({ softwarePageContent }) => {

  const SoftwareContent = () => {

            return (
            <div className="row section-overlay pt-4 pb-4 ml-4 mr-5">
                <div className="col my-auto">
                    <img src={softwarePageContent.img} width="550" height ="350" />
                </div>
                <div className="col my-auto">
                    <h1 className="mb-5">{softwarePageContent.heading}</h1>
                    <h5 className="mb-5">{softwarePageContent.content1}</h5>
                    <h5 className="mt-5">{softwarePageContent.content2}</h5>
                    <Link to={softwarePageContent.link}>
                        <button className="mt-5">{softwarePageContent.button}</button>
                    </Link>  
                </div>
            </div>
        )
    }
    
    return (
        <div id="home">
            <div className="row home-image-1 image-section">
                <SoftwareContent />
            </div>
        </div>
    )
}

export default Software