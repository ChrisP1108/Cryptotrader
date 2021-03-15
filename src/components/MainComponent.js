import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Main = () => {
    return (
        <>
            <Header />
            <Footer />
        </>
    )
}

export default Main;