let TaskArray: string[] = []; //an array of tasks


function addTask(task: string): number{
    TaskArray.push(task);
    console.log("the task " + task + " was added");
    console.log("\n");
    return TaskArray.length;
}

function listAllTask(): void{
    TaskArray.forEach(
        (element)=>{
            console.log(element + " is in the tasks list")
        }
    );
    }

    addTask("cook");//using our functon addTask 
    addTask("ride");
    addTask("work");
    listAllTask();//running the function that lists all the tasks of the array


    function deleteTask(task: string): number{
        let index:number = TaskArray.indexOf(task);

        if(index != 0){
            TaskArray.slice(index, 1);
            console.log(task + " remove from my Tasks list.")
        } else{
            console.log(task  + " is not in my Tasks list.")
        }
        return TaskArray.length;
    }

    
    

    




