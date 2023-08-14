// footer.js

// Funktion, um den Footer der Webseite zu rendern
function renderFooter() {
  // Rückgabe des HTML-Codes für den Footer
  return `
    <!-- Footer-Bereich mit festem Boden (fixed-bottom) und hellen Hintergrund -->
    <footer class="fixed-bottom bg-light">
      <!-- Container für die Anordnung der Inhalte im Footer, vertikal zentriert -->
      <div class="container d-flex align-items-center">
        <!-- Bereich für den Copyright-Hinweis -->
        <div class="mb-0">
          <p>&copy; 2023 CO2-Footprint Webseite der EarthGuardians. Alle Rechte vorbehalten.</p>
        </div>
        <!-- Bereich für die Navigation (Links) im Footer -->
        <nav>
          <!-- Unsortierte Liste für die Links im Footer, in einer Zeile (list-inline) -->
          <ul class="list-inline">
            <!-- Einzelner Listeneintrag (Listenelement) mit Inline-Stil -->
            <li class="list-inline-item"><a href="datenschutzerklaerung.html">Datenschutzerklärung</a></li>
            <li class="list-inline-item"><a href="impressum.html">Impressum</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  `;
}
