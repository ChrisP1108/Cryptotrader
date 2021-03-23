import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Software from './SoftwareComponent';
import About from './AboutComponent';
import ContactUs from './ContactUsComponent';
import Order from './OrderComponent';
import { HOMEPAGECONTENTS } from '../shared/HomePageContents';
import { SOFTWAREPAGECONTENTS } from '../shared/SoftwarePageContents';
import { ABOUTPAGECONTENTS } from '../shared/AboutPageContents';
import { CONTACTPAGECONTENTS } from '../shared/ContactPageContents'
import { useState } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Main = () => {

    const [content, setContent] = useState ({
        homePageContent: HOMEPAGECONTENTS,
        softwarePageContent: SOFTWAREPAGECONTENTS,
        aboutPageContent: ABOUTPAGECONTENTS,
        contactUsPageContent: CONTACTPAGECONTENTS
    });

    return (
        <>
            <Header />
            <TransitionGroup>
                <CSSTransition key={Route.id} classNames="page" timeout={300}>
                    <Switch>
                        <Route id="1" path='/home' render={() => <Home homepagecontent={content.homePageContent} />} />
                        <Route id="2" exact path='/software' render={() => <Software softwarepagecontent={content.softwarePageContent[0]} />} />
                        <Route id="3" exact path='/about' render={() => <About aboutpagecontent={content.aboutPageContent[0]} />} />
                        <Route id="4"exact path='/contactus' render={() => <ContactUs contactuspagecontent={content.contactUsPageContent[0]} />} />
                        <Route id="5"exact path='/order' component={Order} />
                        <Redirect to='/home' />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>    
            <Footer />
        </>
    )
}

export default Main;