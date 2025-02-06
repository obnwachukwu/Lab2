var myTodo = /** @class */ (function () {
    function myTodo() {
        this.TaskArray = [];
    }
    myTodo.prototype.addTasks = function (tasks) {
        var length = this.TaskArray.push(tasks);
        console.log(tasks + " added to my Tasks");
        return length;
    };
    myTodo.prototype.listAllTasks = function () {
        this.TaskArray.forEach(function (element) {
            console.log(element + " is in the tasks list");
        });
    };
    myTodo.prototype.deleteTask = function (task) {
        var index = this.TaskArray.indexOf(task, 0);
        if (index != 0) {
            this.TaskArray.slice(index, 1);
            console.log(task + " remove from my Tasks list.");
        }
        else {
            console.log(task + " is not in my Tasks list.");
        }
        return this.TaskArray.length;
    };
    return myTodo;
}());
var myTask = new myTodo;
myTask.addTasks("cook");
myTask.addTasks("ride");
myTask.addTasks("work");
myTask.listAllTasks();
