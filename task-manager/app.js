const fileHandler = require('./fileHandler');
const taskManager = require('./taskManager');
const path = require('path');




/*
1) load existing tasks from a file named tasks.json
2) Add new tasks to the list
3) List all tasks
4) Save the updated task list back to the file


*/

//Carrie's solution vvv

const tm = require('./taskManager');
const { saveTasks, loadTasks } = require('./fileHandler');
const path = require('path');

// Build file path
const filepath = path.join(__dirname, 'tasks.json');
// const filepath = __dirname + "/" + "tasks.json";
console.log(filepath);

// Load tasks from tasks.json
let allTasksArray = loadTasks(filepath);
console.log(allTasksArray);



//v Add tasks to list to check functionality