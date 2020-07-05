const inputTask = document.querySelector('#inputTask');
const confirmTask = document.querySelector('#confirmTask');
const taskList = document.querySelector('#taskList');

confirmTask.addEventListener('click', onConfirmTaskClick);

function onConfirmTaskClick() {
    const li = document.createElement('li');
    li.textContent = inputTask.value;
    taskList.append(li)
    inputTask.value = ""
}
