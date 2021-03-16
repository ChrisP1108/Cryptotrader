import { useState } from 'react'
import { Link } from 'react-router-dom';

const Home = ({ homecontent }) => {

    const homesections = homecontent.map(section => {
        return (            
            <div key={section.id} className="row section-overlay pt-4 pb-4 ml-4 mr-5">
                <div className={section.inverted ? 'col my-auto order-md-last' : 'col my-auto order-md-first'}>
                    <img src={section.img} width="550" height ="350" />
                </div>
                <div className="col my-auto">
                    <h1 className="mb-5">{section.heading}</h1>
                    <h5 className="mb-5">{section.content1}</h5>
                    <h5 className="mt-5">{section.content2}</h5>
                    <Link to={section.link}>
                        <button className="mt-5">{section.button}</button>
                    </Link>
                </div>
            </div>
        );
    });
    
    return (
        <div id="home">
            <div className="row home-image-1 image-section">
                {homesections}
            </div>
        </div>
    )
}

export default Home
