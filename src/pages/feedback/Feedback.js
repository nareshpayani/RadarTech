import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/feedback.js';
import axios from 'axios';
import { toast } from 'react-toastify';

// const URL = process.env.PUBLIC_URL 
const URL = 'http://localhost:5000'

function Register() {
    useEffect(() => {
        const form = document.getElementById("form_registration");
        const name = document.getElementById("feedback_name");
        const company = document.getElementById("feedback_company");
        const email = document.getElementById("feedback_email");
        const address = document.getElementById("feedback_address");
        const text = document.getElementById("feedback_text");
        const salary = document.getElementById("feedback_salary");
        const picture = document.getElementById("feedback_picture");

        form.addEventListener("submit", formSubmit);

        function formSubmit(e) {
            e.preventDefault();

            const nameValue = name.value.trim();
            const companyValue = company.value.trim();
            const emailValue = email.value.trim();
            const addressValue = address.value.trim();
            const textValue = text.value.trim();
            const salaryValue = salary.value.trim();
            const pictureValue = picture.files[0];

            if (nameValue === "") {
                setError(name, "Name can't be blank");
            } else {
                setSuccess(name);
            }

            if (companyValue === "") {
                setError(company, "Company can't be blank");
            } else {
                setSuccess(company);
            }

            if (emailValue === "") {
                setError(email, "Email can't be blank");
            } else if (!isEmail(emailValue)) {
                setError(email, "Not a valid email");
            } else {
                setSuccess(email);
            }

            if (salaryValue === "") {
                setError(salary, "Company can't be blank");
            } else {
                setSuccess(salary);
            }

            if (addressValue === "") {
                setError(address, "Address can't be blank");
            } else {
                setSuccess(address);
            }

            if (textValue === "") {
                setError(text, "Feedback can't be blank");
            } else {
                setSuccess(text);
            }

            if (textValue && addressValue && companyValue && emailValue && nameValue) 
                saveFeedback(textValue ,addressValue ,companyValue ,emailValue, nameValue, salaryValue, pictureValue)

        }

        function setError(input, message) {
            const formControl = input.parentElement;
            const errorMsg = formControl.querySelector(".feedback_input-msg");
            formControl.className = "form-control text-left error";
            errorMsg.innerText = message;
        }

        function setSuccess(input) {
            const formControl = input.parentElement;
            formControl.className = "form-control success";
        }
        
        function reset(input) {
            const formControl = input.parentElement;
            formControl.className = "form-control";
        }

        function isEmail(email) {
            return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
        }
        function saveFeedback (textValue ,addressValue ,companyValue ,emailValue, nameValue, salaryValue, pictureValue) {
            const formData = new FormData();
            formData.append('name',nameValue);
            formData.append('email',emailValue);
            formData.append('text',textValue);
            formData.append('company',companyValue);
            formData.append('address',addressValue);
            formData.append('salary',salaryValue);
            formData.append('picture',pictureValue);

            axios.post(URL+'/feedback', formData)
            .then((response) => {
                if(response.data) {
                    notify("Feedback submitted successfully!")
                }
                reset(name)
                reset(email)
                reset(address)
                reset(company)
                reset(text)
                reset(salary)
                form.reset()
            })
            .catch(function (error) {
                console.log(error);
            });
        }

    }, []);

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
            <div className="main-wrapper registration-page">

                {/* Header 2 */}
                <HeaderTwo />

                {/* Breadcroumb */}
                <BreadcrumbBox title="Feedback" />

                {/* Registration Area */}
                <section className="registration-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="registration-box">
                                    <div className="registration-title text-center">
                                        <h3>Feedback</h3>
                                    </div>
                                    <form id="form_registration" className="form">
                                        <p className="form-control">
                                            <label htmlFor="feedback_name">Name</label>
                                            <input type="text" placeholder="name" id="feedback_name" />
                                            <span className="feedback_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="feedback_company">Company</label>
                                            <input type="text" placeholder="Company" id="feedback_company" />
                                            <span className="feedback_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="feedback_email">Email</label>
                                            <input type="email" placeholder="Email" id="feedback_email" />
                                            <span className="feedback_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="feedback_salary">Salary</label>
                                            <input type="number" placeholder="Salary" id="feedback_salary" />
                                            <span className="feedback_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="feedback_address">Address</label>
                                            <input type="text" placeholder="address" id="feedback_address" />
                                            <span className="feedback_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="feedback_text">Feedback</label>
                                            <textarea type="text" placeholder="feedback/suggestions" id="feedback_text" />
                                            <span className="feedback_input-msg"></span>
                                        </p>
                                        <p className='file-container'>
                                            <label htmlFor="feedback_picture">Upload Picture</label>
                                            <input type="file" className="form-control-file" id="feedback_picture" />
                                        </p>
                                        <button>Submit</button>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Footer 2 */}
                <FooterTwo />

            </div>
        </Styles>
    )
}

export default Register