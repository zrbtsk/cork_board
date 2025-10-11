import { initPanel } from './modules/panel.js';
import { initResizing } from './modules/resizing.js';
import { initModal } from './modules/modal.js';
import { initBtns } from './modules/btnPanel/btnPanel.js';
import { initNotes } from './modules/notes/notes.js';
import { colorBtn, colorList } from './api.js';
import { initPalette } from './modules/palette.js';

document.addEventListener('DOMContentLoaded', function () {
    initNotes();
    initPanel();
    initBtns();
    initModal();
    initResizing();
    initPalette(colorBtn, colorList);
});