# Airtribe Task Manager

  

An API built using Node.js and Express.js. It supports simple CRUD operations for tasks.

  
# Running the Project
To run the project, 
i) Clone the repository.
ii) `npm run start`

By default the app runs on port 8080.
  

# Endpoints and Features
-   **GET /tasks**: Fetches a list of all tasks.
    
-   **GET /tasks/:id**: Fetches a list of tasks based on ID. Returns an error response if the requested ID isn't found.
    
-   **POST /tasks**: Creates a new task. Has validation to check that the ID entered is unique, title and descriptions are not empty, and that the isCompleted column is a boolean. Returns a failure message with a description of the error if validation fails.
    
-   **PUT /tasks/:id**: Updates an existing task based on its ID. Has the same validations as POST, plus an additional check to ensure the IDs passed in the URL and in the request body match.
    
-   **DELETE /tasks/:id**: Deletes the tasked based on its ID. Returns a failure response if the requested task doesn't exist. 

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/13045986-a640e302-9f27-492a-b35e-7d9f691122f2?action=collection%2Ffork&collection-url=entityId%3D13045986-a640e302-9f27-492a-b35e-7d9f691122f2%26entityType%3Dcollection%26workspaceId%3D720b7099-313c-4b12-b016-e0353ac7c134)

# Code Structure
```
src
app.js - Entry point of the app.
├── routes
│   └── taskinfo.js  - Implements the different endpoints. 
└── utils
    └── validator.js - Contains a utility class that implements the validation logic.
```