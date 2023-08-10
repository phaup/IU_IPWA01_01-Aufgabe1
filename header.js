// header.js
function renderHeader() {
  return `
    <header>
      <div class="container">
        <nav class="navbar navbar-expand-md navbar-light bg-light">
          <div class="d-flex w-100">
            <div class="order-1 logo">
              <img src="Logo.png" alt="Logo der Non-Profit Organisation EarthGuardians">
            </div>
            <div class="order-md-3 d-flex">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div class="collapse navbar-collapse order-md-2" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="index.html">Startseite</a></li>
                <li class="nav-item"><a class="nav-link" href="Dienstleistungen.html">Dienstleistungen</a></li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Fußabdr&uuml;cke</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="footprints_companies.html">Fußabdruck Unternehmen</a></li>
                    <li><a class="dropdown-item" href="footprints_countries.html">Fußabdruck Länder</a></li>
					<li><a class="dropdown-item" href="Footprints.html">Fußabdruck Gesamt</a></li>
                  </ul>
                </li>
				<li class="nav-item"><a class="nav-link" href="&Uuml;berUns.html">&Uuml;ber Uns</a></li>
                <li class="nav-item"><a class="nav-link" href="Kontakt.html">Kontakt</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  `;
}
