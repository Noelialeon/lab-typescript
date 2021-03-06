// Iteration 1
// 1. Create an array of strings
let allTask: Array<string> = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task: string): number {
  allTask.push(task)
  console.log(`=========== NEW TASK ===========
    Task "${task}" inserted in the list`);
  return allTask.length;
}
// 3. Create a funct1ion to list all tasks, it must show in the console de task.
function listAllTasks(): void {
  console.log(`=========== ALL TASK ===========`);
  for (let item of this.allTask) {
    console.log(item);
  }
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task: string) {
  let index: number = allTask.indexOf(task);
  allTask.splice(index, 1);
  console.log(`=========== TASK REMOVED ===========
    Task "${task}" removed from the list`);
  return allTask.length;
}

// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
