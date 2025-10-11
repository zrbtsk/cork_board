import { notes } from '../api.js';
import { DOM } from '../config/constants.js';
import { createNoteUI } from './notes/notes-ui.js';

export function initText(id) {
    const note = notes[id];

    DOM.modalTitleText.textContent = note.title;
    DOM.inputTitle.value = note.title;
    DOM.textAreaText.value = note.text;
}

let currentSaveHandler = null;

export function createText(id) {
    const note = notes[id];

    if (currentSaveHandler) {
        DOM.btnSaveText.removeEventListener('click', currentSaveHandler);
    }

    currentSaveHandler = function() {
        note.title = DOM.inputTitle.value;
        note.text = DOM.textAreaText.value;
        createNoteUI(id);
    };

    DOM.btnSaveText.addEventListener('click', currentSaveHandler);
}

