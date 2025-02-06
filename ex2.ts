// Defining the interface for the Todo application
interface myInterface {
    TaskArray: Array<string>; // Array to store tasks
    addTasks(tasks: string): number; // Method to add tasks to the list
    listAllTasks(): void; // Method to list all tasks
    deleteTask(task: string): number; // Method to delete a task
}


class myTodo implements myInterface {
    // Initializing TaskArray as an empty array
    TaskArray: Array<string> = [];

    // Method to add a new task to the TaskArray
    addTasks(tasks: string): number {
        // Push the task into the array and get the new length of the array
        let length: number = this.TaskArray.push(tasks);
        console.log(tasks + " added to my Tasks");
        return length;
    }

    // Method to list all tasks currently in the TaskArray
    listAllTasks(): void {
        // Iterate through each task in TaskArray and print it to the console
        this.TaskArray.forEach(
            (element) => {
                console.log(element + " is in the tasks list");
            }
        );
    }

    // Method to delete a specific task from the TaskArray
    deleteTask(task: string): number {
        // Find the index of the task to be deleted
        let index: number = this.TaskArray.indexOf(task, 0);

        // Check if the task exists in the array (index !== -1)
        if (index !== -1) {
            // Remove the task from the array using slice
            this.TaskArray.splice(index, 1);
            // Log the task removed message
            console.log(task + " removed from my Tasks list.");
        } else {
            // If the task is not found, log a message saying it's not in the list
            console.log(task + " is not in my Tasks list.");
        }

        // Return the current length of the TaskArray after removal
        return this.TaskArray.length;
    }
}

// Creating an instance of myTodo class
let myTask = new myTodo();

// Adding tasks to the TaskArray
myTask.addTasks("cook");
myTask.addTasks("ride");
myTask.addTasks("work");

// Listing all tasks currently in the TaskArray
myTask.listAllTasks();
