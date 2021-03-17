import { useState } from 'react';
import { Link } from 'react-router-dom';

const Software = ({ softwarepagecontent }) => {

    const SoftwareContent = () => {
        return (
            <div className="row section-overlay pt-4 pb-4 ml-4 mr-5">
                <div className="col my-auto">
                    <img src={softwarepagecontent.img} width="550" height ="350" />
                </div>
                <div className="col my-auto">
                    <h1 className="mb-5">{softwarepagecontent.heading}</h1>
                    <h5 className="mb-5">{softwarepagecontent.content1}</h5>
                    <h5 className="mt-5">{softwarepagecontent.content2}</h5>
                    <Link to={softwarepagecontent.link}>
                        <button className="mt-5">{softwarepagecontent.button}</button>
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