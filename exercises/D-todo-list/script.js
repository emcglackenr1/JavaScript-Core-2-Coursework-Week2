

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);

function addTask(todo) {
  let span = document.createElement("span");
  span.className = "badge bg-primary rounded-pill";

  let completedButton = document.createElement("i");
  completedButton.className = "fa fa-check";

  let deleteButton = document.createElement("i");
  deleteButton.className = "fa fa-trash";

  span.appendChild(completedButton);
  span.appendChild(deleteButton);

  let task = document.createElement("li");
  task.className =
    "list-group-item d-flex justify-content-between align-items-center";
  task.innerText = todo.task;
  task.appendChild(span);

  if (todo.completed) {
    task.style = "text-decoration: line-through;";
  }

  let list = document.getElementById("todo-list");
  list.appendChild(task);
}
