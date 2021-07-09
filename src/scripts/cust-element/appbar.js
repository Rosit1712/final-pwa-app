class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="menu">
        <button id="nav-mobile" aria-label="sidenav-btn">&#9776</button>
        <div class="brand-img">
            <img src="./images/heros/logo.png" alt="logo-img">
        </div>
        <h1 class="brand-logo">
        FindMyRest</h1>
        <ul class="nav-menu">
            <li><a href="/#/">Home</a></li>
            <li><a href="/#/favorites/">Favorites</a></li>
            <li><a href="https://www.facebook.com/rositsans/" target="_blank" rel="noopener">About Us</a></li>
        </ul>
    </nav>
    `;
  }
}
customElements.define('app-bar', AppBar);
