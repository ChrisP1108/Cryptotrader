import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Software from './SoftwareComponent';
import About from './AboutComponent';
import ContactUs from './ContactUsComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Main = () => {
    return (
        <>
            <Header />
            <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/software' component={Software} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contactus' component={ContactUs} />
                    <Redirect to='/home' />
                </Switch>
            <Footer />
        </>
    )
}

export default Main;