let TaskArray: string[] = [];

// Function to add a new task to the TaskArray
function addTask(task: string): number {
    // Push the new task into the array
    TaskArray.push(task);
    // Log the task that was added
    console.log("The task " + task + " was added");
    console.log("\n");
    return TaskArray.length;
}

// Function to list all tasks in the TaskArray
function listAllTask(): void {
    // Iterate through each task in the array and log it
    TaskArray.forEach(
        (element) => {
            console.log(element + " is in the tasks list");
        }
    );
}

// Function to delete a task from the TaskArray
function deleteTask(task: string): number {
    // Find the index of the task to delete
    let index: number = TaskArray.indexOf(task);

    // Check if the task exists in the array (index !== -1)
    if (index !== -1) {
        // Remove the task from the array using splice
        TaskArray.splice(index, 1);
        // Log the task that was removed
        console.log(task + " removed from my Tasks list.");
    } else {
        // If the task isn't found, log an error message
        console.log(task + " is not in my Tasks list.");
    }
    // Return the current length of the TaskArray
    return TaskArray.length;
}

// Adding tasks to the list
addTask("cook");
addTask("ride");
addTask("work");

// Listing all tasks
listAllTask();

// Deleting a task
deleteTask("ride");  

// Listing tasks again after deletion
listAllTask();
