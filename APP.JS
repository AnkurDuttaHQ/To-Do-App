function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    if (taskText === "") return;
    
    let li = document.createElement("li");
    li.innerHTML = `<span class="task-text">${taskText}</span> <button class="delete-btn" onclick="removeTask(this)">Delete</button>`;
    
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}