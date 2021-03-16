import { useState } from 'react'
import { Link } from 'react-router-dom';

const Home = ({ homePageContent }) => {

    const HomeContent = () => {

        return (
            <div className="row section-overlay pt-4 pb-4 ml-4 mr-5">
                <div className="col my-auto">
                    <img src={homePageContent.img} width="550" height ="350" />
                </div>
                <div className="col my-auto">
                    <h1 className="mb-5">{homePageContent.heading}</h1>
                    <h5 className="mb-5">{homePageContent.content1}</h5>
                    <h5 className="mt-5">{homePageContent.content2}</h5>
                    <Link to={homePageContent.link}>
                        <button className="mt-5">{homePageContent.button}</button>
                    </Link>  
                </div>
            </div>
        )
    }
    
    return (
        <div id="home">
            <div className="row home-image-1 image-section">
                <HomeContent />
            </div>
        </div>
    )
}

export default Home
