import { DOM, state } from '../config/constants.js';


export function initPanel() {
    DOM.panelFlag.addEventListener('click', openPanel);
}

export function openPanel() {
    state.visiblePanel = !state.visiblePanel;
    
    DOM.panelFlag.classList.toggle('panel__flag--open');
    DOM.panelFlag.classList.toggle('panel__flag--close');
    DOM.panel.classList.toggle('openPanel');
    DOM.panel.classList.toggle('closePanel');
    DOM.iconOpenPanel.classList.toggle('showIcon');
}
