import { DOM, state } from '../config/constants.js';


export function initModal() {
    function handleCloseModal() {
        closeModal();
        state.visiblePanel = true; 
    }
    
    DOM.modalClose.addEventListener('click', handleCloseModal);
    
    DOM.btnClose.forEach((btn) => {
        btn.addEventListener('click', handleCloseModal);
    });
}

export function closeModal() {

    console.log(state.visiblePanel)
    state.visiblePanel = false;

    DOM.modal.style.display = 'none';
    DOM.modal.style.zIndex = '998';
    DOM.modalContent.style.display = 'none';
    DOM.modalTitle.style.display = 'none';
    DOM.modalText.style.display = 'none';

    DOM.panelFlag.classList.toggle('panel__flag--open');
    DOM.panelFlag.classList.toggle('panel__flag--close');
    DOM.panel.classList.toggle('openPanel');
    DOM.panel.classList.toggle('closePanel');
    DOM.iconOpenPanel.classList.toggle('showIcon');

    DOM.btnsPanel.forEach((btn) => {
        btn.classList.remove('panel__btn--before')
        if (!btn.classList.contains('btnAdd')) {
            btn.classList.add('disabled')
        }
    });
}
