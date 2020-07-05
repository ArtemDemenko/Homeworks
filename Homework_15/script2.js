const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';
const ALBUM_CLASS_ACTIVE = 'active';
const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';

const albumList = document.getElementById('albumList');
const albumItemTemplate = document.getElementById('albumItemTemplate').innerHTML;



let album = [];
let photos = [];

// albumList.addEventListener('click', onAlbumClick);

getAlbum();
getPhotos();

function getAlbum() {
    fetch(ALBUMS_URL)
        .then((res) => res.json())
        .then(setAlbum)
        
}

function setAlbum(data) {
    album = data;
    console.log(album)
    // renderAlbum(data);
}

function getPhotos() {
    fetch(PHOTOS_URL)
        .then((res) => res.json())
        .then(setPhotos)
        
}

function setPhotos(data) {
    photos = data;
    console.log(photos)
    // renderAlbum(data);
}

// function renderAlbum(data) {
//     data.forEach(addAlbum);
// }

// function addAlbum(album) {
//     const html = albumItemTemplate
//         .replace('{{id}}', album.id)
//         .replace('{{albumName}}', album.title)

//     const newAlbumEl = htmlToElement(html);
//     albumList.appendChild(newAlbumEl);
// }

// function htmlToElement(html) {
//     const template = document.createElement('template');
//     html = html.trim();
//     template.innerHTML = html;
//     return template.content.firstChild;
// }

// function onAlbumClick(el) {
//     const albumId = el.target.dataset.albumId;
//     console.log(albumId)
//     getPhotos();


// }

// function getPhotos() {
//     fetch(PHOTOS_URL)
//         .then((res) => res.json())
//         .then(photoData);
// }

// function photoData(data) {
//     photos = data;

//     console.log(photos)

//     renderAlbum(data);
// }