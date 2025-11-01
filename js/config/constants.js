export const DOM = {
    panel: document.querySelector('.panel'),
    panelFlag: document.querySelector('.panel__flag'),
    iconOpenPanel: document.querySelector('.panel__btn--show'),

    notes: document.querySelectorAll('.note'),
    board: document.querySelector('.board'),
    colorBtn: document.querySelectorAll('.modal__palette__container__colorBtn'),
    colorList: document.querySelectorAll('.modal__palette__container__colorList'),

    modal: document.querySelector('.modal'),
    modalContent: document.querySelector('.modal__content'),
    modalTitle: document.querySelector('.modal__content__title'),
    modalTitleText: document.querySelector('.modal__content__title p'),
    modalText: document.querySelector('.modal__content__note'),
    modalClose: document.querySelector('.iconClose'),
    modalPalette: document.querySelector('.modal__palette'),
    modalResizing: document.querySelector('.modal__resizing'),

    inputTitle: document.querySelector('.modal__content__note--title'),
    textAreaText: document.querySelector('.modal__content__note--text'),
    inputSize: document.querySelector('.modal__resizing__inputSize'),
    inputRotate: document.querySelector('.modal__resizing__inputRotate'),


    btnsPanel: document.querySelectorAll('.panel__btn'),
    btnText: document.querySelector('.btnText'),
    btnAdd: document.querySelector('.btnAdd'),
    btnPalette: document.querySelector('.btnPalette'),
    btnResizing: document.querySelector('.btnResizing'),
    btnTrash: document.querySelector('.board__trash'),

    btnSaveText: document.querySelector('.modal__content__note--save'),
    btnClose: document.querySelectorAll('.modal--close'),
    
    containerForBtn: document.querySelector('.modal__palette__container--forBtn'),
    containerForList: document.querySelector('.modal__palette__container--forList'),
}

export const state = {
    visiblePanel: false
};