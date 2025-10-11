import { DOM } from "../config/constants.js";


export function movingPalette() {
    
            const modal = DOM.modal.getBoundingClientRect();
            const palette = DOM.modalPalette;
            let minusX = 0;
            let minusY = 0;
    
            function listener(e) {
    
                let newY = e.clientY - minusY - modal.top;
                let newX = e.clientX - minusX - modal.left;
    
                const border = 20;
                const maxX = modal.width - palette.getBoundingClientRect().width - border;
                const maxY = modal.height - palette.getBoundingClientRect().height - border;
    
                palette.style.left = Math.max(160, Math.min(newX, maxX)) + 'px';;  // 
                palette.style.top = Math.max(60, Math.min(newY, maxY)) + 'px';;   // 
    
            }
    
            palette.addEventListener('mousedown', function (e) {
                palette.style.cursor = 'grabbing';
    
                minusY = e.clientY - palette.getBoundingClientRect().top;
                minusX = e.clientX - palette.getBoundingClientRect().left;
    
                document.addEventListener('mousemove', listener);
                e.preventDefault();
            })
            palette.addEventListener('mouseup', function () {
                document.removeEventListener('mousemove', listener);
                palette.style.cursor = 'grab';
            })
        }

        export function movingResizeBlock() {
    
            const modal = DOM.modal.getBoundingClientRect();
            const resize = DOM.modalResizing;
            let minusX = 0;
            let minusY = 0;
    
            function listener(e) {
    
                let newY = e.clientY - minusY - modal.top;
                let newX = e.clientX - minusX - modal.left;
    
                const border = 20;
                const maxX = modal.width - resize.getBoundingClientRect().width - border;
                const maxY = modal.height - resize.getBoundingClientRect().height - border;
    
                resize.style.left = Math.max(160, Math.min(newX, maxX)) + 'px';;  // 
                resize.style.top = Math.max(60, Math.min(newY, maxY)) + 'px';;   // 
    
            }
    
            resize.addEventListener('mousedown', function (e) {
                resize.style.cursor = 'grabbing';
    
                minusY = e.clientY - resize.getBoundingClientRect().top;
                minusX = e.clientX - resize.getBoundingClientRect().left;
    
                document.addEventListener('mousemove', listener);
                e.preventDefault();
            })
            resize.addEventListener('mouseup', function () {
                document.removeEventListener('mousemove', listener);
                resize.style.cursor = 'grab';
            })
        }