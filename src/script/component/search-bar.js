import css from 'bootstrap/dist/css/bootstrap.min.css';

class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }
    
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        // console.log(this.shadowDOM.querySelector('#searchElement').value)
        return this.shadowDOM.querySelector('input[name="btnradio"]:checked').value;
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
            label {
                outline:none;
            }
        </style>
        </style>
        <div id="" class="card bg-transparent">
            <div class="row justify-content-md-center gap-2">
                <div class="col-lg-3 col-md-0">
                </div>
                <div class="col-lg-3 col-md-5 col-sm-12 cb shadow p-0">
                    <div class="btn-group w-100" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" value="smartphones">
                        <label class="btn btn-outline-light" for="btnradio1">smartphones</label>
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" value="laptops">
                        <label class="btn btn-outline-light" for="btnradio2">laptops</label>
                    </div>
                </div>
                <div class="col-lg-1 col-md-2 col-sm-12 shadow p-0 bg-transparent">
                    <button id="searchButtonElement" class="btn btn-dark w-100" type="submit">Search</button>   
                </div>
                <div class="col-lg-3 col-md-0">
                </div>
            </div>
        </div>
        `;
        this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);