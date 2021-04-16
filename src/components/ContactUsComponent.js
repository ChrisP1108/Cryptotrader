import { useForm } from 'react-hook-form';
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { useContext } from 'react';
import { State } from '../state/State';

const ContactUs = () => {

    const contactusimport = useContext(State); 
    const contactuspagecontent = contactusimport.contactuspagecontent[0];

    const ContactUsHeading = () => {
        return (
            <>  
                <div className="col-12 my-auto">
                    <h1 className="mb-5 mt-2">{contactuspagecontent.heading}</h1>
                </div>
                <div className="col-12 my-auto">
                    <img className="imgtag" src={contactuspagecontent.img} width="550" height ="350" />
                </div>
                <div className="col my-auto">
                    <h2 className="mb-0 mt-5">{contactuspagecontent.content1}</h2>
                </div>
            </>
        )
    }

    const { register, handleSubmit } = useForm({
        defaultValues: {
            agree: false,
            contactType: 'By Phone',
        }
    
    });
    
    const onSubmit = (data) => {
        if (data.firstName === '' || data.lastName === '' || data.phoneNum === '' || data.email === '' || data.feedback === '') {
            alert('Please Enter In All Fields');
            return;
        }
        const output = JSON.stringify(data);
        alert(output);
        console.log(data);
    }

    const ContactUsForm = () => {
        return (
            <div className="row form-overlay pt-4 pb-3 ml-5 mr-5">
                <div className="container">
                    <div className="row row-content">
                        <div className="App col-md-10 mx-auto">
                            <form className="form App mt-2" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group row">
                                    <label htmlFor="firstName" className="col-md-2">First Name</label>
                                    <input type="text" id="firstName" className ="col-10 mx-auto form-control" name="firstName"
                                        placeholder="First Name"
                                        ref={register}
                                    />                                   
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="lastName" className="col-md-2">Last Name</label>
                                    <input type="text" id="lastName" className ="col-10 mx-auto form-control" name="lastName"
                                        placeholder="Last Name"
                                        ref={register} 
                                    />                      
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="phoneNum" className="col-md-2">Phone</label>
                                    <input type="tel" id="phoneNum" className ="col-10 mx-auto form-control" name="phoneNum"
                                        placeholder="Phone number"
                                        ref={register}
                                    />
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="email" className="col-md-2">Email</label>
                                    <input type="text" id="email" className ="col-10 mx-auto form-control mb-3" name="email"
                                        placeholder="Email"
                                        ref={register}
                                    />
                                </div>
                                <div className="form-group row">
                                    <div className="my-auto col-md-4 mx-auto">
                                        <div className="form-group row check">
                                            <div className="form-check-label">
                                                <input type="checkbox"
                                                    name="agree"
                                                    ref={register}
                                                    className="form-control-check"
                                                />
                                                <strong> May we contact you?</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mt-4 mt-md-0">
                                        <select name="contactType"
                                                ref={register}>
                                            <option>By Phone</option>
                                            <option>By Email</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="feedback" className="col-md-2">Feedback</label>
                                        <textarea id="feedback" className ="col-10 mx-auto form-control" name="feedback"
                                            rows="12"
                                            ref={register}
                                        />
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-10 offset-md-2 mx-auto mt-3">
                                        <button type="submit" className="btn-lg">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div id="contactUs" className="fade-in">
            <div className="row contact-image-1 image-section">
                <div className="row section-overlay2 pt-4 ml-4 mr-5 ml-5">                    
                    <ContactUsHeading />
                    <ContactUsForm />
                </div>
            </div>
        </div>
    )
}

export default ContactUs
