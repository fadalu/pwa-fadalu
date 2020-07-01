class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; 2020 Fátima Daniela Luna Rodríguez.`;
    }
}
customElements.define("mi-footer", MiFooter);