import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import GoogleMap from './GoogleMap';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/contact.js';
import axios from 'axios';
import { toast } from 'react-toastify';

// const URL = process.env.PUBLIC_URL 
const URL = 'http://localhost:5000'

function Contact() {
    let form, name, email, subject, message

    useEffect(() => {
        form = document.getElementById("form_contact");
        name = document.getElementById("contact_name");
        email = document.getElementById("contact_email");
        subject = document.getElementById("contact_subject");
        message = document.getElementById("contact_message");

        form.addEventListener("submit", formSubmit);

        function formSubmit(e) {
            e.preventDefault();

            const nameValue = name.value.trim();
            const emailValue = email.value.trim();
            const subjectValue = subject.value.trim();
            const messageValue = message.value.trim();

            if (nameValue === "") {
                setError(name, "Name can't be blank");
            } else {
                setSuccess(name);
            }

            if (emailValue === "") {
                setError(email, "Email can't be blank");
            } else if (!isEmail(emailValue)) {
                setError(email, "Not a valid email");
            } else {
                setSuccess(email);
            }

            if (subjectValue === "") {
                setError(subject, "Subject can't be blank");
            } else {
                setSuccess(subject);
            }

            if (messageValue === "") {
                setError(message, "Message can't be blank");
            } else {
                setSuccess(message);
            }

            if (subjectValue && emailValue && nameValue && messageValue) saveReview(nameValue, emailValue, subjectValue, messageValue)

        }

        function setError(input, message) {
            const formControl = input.parentElement;
            const errorMsg = formControl.querySelector(".contact_input-msg");
            formControl.className = "form-control text-left error";
            errorMsg.innerText = message;
        }

        function setSuccess(input) {
            const formControl = input.parentElement;
            formControl.className = "form-control success";
        }

        function isEmail(email) {
            return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
        }
    });
    
    
    function reset(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control";
    }

    function saveReview (nameValue, emailValue, subjectValue, messageValue) {
        const formData = new FormData();
        formData.append('name',nameValue);
        formData.append('email',emailValue);
        formData.append('subject',subjectValue);
        formData.append('message',messageValue);

        axios.post(URL+'/contact', formData)
        .then((response) => {
            if(response.data) {
                notify("Message sent successfully!")
            }
            reset(name)
            reset(email)
            reset(subject)
            reset(message)
            form.reset()
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    function notify (message) {
        toast.success(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true
        });    
    }

    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper contact-page">

                {/* Header 2 */}
                <HeaderTwo />

                {/* Breadcroumb */}
                <BreadcrumbBox title="Contact Us" />

                {/* Contact Area */}
                <section className="contact-area">
                    <Container>
                        <Row>
                            <Col md="4">
                                <div className="contact-box-title">
                                    <h4>Contact Info</h4>
                                </div>
                                <div className="contact-icon-box d-flex">
                                    <div className="icon">
                                        <i className="las la-map-marker"></i>
                                    </div>
                                    <div className="box-content">
                                        <h5>Our Location</h5>
                                        <p>#90/2, 2st Floor, Thulasi Theatre Road,Beside Innovative multiplex, Marathalli, Banglore 560037.</p>
                                    </div>
                                </div>
                                <div className="contact-icon-box d-flex">
                                    <div className="icon">
                                        <i className="las la-envelope-open"></i>
                                    </div>
                                    <div className="box-content">
                                        <h5>Email Address</h5>
                                        <p>info@radar-tech.in<br />enquery@radar-tech.in</p>
                                    </div>
                                </div>
                                <div className="contact-icon-box d-flex">
                                    <div className="icon">
                                        <i className="las la-phone"></i>
                                    </div>
                                    <div className="box-content">
                                        <h5>Phone Numbers</h5>
                                        <p>+91 9100401204<br />+91 7095529999</p>
                                    </div>
                                </div>
                                <div className="contact-social">
                                    <ul className="social list-unstyled list-inline">
                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>
                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-linkedin-in"></i></a></li>
                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-youtube"></i></a></li>
                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-dribbble"></i></a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="8">
                                <div className="contact-form">
                                    <div className="form-title">
                                        <h4>Get In Touch</h4>
                                    </div>
                                    <div className="form-box">
                                        <form id="form_contact" className="form">
                                            <Row>
                                                <Col md="6">
                                                    <p className="form-control">
                                                        <input type="text" placeholder="Full Name" id="contact_name" />
                                                        <span className="contact_input-msg"></span>
                                                    </p>
                                                </Col>
                                                <Col md="6">
                                                    <p className="form-control">
                                                        <input type="email" placeholder="Email Address" id="contact_email" />
                                                        <span className="contact_input-msg"></span>
                                                    </p>
                                                </Col>
                                                <Col md="12">
                                                    <p className="form-control">
                                                        <input type="text" placeholder="Subject" id="contact_subject" />
                                                        <span className="contact_input-msg"></span>
                                                    </p>
                                                </Col>
                                                <Col md="12">
                                                    <p className="form-control">
                                                        <textarea name="message" id="contact_message" placeholder="Enter Message"></textarea>
                                                        <span className="contact_input-msg"></span>
                                                    </p>
                                                </Col>
                                                <Col md="12">
                                                    <button>Send Message</button>
                                                </Col>
                                            </Row>
                                        </form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    {/* Google Map */}
                    <GoogleMap />
                </section>

                {/* Footer 2 */}
                <FooterTwo />

            </div>
        </Styles>
    )
}

export default Contact