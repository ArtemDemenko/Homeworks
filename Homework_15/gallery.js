const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';
const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos'


const taskList = document.getElementById('albumList');
const albumItemTemplate = document.getElementById('albumItemTemplate').innerHTML;

let albumList = [];


// taskList.addEventListener('click', onAlbumClick);

getAlbum();


function getAlbum() {
    fetch(ALBUMS_URL)
        .then((res) => res.json())
        .then(setData);
}

function setData(data) {
    console.log(data);
    albumList = data;

    renderData(data);
}

function renderData(data) {
    data.forEach(addTask);
}

// function onAlbumClick() {
//     fetch(PHOTOS_URL)
//     .then((res) => res.json())
//     .then(albumClickIndex);
// }

function addTask(task) {
    const html = albumItemTemplate
        .replace('{{id}}', task.id)
        .replace('{{title}}', task.title)
        
    const newTaskEl = htmlToElement(html);
    taskList.appendChild(newTaskEl);
}




function albumClickIndex(el) {
    const albumId = el.dataset.albumId;
    console.log(albumId);

    todosList = todosList.filter((task) => task.id != taskId);

}

function htmlToElement(html) {
    const template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}