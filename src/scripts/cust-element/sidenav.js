class SideNav extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div id="sidenav">
        <ul>
            <li><a href="/#/">Home</a></li>
            <li><a href="/#/favorites/">Favorites</a></li>
            <li><a href="https://www.facebook.com/rositsans/" target="_blank" rel="noopener">About Us</a></li>
        </ul>
    </div>
        `;
  }
}

customElements.define('side-nav', SideNav);
