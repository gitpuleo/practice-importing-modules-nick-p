

function addTask(tasks, task) {
    tasks.push(task);
    console.log(`${task} has been added to your tasks list.`);
}

function listTasks(tasks) {
    console.log("Your Current Task List:\n");
    tasks.forEach(task => console.log(task));
}

module.exports = {
    addTask: addTask,
    listTasks: listTasks
};
