// Iteration 1
// 1. Create an array of strings
let allTask: Array<string> = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task: string) {
  allTask.push(task)
  let numberOfTask: number = allTask.length;
  console.log(task + " was added to the list.");
  return numberOfTask;
}
// 3. Create a funct1ion to list all tasks, it must show in the console de task.
function listAllTasks() {
  console.log("all task:");
  
  for (let item of allTask) {
    console.log(item);
  }
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task: string) {
  let index: number = allTask.indexOf(task);
  allTask.splice(index,1);
  let numberOfTask: number = allTask.length;
  console.log(task + " was deleted from the list.");
  return numberOfTask;
  
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
