var tasks = []; //an array of tasks
function addTask(task) {
    tasks.push(task);
    console.log("the task " + task + "was added\n");
    return tasks.length;
}
function listAllTask() {
    tasks.forEach(function (element) {
        console.log(element + " is in the tasks list");
    });
}
addTask("cook");
addTask("ride");
addTask("work");
listAllTask();
