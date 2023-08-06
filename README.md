# Express.js Course API

This repository contains a simple Express.js application that provides API endpoints for managing courses.

# Prerequisites

Before you begin, ensure you have the following installed on your system:
Node.js (v14 or higher)
npm


# Installation

Install the required packages using npm:
```
npm install express joi

```

Start the Express.js server:
```
node index.js

```

# The server will start running on port 3000 (or the specified process.env.PORT).

Open your browser or a tool like Postman and access the following endpoints:
```
•	GET /api/courses: Get a list of all courses.

•	GET /api/courses/:id: Get details of a specific course by ID.

•	POST /api/courses: Add a new course. Provide a JSON object with a name field.

•	PUT /api/courses/:id: Update the name of a course by ID. Provide a JSON object with a name field.

•	DELETE /api/courses/:id: Delete a course by ID.

```

# Example
Assuming the server is running locally on port 3000:
```
•	To get a list of all courses: http://localhost:3000/api/courses

•	To get details of a course with ID 1: http://localhost:3000/api/courses/1

•	To add a new course: Send a POST request to http://localhost:3000/api/courses with a JSON body: { "name": "New Course" }

•	To update the name of the course with ID 1: Send a PUT request to http://localhost:3000/api/courses/1 with a JSON body: { "name": "Updated Course" }

•	To delete the course with ID 1: Send a DELETE request to http://localhost:3000/api/courses/1

```
