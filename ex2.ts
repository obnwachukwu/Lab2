interface myInterface{
    TaskArray:Array<string>;
    addTasks(tasks: string): number;
    listAllTasks(): void;
    deleteTask(task: string): number;
}

class myTodo implements myInterface{
    TaskArray:Array<string> = [];
    
    addTasks(tasks: string): number {
        let length: number = this.TaskArray.push(tasks);
        console.log(tasks + " added to my Tasks");
        return length;
    }


    //  addTask(task: string): number{
    //     let length: number = this.TaskArray.push(task);
    //     console.log("the task " + task + "was added");
    //     console.log("\n");
    //     return length;
    // }
    
     listAllTasks(): void{
        this.TaskArray.forEach(
            (element)=>{
                console.log(element + " is in the tasks list")
            }
        );
        }
   
    
     deleteTask(task: string): number{
        let index:number = this.TaskArray.indexOf(task,0);
    
        if(index != 0){
            this.TaskArray.slice(index, 1);
            console.log(task + " remove from my Tasks list.")
        } else{
            console.log(task  + " is not in my Tasks list.")
        }
            return this.TaskArray.length;
        }

       
}

let myTask = new myTodo;
myTask.addTasks("cook");
myTask.addTasks("ride");
myTask.addTasks("work");
myTask.listAllTasks();