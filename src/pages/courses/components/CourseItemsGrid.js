import React, { Component, Fragment } from 'react';
// import Datas from '../../../data/course/item.json';
import Datas from '../../../data/course/filter.json';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import Pagination from './../../../components/Pagination';
import { isFloat } from '../../../helper'
import { withRouter } from 'react-router-dom';
class CourseItemGrid extends Component {
    filter () {
        const items = document.getElementsByClassName("course-item-t");
        const target = this.props.match.params.id
        for (let k = 0; k < items.length; k++) {
            items[k].style.display = "none";

            if (items[k].getAttribute("data-id") === target) {
                items[k].style.display = "block";
            }

            if (!target) {
                items[k].style.display = "block";
            }
        }
    }
    componentDidMount () {
        this.filter()
    }
    componentDidUpdate () {
        this.filter()
    }
    render() {
        return (
            <Fragment>
                {/* Course Item */}
                {
                    Datas.dataList.map((data, i) => (
                        <Col lg="6" md="12" key={i} className="course-item-t" data-id={data.targetId}>
                            <div className="course-item">
                               
                                    <div className="course-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${data.imgUrl})` }}>
                                        {/* <div className="author-img d-flex">
                                            <div className="img">
                                                <img src={process.env.PUBLIC_URL + `/assets/images/${data.authorImg}`} alt="" />
                                            </div>
                                            <div className="title">
                                                <p>{data.authorName}</p>
                                                <span>{data.authorCourses}</span>
                                            </div>
                                        </div> */}
                                        {/* <div className="course-price">
                                            <p>{data.price}</p>
                                        </div> */}
                                    </div>
                               
                                <div className="course-content">
                                    {/* {process.env.PUBLIC_URL + data.courseLink} */}
                                    <h6 className="heading"><Link to={`/course-details/${data.id}`}>{data.courseTitle}</Link></h6>
                                    <p className="desc">{data.shortDesc}</p>
                                    <div className="course-face d-flex justify-content-between">
                                        <div className="duration">
                                            <p><i className="las la-clock"></i>120</p>
                                        </div>
                                        <div className="rating">
                                            <ul className="list-unstyled list-inline">
                                                {
                                                    [...Array(parseInt(data.rating || 0 ))].map((data, i) => (<li key={i} className="list-inline-item"><i className="las la-star"></i></li>))
                                                }
                                                {
                                                    isFloat(data.rating) ? <li className="list-inline-item"><i className="las la-star-half-alt"></i></li> : ''
                                                }
                                                <li className="list-inline-item">({data.rating})</li>
                                            </ul>
                                        </div>
                                        <div className="student">
                                            <p><i className="las la-chair"></i>60</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))
                }

                <Col md="12" className="text-center">
                    <Pagination />
                </Col>
            </Fragment>
        )
    }
}

export default withRouter(CourseItemGrid)
