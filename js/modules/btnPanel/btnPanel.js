import { DOM } from '../../config/constants.js';
import { movingPalette } from '../moving.js';
import { addNotes } from '../notes/notes.js'
import { clearBeforeClick, clickPaletteBtn, clickResizingBtn, clickTextBtn } from './btnPanel-ui.js';

export function initBtns() {
    DOM.btnsPanel.forEach((btn) => {
        btn.addEventListener('click', function () {
            clearBeforeClick();

            if (btn.classList.contains('btnAdd')) {
                addNotes();
            }
            if (btn.classList.contains('btnText') && !btn.classList.contains('disabled')) {
                clickTextBtn();
            }
            if (btn.classList.contains('btnPalette') && !btn.classList.contains('disabled')) {
                clickPaletteBtn();
                movingPalette();
            }
            if (btn.classList.contains('btnResizing') && !btn.classList.contains('disabled')) {
                clickResizingBtn();
                // movingResizeBlock();
            }
        })

    })
}