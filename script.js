function loadTasks() {
    let tableBody = document.getElementById("taskList")
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []
    tableBody.innerHTML = ''

    tasks.forEach((task, index) => {
        let newRow = document.createElement("tr")

        let cell1 = document.createElement("td")
        cell1.textContent = task

        let cell2 = document.createElement("td")
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"

        let cell3 = document.createElement("td")
        let removeBtn = document.createElement("button")
        removeBtn.textContent = "Remove"
        removeBtn.addEventListener("click", function() {
            removeTask(index);
        });
        cell2.appendChild(checkbox)
        cell3.appendChild(removeBtn);
        newRow.appendChild(cell1);
        newRow.appendChild(cell2);
        newRow.appendChild(cell3);
        tableBody.appendChild(newRow);
    })
}

function removeTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.splice(index, 1);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    loadTasks();
}


function addRow() {

    let taskInput = document.getElementById("task")
    let taskText = taskInput.value.trim()

    if (taskText !== '') {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        tasks.push(taskText)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        taskInput.value = ''
        loadTasks()
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addRow();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
});