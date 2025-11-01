import { DOM, state } from '../config/constants.js';


export function initPanel() {
    DOM.panelFlag.addEventListener('click', openPanel);
}

export function openPanel(boolean = null) {
    state.visiblePanel = boolean || !state.visiblePanel;

    if (boolean === false) {
        DOM.panelFlag.classList.remove('panel__flag--open');
        DOM.panelFlag.classList.add('panel__flag--close');
        DOM.panel.classList.remove('openPanel');
        DOM.panel.classList.add('closePanel');
        DOM.iconOpenPanel.classList.remove('showIcon');
    } else if (boolean === true) {
        DOM.panelFlag.classList.add('panel__flag--open');
        DOM.panelFlag.classList.remove('panel__flag--close');
        DOM.panel.classList.add('openPanel');
        DOM.panel.classList.remove('closePanel');
        DOM.iconOpenPanel.classList.add('showIcon');
    } else {
        DOM.panelFlag.classList.toggle('panel__flag--open');
        DOM.panelFlag.classList.toggle('panel__flag--close');
        DOM.panel.classList.toggle('openPanel');
        DOM.panel.classList.toggle('closePanel');
        DOM.iconOpenPanel.classList.toggle('showIcon');
    }
}
