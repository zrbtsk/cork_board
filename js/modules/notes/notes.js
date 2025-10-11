import { notes} from '../../api.js'
import { increaseNote, initResizing } from '../resizing.js';
import { createText, initText } from '../text.js';
import { createColor } from '../palette.js';
import { addNotesUI, clickNoteUI} from './notes-ui.js';

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
    console.log('dble yes');
    clickNoteUI(notes[id].colorList);
    initText(id);
    createText(id);
    createColor(id);
    increaseNote(id);
}

function initNoteHandlers() {
    const notesContainer = document.querySelector('.board'); 
    
    notesContainer.addEventListener('dblclick', function(e) {
        const noteElement = e.target.closest('.note'); 
        if (noteElement) {
            const noteId = parseInt(noteElement.id); 
            handleDoubleClick(noteId);
        }
    });
}

export function addNotes() {
    const index = notes.length;

    const newNote = {
        id: index,
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

    addNotesUI(newNote);
    initResizing();
}