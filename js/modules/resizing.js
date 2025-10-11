import { DOM } from '../config/constants.js';
import { notes } from '../api.js'
import { createNoteUI } from './notes/notes-ui.js';

export function initResizing() {
    notes.forEach(function (note, index) {
        const currentNote = document.getElementById(index);

        const boardRect = DOM.board.getBoundingClientRect();
        let minusX = 0;
        let minusY = 0;

        function listener(e) {

            let newY = e.clientY - minusY - boardRect.top;
            let newX = e.clientX - minusX - boardRect.left;

            const border = 20;
            const maxX = boardRect.width - currentNote.getBoundingClientRect().width - border;
            const maxY = boardRect.height - currentNote.getBoundingClientRect().height - border;

            note.left = Math.max(border, Math.min(newX, maxX));  // 
            note.top = Math.max(border, Math.min(newY, maxY));   // 

            currentNote.style.left = Math.max(border, Math.min(newX, maxX)) + 'px';
            currentNote.style.top = Math.max(border, Math.min(newY, maxY)) + 'px';

        }

        currentNote.addEventListener('mousedown', function (e) {
            currentNote.style.cursor = 'grabbing';

            minusY = e.clientY - currentNote.getBoundingClientRect().top;
            minusX = e.clientX - currentNote.getBoundingClientRect().left;

            document.addEventListener('mousemove', listener);
            e.preventDefault();
        })
        currentNote.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', listener);
            currentNote.style.cursor = 'grab';
        })
    })

}
let currentWidthHandler = null;
let currentRotateHandler = null;

export function increaseNote(id) {
    const note = notes[id];
    console.log(note);

    if (currentWidthHandler) {
        DOM.inputSize.removeEventListener('input', currentWidthHandler);
    }
    if (currentRotateHandler) {
        DOM.inputRotate.removeEventListener('input', currentRotateHandler);
    }

    currentWidthHandler = function(e) {
        const width = e.target.value;
        note.width = Number(width);
        note.height = Number(width) + 10;
        createNoteUI(id);
    };

    currentRotateHandler = function(e) {
        const rotate = Number(e.target.value);
        note.rotate = rotate;
        createNoteUI(id);
    };

    DOM.inputSize.addEventListener('input', currentWidthHandler);
    DOM.inputRotate.addEventListener('input', currentRotateHandler);
}