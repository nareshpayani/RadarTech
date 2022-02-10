use Radar;
CREATE TABLE Review (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    course_id INT,
	user_name VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	review_text Text,
    stars INT,
    imgUrl Text,
	review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Feedback (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
    company VARCHAR(100) NOT NULL,
	address Text NOT NULL,
	feedback_text Text,
    salary INT,
    imgUrl Text,
	feedback_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)