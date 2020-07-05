fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        enter(data)
        
    });

const listEl = document.getElementById('list');
const template = document.getElementById('template').innerHTML;

function enter(arr) {
    let taskEl = listEl;
    for (let i = 0; i < arr.length; i++) {
        let bodyTask = document.createElement("tr");
        bodyTask.innerHTML = template.replace('{{taskTitle}}', arr[i].title);
        taskEl.appendChild(bodyTask);
       
        if(arr[i].completed == true){
            bodyTask.classList.add('done')
        } else (bodyTask.classList.add('not-done'))
    };
};