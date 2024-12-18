<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do List App</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    #todo-container {
      max-width: 400px;
      margin: auto;
      text-align: center;
    }
    input, button {
      padding: 10px;
      margin: 5px;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      background: #f3f3f3;
      padding: 10px;
      margin: 5px 0;
      display: flex;
      justify-content: space-between;
      border-radius: 5px;
    }
    li button {
      background: #ff5c5c;
      border: none;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div id="todo-container">
    <h1>To-Do List</h1>
    <input type="text" id="task-input" placeholder="Enter a task">
    <button id="add-task-button">Add Task</button>
    <ul id="task-list"></ul>
  </div>

  <script>
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task-button");
    const taskList = document.getElementById("task-list");

    
    addTaskButton.addEventListener("click", () => {
      const task = taskInput.value.trim();
      if (task === "") return; // Ignore empty inputs

      const listItem = document.createElement("li");
      listItem.textContent = task;

      
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => {
        listItem.remove();
      });

      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);

      taskInput.value = ""; // Clear the input field
    });

    
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") addTaskButton.click();
    });
  </script>
</body>
</html>
