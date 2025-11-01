
import { DOM } from '../config/constants.js';
import { notes } from '../api.js'
import { createNoteUI } from './notes/notes-ui.js';


let currentNoteId = null;

function setCurrentNoteId(id) {
    currentNoteId = id;
    const notesDiv = document.querySelectorAll('.note');

    notesDiv.forEach((noteDive) => {
        noteDive.style.zIndex = '5';
        if(noteDive.id === id) {
            noteDive.style.zIndex = '20';
        }
    })
}

export function initPalette(colorBtn, colorList) {
    console.log('yes Yes');

    colorBtn.forEach((color) => {
        const btnColor = document.createElement('div');
        btnColor.className = 'modal__palette__container__colorBtn';
        btnColor.style.backgroundColor = color;
        DOM.containerForBtn.appendChild(btnColor);
    });

    colorList.forEach((color) => {
        const btnList = document.createElement('div');
        btnList.className = 'modal__palette__container__colorList';
        btnList.style.backgroundColor = color;
        DOM.containerForList.appendChild(btnList);
    });

    DOM.containerForBtn.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal__palette__container__colorBtn') && currentNoteId !== null) {
            document.querySelectorAll('.modal__palette__container__colorBtn').forEach(btn => {
                btn.classList.remove('selected');
            });
            e.target.classList.add('selected');

            const currentNote = notes.find((noteId) => noteId.id === currentNoteId);
            
            const color = e.target.style.backgroundColor;
            currentNote.colorButton = color;
            createNoteUI(currentNoteId);
        }
    });

    DOM.containerForList.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal__palette__container__colorList') && currentNoteId !== null) {
            document.querySelectorAll('.modal__palette__container__colorList').forEach(item => {
                item.classList.remove('selected');
            });
            e.target.classList.add('selected');
            
            const currentNote = notes.find((noteId) => noteId.id === currentNoteId);

            console.log(currentNote)

            const color = e.target.style.backgroundColor;
            currentNote.colorList = color;
            createNoteUI(currentNoteId);
        }
    });
}

export function createColor(id) {
    setCurrentNoteId(id);
    
    
    document.querySelectorAll('.modal__palette__container__colorBtn').forEach(btn => {
        btn.classList.remove('selected');
    });
    document.querySelectorAll('.modal__palette__container__colorList').forEach(item => {
        item.classList.remove('selected');
    });
    
    const note = notes.find((noteId) => noteId.id === id);
    if (note.colorButton) {
        document.querySelectorAll('.modal__palette__container__colorBtn').forEach(btn => {
            if (btn.style.backgroundColor === note.colorButton) {
                btn.classList.add('selected');
            }
        });
    }
    
    if (note.colorList) {
        document.querySelectorAll('.modal__palette__container__colorList').forEach(item => {
            if (item.style.backgroundColor === note.colorList) {
                item.classList.add('selected');
            }
        });
    }
}