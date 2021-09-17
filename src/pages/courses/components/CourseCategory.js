import React, { Component } from 'react';
import { Styles } from '../styles/courseCategory.js';

class CourseCategory extends Component {

    render() {
        return (
            <Styles>
                {/* Course Tag */}
                <div className="course-category">
                    <h5>Course Category</h5>
                    <ul className="category-item list-unstyled">
                        <li className="check-btn">
                            <label htmlFor="cat1"><input type="checkbox" id="cat1" className="check-box" />Embedded Course<span>(5)</span></label>
                        </li>
                        <li className="check-btn">
                            <label htmlFor="cat2"><input type="checkbox" id="cat2" className="check-box" />C Programming<span>(1)</span></label>
                        </li>
                        <li className="check-btn">
                            <label htmlFor="cat3"><input type="checkbox" id="cat3" className="check-box" />Data Structures<span>(3)</span></label>
                        </li>
                        <li className="check-btn">
                            <label htmlFor="cat4"><input type="checkbox" id="cat4" className="check-box" />Networking Concepts<span>(2)</span></label>
                        </li>
                        <li className="check-btn">
                            <label htmlFor="cat5"><input type="checkbox" id="cat5" className="check-box" />Python Programming<span>(9)</span></label>
                        </li>
                    </ul>
                </div>
            </Styles>
        )
    }
}

export default CourseCategory
