const fs = require('fs');


function saveTasks(filepath, tasks){
    let jsonTasks = JSON.stringify(tasksArray);
	fs.writeFileSync(filePath, jsonTasks);
	console.log('\nTasks saved to file.');
}

//^How to use the JSON object?

function loadTasks(filepath){
    if (fs.existsSync(filePath)) {
const jsonData = fs.readFileSync(filePath, 'utf-8');
		let jsData = JSON.parse(jsonData);
		return jsData;
	} else {
		return [];
	}
}

//read on JSON object methods like .parse() ^

module.exports = {
    saveTasks: saveTasks,
    loadTasks: loadTasks
};
