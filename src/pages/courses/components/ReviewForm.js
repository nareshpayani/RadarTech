import React, { useEffect, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Styles } from '../styles/reviewForm.js';
import axios from 'axios';
import { toast } from 'react-toastify';

// const URL = process.env.PUBLIC_URL 
const URL = 'http://localhost:5000'

function ReviewForm({courseId, getReviews}) {
    let stars = useRef(0)    
    let form, desc,  name, email, picture 

    useEffect(() => {
        form = document.getElementById("form6");
        desc = document.getElementById("desc6");
        name = document.getElementById("name6");
        email = document.getElementById("email6");
        picture = document.getElementById("picture6");

        form.addEventListener("submit", formSubmit);

        function formSubmit(e) {
            e.preventDefault();

            const descValue = desc.value.trim();
            const nameValue = name.value.trim();
            const emailValue = email.value.trim();
            const pictureValue = picture.files[0];

            if (descValue === "") {
                setError(desc, "Comment can't be blank");
            } else {
                setSuccess(desc);
            }

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
            
            if (descValue && emailValue && nameValue) saveReview(nameValue, emailValue, descValue, pictureValue)
        }

    }, []);
    
    function saveReview (nameValue, emailValue, descValue, pictureValue) {
        const formData = new FormData();
        formData.append('name',nameValue);
        formData.append('email',emailValue);
        formData.append('text',descValue);
        formData.append('stars',stars.current);
        formData.append('courseId',courseId);
        formData.append('picture',pictureValue);

        axios.post(URL+'/review', formData)
        .then((response) => {
            if(response.data) {
                notify("Review submitted successfully!")
                getReviews(courseId)
            }
            reset(name)
            reset(email)
            reset(desc)
            form.reset()
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    function setError(input, message) {
        const formControl = input.parentElement;
        const errorMsg = formControl.querySelector(".input-msg6");
        formControl.className = "form-control error";
        errorMsg.innerText = message;
    }

    function setSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    }

    function isEmail(email) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    }

    function reset(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control";
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
            <form id="form6" className="form review-comment-form">
                <Row>
                    <Col md="6">
                        <div className="star-rating" onChange={(event) => { stars.current = event.target.value } }>
                            <input type="radio" name="rate" id="rate-5" value="5"/>
                            <label htmlFor="rate-5" className="las la-star"></label>
                            <input type="radio" name="rate" id="rate-4" value="4"/>
                            <label htmlFor="rate-4" className="las la-star"></label>
                            <input type="radio" name="rate" id="rate-3" value="3"/>
                            <label htmlFor="rate-3" className="las la-star"></label>
                            <input type="radio" name="rate" id="rate-2" value="2"/>
                            <label htmlFor="rate-2" className="las la-star"></label>
                            <input type="radio" name="rate" id="rate-1" value="1"/>
                            <label htmlFor="rate-1" className="las la-star"></label>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className='file-container'>
                            <label htmlFor="picture6">Upload Picture</label>
                            <input type="file" className="form-control-file" id="picture6" />
                        </div>
                    </Col>
                    <Col md="12">
                        <p className="form-control">
                            <textarea name="comment" id="desc6" placeholder="Enter your review"></textarea>
                            <span className="input-msg6"></span>
                        </p>
                    </Col>
                    <Col md="6">
                        <p className="form-control">
                            <input type="name" placeholder="Enter your name" id="name6" />
                            <span className="input-msg6"></span>
                        </p>
                    </Col>
                    <Col md="6">
                        <p className="form-control">
                            <input type="email" placeholder="Enter your email" id="email6" />
                            <span className="input-msg6"></span>
                        </p>
                    </Col>
                    <Col md="12">
                        <button>Submit Review</button>
                    </Col>
                </Row>
            </form>
        </Styles>
    )
}

export default ReviewForm