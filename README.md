# UdemyClone
This project is a course selling application built with Node.js and MongoDB. It provides a platform for admins to create and manage courses, and for users to sign up, purchase courses, and view their purchased courses.

# Key Features:
Admin Functionality: Admins can create new courses and manage course content.
User Functionality: Users can sign up, browse available courses, purchase courses, and view their purchased courses.
Secure Authentication: User authentication is implemented using username and password authentication via headers.
# Routes:
# Admin Routes
POST /admin/signup: Create a new admin account.
POST /admin/courses: Create a new course.
GET /admin/courses: Retrieve all courses.
# User Routes
POST /user/signup: Create a new user account.
GET /user/course: List all available courses.
POST /users/course/:courseId: Purchase a course.
GET /users/purchasedCourses: List all purchased courses.
Next Steps:
Implement authentication using Zod.
Build the frontend for the application.
