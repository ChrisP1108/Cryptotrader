import { Link } from 'react-router-dom';

const Home = ({ homepagecontent }) => {

    const homesections = homepagecontent.map(section => {
        return (            
            <div key={section.id} className="row section-overlay pt-4 pb-4 ml-5 mr-5">
                <div className={section.inverted ? 'col-12 col-lg-6 my-auto order-lg-last' : 'col-12 col-lg-6 my-auto order-lg-first'}>
                    <img className="imgtag" src={section.img} alt={section.name} />
                </div>
                <div className="col-12 col-lg-6 my-auto">
                    <h1 className="mb-5 mt-4 mt-lg-0">{section.heading}</h1>
                    <h5 className="mb-5">{section.content1}</h5>
                    <h5 className="mt-5">{section.content2}</h5>
                    <Link to={section.link}>
                        <button className="mt-5 mb-1 btn-lg">{section.button}</button>
                    </Link>
                </div>
            </div>
        );
    });
    
    return (
        <div id="home" className="fade-in">
            <div className="row home-image-1 image-section">
                {homesections}
            </div>
        </div>
    )
}

export default Home
