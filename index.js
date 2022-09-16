let subject = document.getElementById("subjectBox");
let task = document.getElementById("taskBox");
let message = document.getElementById("message");
let subjectLabel = document.getElementById("subject-label");
let taskLabel = document.getElementById("task-label");
let addTask = document.getElementById("add-task");

task.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      addTask.click();
    }
  });


function newNote() {
    if (subject.value === "" || task.value === "") {
        message.textContent = "You cannot add an empty task"
    } else {
        addNote()
        subject.value = "" 
        task.value = "" 
        message.textContent = "" 
    }
}

let addNote = () => {
    list.innerHTML += `
            <div class="tasks">
            <span class="myMark" onclick="done(this)"></span>
            <input type="checkbox" name="task1" id="checkbox">
            <span class="notes">
                <label id="subject-label" style="font-size: 22px;"><strong>${subject.value + ": "}</strong></label>
                <label id="task-label" style="font-size: 15px;" >${task.value}</label>
            </span>
            <span class="options">
                <i onclick="deleteTask(this)" class="fas fa-trash"></i>
                <i onclick="editTask(this)" class="fas fa-edit"></i>
            </span>
            </div>
`
};


let editTask = (e) => {
    subject.value = e.parentElement.previousElementSibling.firstElementChild.textContent
    task.value = e.parentElement.previousElementSibling.lastElementChild.textContent

    e.parentElement.parentElement.remove()
}

let deleteTask = (e) => {
    e.parentElement.parentElement.remove()
}

let done = (e) => {
    if (e.className === 'myMark') {
        e.className = 'checked'
    } else {
        e.className = 'myMark'
    }
}
