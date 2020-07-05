const taskInput = document.getElementById('task');
const addBtn = document.getElementById('addTaskBtn');
const template = document.getElementById('template').innerHTML;
const listEl = document.getElementById('list');
const removeBtn = document.getElementById('doneRemoveBtn');

addBtn.addEventListener('click', onAddBtnClick);
listEl.addEventListener('click', onTaskClick)
listEl.addEventListener('click', onRemoveBtnClick);

function onRemoveBtnClick(e) {
       if(e.target.tagName == 'BUTTON'){
        e.target.parentElement.parentElement.remove();
       }
}

function onTaskClick(e) {
    e.target.classList.toggle('done');
}

function onAddBtnClick() {
    addNewTask(taskInput.value);
    
    clearInput();
}

function addNewTask() {
    listEl.innerHTML += template.replace('{{taskInputed}}', taskInput.value);
}

function clearInput() {
    taskInput.value = '';
}

