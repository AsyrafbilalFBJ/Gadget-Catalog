import './data-items.js';
import css from 'bootstrap/dist/css/bootstrap.min.css';

class DataList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    set datas(datas) {
        this._datas = datas;
        this.render();
    }
    
    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
        ${css}
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>
        `;
        if(message != null){
            this.shadowDOM.innerHTML += `<h2 class="placeholder">Please select</h2>`;
        } else {
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
        }
    }
    
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            ${css}
            .cb {
                background: rgba(255, 255, 255, 0.11);
                border-radius: 5px;
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(7.9px);
                -webkit-backdrop-filter: blur(7.9px);
            }
        </style>
        `;
        const row = document.createElement('div');
        row.classList.add("row","gap-5","justify-content-md-center");
        this._datas.forEach(data => {
            const col = document.createElement('div');
            col.classList.add("col-lg-2","col-md-5","p-0","cb","card","bg-transparant","shadow");
            const dataItemElement = document.createElement('data-items');
            dataItemElement.data = data;
            
            col.appendChild(dataItemElement);
            row.appendChild(col);
        });
        this.shadowDOM.appendChild(row);
    }
}
 
customElements.define('data-list', DataList);