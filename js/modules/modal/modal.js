import { DOM } from "../../config/constants.js";
import { openPanel } from "../panel.js";
import { closeModal } from "./modal-ui.js";



export function initModal() {
    function handleCloseModal() {
        openPanel(false);
        closeModal();
    }
    
    DOM.modalClose.addEventListener('click', handleCloseModal);
    
    DOM.btnClose.forEach((btn) => {
        btn.addEventListener('click', handleCloseModal);
    });
}
