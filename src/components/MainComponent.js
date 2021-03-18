import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Software from './SoftwareComponent';
import About from './AboutComponent';
import ContactUs from './ContactUsComponent';
import { HOMEPAGECONTENTS } from '../shared/Homepagecontents';
import { SOFTWAREPAGECONTENTS } from '../shared/SoftwarePageContents';
import { CONTACTPAGECONTENTS } from '../shared/ContactPageContents'
import { useState } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Main = () => {

    const [content, setContent] = useState ({
        homePageContent: HOMEPAGECONTENTS,
        softwarePageContent: SOFTWAREPAGECONTENTS,
        contactUsPageContent: CONTACTPAGECONTENTS
    });

    return (
        <>
            <Header />
            <Switch>
                    <Route path='/home' render={() => <Home homepagecontent={content.homePageContent} />} />
                    <Route path='/software' render={() => <Software softwarepagecontent={content.softwarePageContent[0]} />} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contactus' render={() => <ContactUs contactuspagecontent={content.contactUsPageContent[0]} />} />
                    <Redirect to='/home' />
                </Switch>
            <Footer />
        </>
    )
}

export default Main;