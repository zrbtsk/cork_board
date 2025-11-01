import { notes} from '../../api.js'
import { increaseNote, initResizing } from '../resizing.js';
import { createText, initText } from '../text.js';
import { createColor } from '../palette.js';
import { addNotesUI, clickNoteUI} from './notes-ui.js';
import { DOM } from '../../config/constants.js';
import { closeModal } from '../modal/modal-ui.js';
import { openPanel } from '../panel.js';

let noteHandlersInitialized = false;

export function initNotes() {
    notes.forEach((note) => {
        addNotesUI(note);
    });
    
    if (!noteHandlersInitialized) {
        initNoteHandlers();
        noteHandlersInitialized = true;
    }
}

function handleDoubleClick(id) {
    const note = notes.find((noteId) => noteId.id === id);

    console.log('dble yes', note);

    clickNoteUI(note.colorList);
    initText(id);
    createText(id);
    createColor(id);
    increaseNote(id);
    removeNote(id);
}

function initNoteHandlers() {
    const notesContainer = document.querySelector('.board'); 
    
    notesContainer.addEventListener('dblclick', function(e) {
        const noteElement = e.target.closest('.note'); 

        if (noteElement) {
            const noteId = noteElement.id; 
            handleDoubleClick(noteId);
        }
    });
}

export function addNotes() {

    const newNote = {
        id: generateId(),
        title: 'Тут надо поменять',
        text: 'Место для твоей заметки',
        colorButton: '#415111',
        colorList: '#D2E186',
        left: 360,
        top: 220,
        width: 50,
        height: 60,
        rotate: 0,
    };
    notes.push(newNote);

    console.log('push addNotes', notes)

    addNotesUI(newNote);
    initResizing();
}

let currentRemoveHandler = null;
export function removeNote(id) {
if (currentRemoveHandler) {
        DOM.btnTrash.removeEventListener('click', currentRemoveHandler);
    }


currentRemoveHandler = function () {
    const notesDOM = document.querySelectorAll('.note');
    
const index = notes.findIndex((note) => note.id === id);
    if (index !== -1) {
        notes.splice(index, 1);
        notesDOM.forEach((note) => {
    if (note.id === id) {
        note.remove();
    }
});
    }
    openPanel(false);
    closeModal();
}

DOM.btnTrash.addEventListener('click', currentRemoveHandler);

}
export function generateId() {
    return crypto.randomUUID(); 
}