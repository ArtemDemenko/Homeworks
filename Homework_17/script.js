'use strict'
const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers';
const DELETE_BTN_CLASS = 'delete-btn';
const EDIT_NOTE_CONTROL_CLASS = 'edit-note-control';

const addBtn = document.getElementById('addStickerBtn');
const stickerList = document.getElementById('stickerContainer');
const stickerItemTemplate = document.getElementById('stickerItemTemplate').innerHTML;
const stickerEl = document.getElementById('sticker-item');

let notesList = [];

addBtn.addEventListener('click', onAddStickerBtnClick);
stickerList.addEventListener('click', onDeleteBtnClick)
stickerList.addEventListener('focusout', onStickerContainerFocusout);

getData();

function getData() {
    fetch(URL)
        .then((res) => res.json())
        .then(setData);
}

function setData(data) {
    notesList = data;
    renderData(notesList);
}

function renderData(data) {
    data.forEach(addSticker);
}

function onAddStickerBtnClick() {
    postSticker();
}

function postSticker() {
    const sticker = {
        description: ''
    };
    fetch(`${URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(sticker),
    })
        .then((res) => res.json())
        .then((data) => {
            notesList.push(data);
            addSticker(data)
        });
        
}

function addSticker(sticker) {
    const html = stickerItemTemplate
        .replace('{{id}}', sticker.id)
        .replace('{{number}}', sticker.id)
        .replace('{{description}}', sticker.description)

    const newStickerEl = htmlToElement(html);
    stickerList.appendChild(newStickerEl);
}

function htmlToElement(html) {
    const template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}

function onDeleteBtnClick(el) {
    const element = el.target;

    switch (true) {
        case el.target.classList.contains(DELETE_BTN_CLASS):
            deleteNote(element);
            break;
    }
    
}

function deleteNote(id){
    const deletedItem = id.parentElement;
    
    deletedItem.remove()

    fetch(`${URL}/${deletedItem.dataset.stickerId}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    })
}

function onStickerContainerFocusout(e) {
    const element = e.target;

    switch (true) {
        case e.target.classList.contains(EDIT_NOTE_CONTROL_CLASS):
            updateNote(
                element.parentElement.dataset.stickerId,
                element.name,
                element.value
            );
            break;
    }
}

function updateNote(id, name, value) {
    const note = notesList.find((el) => el.id == id);

    note[name] = value;

    fetch(`${URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
    });
}









