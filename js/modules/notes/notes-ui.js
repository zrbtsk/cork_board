import { notes } from "../../api.js";
import { DOM } from "../../config/constants.js";
import { openPanel } from "../panel.js";

export function addNotesUI(note) {
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    DOM.board.appendChild(noteDiv);

    const noteBtn = document.createElement('div');
    noteBtn.className = 'note__button';
    noteDiv.appendChild(noteBtn);

    const noteTitle = document.createElement('span');
    noteTitle.className = 'note__title';
    noteDiv.appendChild(noteTitle);

    noteDiv.id = note.id;
    noteDiv.style.backgroundColor = note.colorList;
    noteDiv.style.left = note.left + 'px';
    noteDiv.style.top = note.top + 'px';
    noteDiv.style.width = note.width + 'px';
    noteDiv.style.height = note.width + 10 + 'px';
    noteDiv.style.transform = `rotate(${note.rotate}deg)`;

    noteTitle.textContent = note.title;
    noteBtn.style.backgroundColor = note.colorButton;

}
export function clickNoteUI(color) {
    openPanel()
    const notesDiv = document.querySelectorAll('.note');
    DOM.btnsPanel.forEach((btn) => {
        btn.classList.remove('disabled')
    });
    console.log( DOM.notes)
    notesDiv.forEach((note)=> {
        console.log('nooo policia')
        note.style.display='none'
    });
    DOM.btnAdd.classList.add('panel__btn--before')
    DOM.modal.style.display = 'block';
    DOM.modalContent.style.display = 'block';
    DOM.modalContent.style.backgroundColor = color;
    DOM.modalTitle.style.display = 'grid';
    DOM.modalPalette.style.display = 'none';
    DOM.modalResizing.style.display = 'none';
}
export function createNoteUI(index) {
    const noteDiv = document.querySelectorAll('.note');

    noteDiv.forEach((note) => {

        if (Number(note.id) === Number(index)) {
            console.log('ooo eeee');

            note.style.backgroundColor = notes[index].colorList;
            note.style.left = notes[index].left + 'px';
            note.style.top = notes[index].top + 'px';
            note.style.width = notes[index].width + 'px';
            note.style.height = notes[index].height + 'px';
            note.style.transform = `rotate(${notes[index].rotate}deg)`

            const button = note.querySelector('.note__button');
            if (button) {
                button.style.backgroundColor = notes[index].colorButton;
            }
            const title = note.querySelector('.note__title');
            if (title) {
                title.textContent = notes[index].title;
            }

            console.log(note)

        }
    })
}