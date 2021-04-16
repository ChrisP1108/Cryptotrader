import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Software from './SoftwareComponent';
import About from './AboutComponent';
import ContactUs from './ContactUsComponent';
import Order from './OrderComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

const Main = () => {

    return (
        <>
            <Header />
                <Switch>               
                    <Route path='/home'><Home /></Route>
                    <Route exact path='/software'><Software /></Route>
                    <Route exact path='/about'><About /></Route>
                    <Route exact path='/contactus'><ContactUs /></Route>
                    <Route exact path='/order'><Order /></Route>
                    <Redirect to='/home' />                   
                </Switch>
            <Footer />
        </>
    )
}

export default Main;