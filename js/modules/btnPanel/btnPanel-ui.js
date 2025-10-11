import { DOM } from "../../config/constants.js";

export function clickTextBtn() {
    DOM.btnText.classList.add('panel__btn--before');
    DOM.modal.style.display = 'block';
    DOM.modalContent.style.display = 'block';
    DOM.modalText.style.display = 'grid';
};
export function clickPaletteBtn() {
    
    const notesDiv = document.querySelectorAll('.note');
    console.log('click Palette',notesDiv)
    DOM.btnPalette.classList.add('panel__btn--before');
    DOM.modal.style.display = 'block';
    DOM.modalPalette.style.display = 'grid';
    notesDiv.forEach((note)=> {
        
        note.style.display='grid'
    });
};
export function clickResizingBtn() {
    console.log('click resizing')
    const notesDiv = document.querySelectorAll('.note');
    DOM.btnResizing.classList.add('panel__btn--before');
    DOM.modal.style.display = 'block';
    notesDiv.forEach((note)=> {
        console.log('yees resize,note')
        note.style.display='grid'});
    DOM.modalResizing.style.display = 'grid';

};
export function clearBeforeClick() {
    DOM.btnsPanel.forEach((btn) => {
        btn.classList.remove('panel__btn--before')
    });
    DOM.modal.style.display = 'none';
    DOM.modalContent.style.display = 'none';
    DOM.modalTitle.style.display = 'none';
    DOM.modalText.style.display = 'none';
    DOM.modalPalette.style.display = 'none';
    DOM.modalResizing.style.display = 'none';
};