let userInfo = {
    id: 1,
    name: "Taha",
    tasks: []
};

addEventListener("DOMContentLoaded", function () {
    let get = localStorage.getItem("userTask");
    if (get) {
        let getInfo = JSON.parse(get);
        userInfo = getInfo; 
        renderTasks();
    }
});

let btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", function () {
    addTask();
    localStorage.setItem("userTask", JSON.stringify(userInfo)); 
    console.log(JSON.parse(localStorage.getItem("userTask"))); 
});

function addTask() {
    let toDoText = document.getElementById("toDoText").value;
    if (toDoText) {
        userInfo.tasks.push(toDoText);
        renderTasks(); 
        document.getElementById("toDoText").value = ""; 
    }
}

function renderTasks() {
    const toDoList = document.getElementById("toDoList");
    toDoList.innerHTML = ''; 
    userInfo.tasks.forEach(function (task, index) {
        let taskElement = document.createElement("li");
        taskElement.classList.add("list-group-item");
        taskElement.style.backgroundColor = "gray";
        taskElement.innerText = task;

        taskElement.addEventListener("dblclick", function () {
            deleteTask(index); 
        });

        // Görev tıklandığında yeşile dönme işlevi
        taskElement.addEventListener("click", function () {
            if (taskElement.style.backgroundColor == "green") {
                taskElement.style.backgroundColor = "gray";
                taskElement.style.textDecoration = "none";
            } else {
                taskElement.style.backgroundColor = "green";
                taskElement.style.textDecoration = "line-through";
            }
        });
        let listGroup = document.createElement("ul");
        listGroup.classList.add("list-group");
        listGroup.appendChild(taskElement);
        toDoList.appendChild(listGroup);
    });
}

function deleteTask(index) {
    userInfo.tasks.splice(index, 1);
    renderTasks();
    localStorage.setItem("userTask", JSON.stringify(userInfo));
}
