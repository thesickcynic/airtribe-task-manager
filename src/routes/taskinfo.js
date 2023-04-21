const taskRoutes = require('express').Router();
const validator = require('../utils/validator');
const bodyParser = require('body-parser');

//Initializing the object array that will store the taskData.
let taskData = [
    {
        "id": "1",
        "title": "Assignment",
        "description": "Complete the task manager assignment.",
        "isCompleted": false
    }
]

taskRoutes.use(bodyParser.urlencoded({ extended: false }));
taskRoutes.use(bodyParser.json());

taskRoutes.get('/', (req, res) => {
    res.status(200);
    res.send(taskData);
});

taskRoutes.get('/:id', (req, res) => {
    const required_id = req.params.id;
    const required_task = taskData.find(task => task.id === required_id);
    
    if(required_task) {
        res.status(200);
        res.send(required_task);
    } else {
        res.status(404);
        res.send('Required task not found');
    }
});

taskRoutes.post('/', (req, res) => {
    const taskDetails = req.body;
    const validatorStatus = validator.validateTaskInfo(taskDetails, taskData).status;
    const validatorResponseMessage = validator.validateTaskInfo(taskDetails, taskData).response_message;

    if(validatorStatus === true){
        taskData.push(taskDetails);
        res.status(200);
        res.send(validatorResponseMessage);
        console.log(taskData);
    } else {
        res.status(400);
        res.send(validatorResponseMessage);
    }
});

taskRoutes.put('/:id', (req, res) => {
    let idFromURL = req.params.id;
    let taskDetails = req.body;
    let idMismatch = false;
    if (taskDetails.hasOwnProperty("id")) {
        idFromBody = taskDetails.id;
        if(idFromURL != idFromBody) {
            idMismatch = true;
        }
    } else{
        taskDetails.id = idFromURL;
    }

    const validatorStatus = validator.validateTaskInfoForPut(taskDetails, taskData).status;
    const validatorResponseMessage = validator.validateTaskInfoForPut(taskDetails, taskData).response_message;

    if(validatorStatus === true && !idMismatch){
        let index = taskData.findIndex(task => task.id === idFromURL);
        taskData[index] = taskDetails;
        res.status(200);
        res.send('Task updated succesfully.');
        console.log(taskData);
    } else if (idMismatch){
        res.status(400);
        res.send('Mismatch between ID in URL and body.');
    }   
    else {
        res.status(400);
        res.send(validatorResponseMessage);
    }
})

module.exports = taskRoutes;