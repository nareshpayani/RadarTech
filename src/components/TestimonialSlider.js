import React, { Component } from 'react';
import Datas from '../data/testimonial/testimonial-slider.json';
import { Container, Row, Col } from 'react-bootstrap';
import Swiper from 'react-id-swiper';
import { Styles } from "./styles/testimonialSlider.js";
import { Link } from 'react-router-dom';
import axios from 'axios';

// const URL = process.env.PUBLIC_URL 
const URL = 'http://localhost:5000'

class TestimonialSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            testimonials: []
        }
    }

    componentDidMount () {
        this.getReviews()
    }

    getReviews () {
        axios.get(URL+'/feedback')
        .then((response) => {
            this.setState({ testimonials: response.data }) 
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        const settings = {
            slidesPerView: 2,
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            spaceBetween: 30,
            watchSlidesVisibility: true,
            pagination: {
                el: '.slider-dot.text-center',
                clickable: true
            },
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                576: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                992: {
                    slidesPerView: 2
                }
            }
        };

        return (
            <Styles>
                {/* Testimonial Slider */}
                <section className="testimonial-area" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.backgroundImage})` }}>
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="sec-title text-center">
                                    <h4>{Datas.secTitle}</h4>
                                </div>
                            </Col>
                            <Col md="12" className="testimonial-slider">
                                <Swiper {...settings}>
                                    {
                                        this.state.testimonials.map((data, i) => (
                                            <div className="slider-item" key={i}>
                                                <div className="desc">
                                                    <h5>{data.company}</h5>
                                                    <p>{data.feedback_text}</p>
                                                </div>
                                                <div className="writer">
                                                    <img src={process.env.PUBLIC_URL + `/assets/uploads/` + (data.imgUrl || `user2.png`)} className="slider-image" alt={'venkat.png'} />
                                                    <h6>{data.user_name}</h6>
                                                    <p>{data.address}</p>
                                                    <p>{data.salary+" Lacs per annum"}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Swiper>
                            </Col>
                        </Row>
                        <Col md="12" className="text-center">
                            <div className="viewall-btn">
                            <Link className="readmore-btn" to={process.env.PUBLIC_URL + "/events"}>More</Link>
                            </div>
                        </Col>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default TestimonialSlider
