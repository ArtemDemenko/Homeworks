const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const TASK_ITEM_CLASS = 'task-item';
const DELETE_BTN_CLASS = 'delete-btn';
const TASK_DONE_CLASS = 'done';

const addTaskForm = document.getElementById('addTaskForm');
const taskNameInput = document.getElementById('taskNameInput');
const taskList = document.getElementById('taskList');
const taskItemTemplate = document.getElementById('taskItemTemplate').innerHTML;


addTaskForm.addEventListener('submit', onAddTaskFormSubmit);
taskList.addEventListener('click', onTaskListClick);

getData();

function getData() {
    fetch(TODOS_URL)
        .then((res) => res.json())
        .then(setData);
}

function setData(data) {
    todosList = data;
    renderData(data);
}

function renderData(data) {
    data.forEach(addTask);
}

function onAddTaskFormSubmit(event) {
    event.preventDefault();
    submitForm();
}

function submitForm() {
    const task = { 
        title: taskNameInput.value, 
        completed: false,
    };
    fetch(TODOS_URL, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(task),
    })
    .then((res)=> res.json())
    .then((data)=>addTask(data))
    
    resetForm();
}

function addTask(task) {
    const html = taskItemTemplate
        .replace('{{id}}', task.id)
        .replace('{{title}}', task.title)
        .replace('{{doneClass}}', task.completed ? TASK_DONE_CLASS : '');

    const newTaskEl = htmlToElement(html);
    taskList.appendChild(newTaskEl);
}

function htmlToElement(html) {
    const template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}

function resetForm() {
    addTaskForm.reset();
}

function onTaskListClick(event) {
    switch (true) {
        case event.target.classList.contains(TASK_ITEM_CLASS):
            toggleTaskState(event.target);
            break;
        case event.target.classList.contains(DELETE_BTN_CLASS):
            deleteTask(event.target.parentElement);
            break;
    }
}

function toggleTaskState(el) {
    const toggled = {
        completed: el.classList.toggle(TASK_DONE_CLASS)
    }
    return fetch(TODOS_URL+'/'+ el.dataset.taskId, {
        method: 'PUT',
        body: JSON.stringify(toggled),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(res => res.json())
}

function deleteTask(el) {
    el.remove();

    return fetch(TODOS_URL + '/' + el.dataset.taskId, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }

    })
        .then(res => res.json())
}

function addTask(task) {
    const html = taskItemTemplate
        .replace('{{id}}', task.id)
        .replace('{{title}}', task.title)
        .replace('{{doneClass}}', task.completed ? TASK_DONE_CLASS : '');

    const newTaskEl = htmlToElement(html);
    taskList.appendChild(newTaskEl);
}

function htmlToElement(html) {
    const template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}

