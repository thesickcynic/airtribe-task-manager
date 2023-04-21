class validator {
    static validateTaskInfo(taskInfo, taskData) {
        if(taskInfo.hasOwnProperty("id") &&
            taskInfo.hasOwnProperty("title") &&
            taskInfo.hasOwnProperty("description") &&
            taskInfo.hasOwnProperty("isCompleted") &&
            this.validateUniqueTaskId(taskInfo, taskData) &&
            this.validateTitleNotEmpty(taskInfo) &&
            this.validateDescriptionNotEmpty(taskInfo) &&
            this.validateFlagIsBoolean(taskInfo)
            ) {
                return {
                    "status" : true,
                    "response_message" : 'Task created succesfully.'
                };
            } else if (!this.validateUniqueTaskId(taskInfo, taskData)) {
                return {
                    "status" : false,
                    "response_message" : 'Duplicate task ID entered. Unique task ID is required.'
                };
            } else if(!this.validateTitleNotEmpty(taskInfo)) {
                return {
                    "status" : false,
                    "response_message" : 'Title cannot be empty.'
                };
            } else if(!this.validateDescriptionNotEmpty(taskInfo)) {
                return {
                    "status" : false,
                    "response_message" : 'Description cannot be empty.'
                };
            }  else if(!this.validateFlagIsBoolean(taskInfo)) {
                return {
                    "status" : false,
                    "response_message" : 'isCompleted has to be a boolean.'
                };
            }  else{
                return {
                    "status" : false,
                    "response_message" : 'Malformed request, please correct and try again.'
                };
            }
    }

    static validateTaskInfoForPut(taskInfo, taskData) {
        if(taskInfo.hasOwnProperty("id") &&
            taskInfo.hasOwnProperty("title") &&
            taskInfo.hasOwnProperty("description") &&
            taskInfo.hasOwnProperty("isCompleted") &&
            this.validateTitleNotEmpty(taskInfo) &&
            this.validateDescriptionNotEmpty(taskInfo) &&
            this.validateFlagIsBoolean(taskInfo)
            ) {
                return {
                    "status" : true,
                    "response_message" : 'Task created succesfully.'
                };
            } else if(!this.validateTitleNotEmpty(taskInfo)) {
                return {
                    "status" : false,
                    "response_message" : 'Title cannot be empty.'
                };
            } else if(!this.validateDescriptionNotEmpty(taskInfo)) {
                return {
                    "status" : false,
                    "response_message" : 'Description cannot be empty.'
                };
            }  else if(!this.validateFlagIsBoolean(taskInfo)) {
                return {
                    "status" : false,
                    "response_message" : 'isCompleted has to be a boolean.'
                };
            }  else{
                return {
                    "status" : false,
                    "response_message" : 'Malformed request, please correct and try again.'
                };
            }
    }

    static validateUniqueTaskId(taskInfo, taskData) {
        let foundTask = taskData.find(task => task.id === taskInfo.id);
        if (foundTask) {
            return false;
        } else {
            return true;
        }
    }

    static validateTitleNotEmpty(taskInfo) {
        let taskTitle = taskInfo.title;
        if (taskTitle) {
            return true;
        } else {
            return false;
        }
    }

    static validateDescriptionNotEmpty(taskInfo) {
        let taskDescription = taskInfo.description;
        if (taskDescription) {
            return true;
        } else {
            return false;
        }
    }

    static validateFlagIsBoolean(taskInfo) {
        let taskFlag = taskInfo.isCompleted;
        if (typeof(taskFlag) === 'boolean' ) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = validator;