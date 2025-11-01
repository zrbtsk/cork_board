import { DOM } from '../../config/constants.js';
import { movingPalette } from '../moving.js';
import { addNotes } from '../notes/notes.js'
import { clearBeforeClick, clickPaletteBtn, clickResizingBtn, printModalText } from './btnPanel-ui.js';

export function initBtns() {
    DOM.btnsPanel.forEach((btn) => {
        btn.addEventListener('click', function () {
            if (btn.classList.contains('disabled')) return;

            clearBeforeClick();

            if (btn.classList.contains('btnAdd')) {
                const notesDiv = document.querySelectorAll('.note');
                notesDiv.forEach((note) => {
                    note.style.display = 'grid'
                });
                addNotes();
            }
            if (btn.classList.contains('btnText')) {
                printModalText();
            }
            if (btn.classList.contains('btnPalette')) {
                clickPaletteBtn();
                movingPalette();
            }
            if (btn.classList.contains('btnResizing')) {
                clickResizingBtn();
                // movingResizeBlock();
            }

        })

    })
}