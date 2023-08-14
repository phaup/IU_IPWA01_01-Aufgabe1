// header.js

// Funktion, um den Header der Webseite zu rendern
function renderHeader() {
  // Rückgabe des HTML-Codes für den Header
  return `
    <header>
      <div class="container">
        <!-- Navbar-Komponente mit Bootstrap-Styling -->
        <nav class="navbar navbar-expand-md navbar-light bg-light">
          <div class="d-flex w-100">
            <!-- Logo-Bereich mit Bild des EarthGuardians-Logos -->
            <div class="order-1 logo">
              <img src="Logo.png" alt="Logo der Non-Profit Organisation EarthGuardians">
            </div>
            <!-- Schaltfläche für das Navigationsmenü auf mobilen Geräten -->
            <div class="order-md-3 d-flex">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <!-- Navigationsmenü für Desktop-Ansicht -->
            <div class="collapse navbar-collapse order-md-2" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="index.html">Startseite</a></li>
                <li class="nav-item"><a class="nav-link" href="Dienstleistungen.html">Dienstleistungen</a></li>
                <!-- Dropdown-Menü für Fußabdrücke -->
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Fußabdr&uuml;cke</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="footprints_companies.html">Fußabdruck Unternehmen</a></li>
                    <li><a class="dropdown-item" href="footprints_countries.html">Fußabdruck Länder</a></li>
					          <li><a class="dropdown-item" href="Footprints.html">Fußabdruck Gesamt</a></li>
                  </ul>
                </li>
				        <!-- Weitere Navigationspunkte -->
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
