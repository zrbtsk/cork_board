import { notes } from "../../api.js";
import { DOM } from "../../config/constants.js";
import { modalTitle } from "../modal/modal-ui.js";
import { openPanel } from "../panel.js";

export function addNotesUI(note) {
    console.log('create node')
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
    openPanel(true);
    const notesDiv = document.querySelectorAll('.note');
    DOM.btnsPanel.forEach((btn) => {
        btn.classList.remove('disabled');
        if(btn.classList.contains('btnAdd')) {
            btn.classList.add('disabled');
        }
        
    });
    
    notesDiv.forEach((note)=> {
        note.style.display='none'
    });
    modalTitle(color)
}
export function createNoteUI(index) {
    const noteDiv = document.querySelectorAll('.note');

    noteDiv.forEach((note) => {

        if (note.id === index ) {
            console.log('ooo eeee');
            const currentNote = notes.find((noteId) => noteId.id === index);

            note.style.backgroundColor = currentNote.colorList;
            note.style.left = currentNote.left + 'px';
            note.style.top = currentNote.top + 'px';
            note.style.width = currentNote.width + 'px';
            note.style.height = currentNote.height + 'px';
            note.style.transform = `rotate(${currentNote.rotate}deg)`

            const button = note.querySelector('.note__button');
            if (button) {
                button.style.backgroundColor = currentNote.colorButton;
            }
            const title = note.querySelector('.note__title');
            if (title) {
                title.textContent = currentNote.title;
            }

            console.log(note)

        }
    })
}