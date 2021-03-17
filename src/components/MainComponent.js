import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Software from './SoftwareComponent';
import About from './AboutComponent';
import ContactUs from './ContactUsComponent';
import { HOMEPAGECONTENTS } from '../shared/HomePageContents';
import { SOFTWAREPAGECONTENTS } from '../shared/SoftwarePageContents';
import { useState } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Main = () => {

    const [homePageContent, setHomePageContent] = useState(HOMEPAGECONTENTS);
    const [softwarePageContent, setSoftwarePageContent] = useState(SOFTWAREPAGECONTENTS);

    return (
        <>
            <Header />
            <Switch>
                    <Route path='/home' render={() => <Home homepagecontent={homePageContent} />} />
                    <Route path='/software' render={() => <Software softwarepagecontent={softwarePageContent[0]} />} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contactus' component={ContactUs} />
                    <Redirect to='/home' />
                </Switch>
            <Footer />
        </>
    )
}

export default Main;