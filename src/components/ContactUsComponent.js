import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

const ContactUs = ({ contactuspagecontent }) => {

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        phoneNum: '',
        email: '',
        agree: false,
        contactType: 'By Phone',
        feedback: ''
    });

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

    const handleInputChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setForm({...form, [e.target.name]: value});
        console.log(form);

    }

    const handleSubmit = (e) => {
        console.log('Current state is: ' + JSON.stringify(form));
        alert('Current state is: ' + JSON.stringify(form));
        e.preventDefault();
    }

    const ContactUsForm = () => {
        return (
            <div className="row section-overlay pt-4 pb-3 ml-5 mr-5">
                <div className="container">
                    <div className="row row-content">
                        <div className="col-md-10 mx-auto">
                            <Form onSubmit={handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor="firstName" md={2}>First Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="firstName" name="firstName"
                                            placeholder="First Name"
                                            value={form.firstName}
                                            onChange={handleInputChange} 
                                            />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="lastName" md={2}>Last Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="lastName" name="lastName"
                                            placeholder="Last Name"
                                            value={form.lastName}
                                            onChange={handleInputChange} />
                                    </Col>                        
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                    <Col md={10}>
                                        <Input type="tel" id="phoneNum" name="phoneNum"
                                            placeholder="Phone number"
                                            value={form.phoneNum}
                                            onChange={handleInputChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Input type="email" id="email" name="email"
                                            placeholder="Email"
                                            value={form.email}
                                            onChange={handleInputChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size: 4, offset: 2}} className="my-auto">
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox"
                                                    name="agree"
                                                    checked={form.agree}
                                                    onChange={handleInputChange} /> {' '}
                                                <strong>May we contact you?</strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <Input type="select" name="contactType"
                                                value={form.contactType}
                                                onChange={handleInputChange}>
                                            <option>By Phone</option>
                                            <option>By Email</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="feedback" md={2}>Feedback</Label>
                                    <Col md={10}>
                                        <Input type="textarea" id="feedback" name="feedback"
                                            rows="12"
                                            value={form.feedback}
                                            onChange={handleInputChange}>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size: 10, offset: 2}} className="mx-auto mt-3">
                                        <button type="submit">
                                            Submit
                                        </button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div id="contactUs">
            <div className="row contact-image-1 image-section">
                <div className="row section-overlay2 pt-4 ml-4 mr-4">
                    <ContactUsHeading />
                    <ContactUsForm />
                </div>
            </div>
        </div>
    )
}

export default ContactUs
