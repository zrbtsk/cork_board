import { DOM } from "../../config/constants.js";
import { clearModals, modalPalette, modalResizing, modalText } from "../modal/modal-ui.js";

export function printModalText() {
    DOM.btnText.classList.add('panel__btn--before');
    modalText();
};
export function clickPaletteBtn() {
    DOM.btnPalette.classList.add('panel__btn--before');
    modalPalette();
};
export function clickResizingBtn() {
    DOM.btnResizing.classList.add('panel__btn--before');
    modalResizing()
};
export function clearBeforeClick() {
    DOM.btnsPanel.forEach((btn) => {
        btn.classList.remove('panel__btn--before')
    });

    const notesDiv = document.querySelectorAll('.note');
    notesDiv.forEach(note => note.style.display = 'none');

    clearModals();
};