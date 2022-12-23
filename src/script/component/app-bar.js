class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
 
    connectedCallback() {
        this.render();
    }
    
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                color: white;
            }
            h1 {
                text-align:center;
                padding: 16px;
            }
        </style>
        <h1>Gadelog</h1>
        `;
    }
}
 
customElements.define('app-bar', AppBar);