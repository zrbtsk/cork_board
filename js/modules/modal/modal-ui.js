import { DOM } from "../../config/constants.js";



export function closeModal() {

    clearModals();
    
    const notesDiv = document.querySelectorAll('.note');
    notesDiv.forEach((note) => {
        note.style.display = 'grid'
    });

    DOM.btnsPanel.forEach((btn) => {

        btn.classList.remove('panel__btn--before');
        btn.classList.add('disabled');

        if (btn.classList.contains('btnAdd')) {
            btn.classList.remove('disabled')
        } 

    });
}

export function modalTitle(color) {
    DOM.modal.style.display = 'block';
    DOM.modalContent.style.display = 'block';
    DOM.modalContent.style.backgroundColor = color;
    DOM.modalTitle.style.display = 'grid';
    DOM.modalPalette.style.display = 'none';
    DOM.modalResizing.style.display = 'none';
}
export function modalText() {
    DOM.modal.style.display = 'block';
    DOM.modalContent.style.display = 'block';
    DOM.modalText.style.display = 'grid';
}

export function modalPalette() {
    DOM.modal.style.display = 'block';
    DOM.modalPalette.style.display = 'grid';

    const notesDiv = document.querySelectorAll('.note');
    notesDiv.forEach((note) => {
        note.style.display = 'grid'
    });
}
export function modalResizing() {
    DOM.modal.style.display = 'block';
    DOM.modalResizing.style.display = 'grid';
    DOM.btnTrash.style.display = 'block';

    const notesDiv = document.querySelectorAll('.note');
    notesDiv.forEach((note) => {
        note.style.display = 'grid'
    });
}
export function clearModals() {
    DOM.modal.style.zIndex = '10';
    DOM.modal.style.display = 'none';
    DOM.modalContent.style.display = 'none';
    DOM.modalTitle.style.display = 'none';
    DOM.modalText.style.display = 'none';
    DOM.modalPalette.style.display = 'none';
    DOM.modalResizing.style.display = 'none';
    DOM.btnTrash.style.display = 'none';
}