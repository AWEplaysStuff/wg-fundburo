# Fundbüro-System des Wilhelm-Gymnasiums Braunschweig

Dieses Repository enthält ein fertiges MERN-Stack-System (MongoDB, Express, React, Node.js) zum Verwalten von gefundenen und verlorenen Gegenständen am Wilhelm‑Gymnasium Braunschweig.

## Projektstruktur
- `server/` – Node.js Backend mit Express und MongoDB
- `client/` – React Frontend

## Installation
1. Repository klonen und Abhängigkeiten installieren
   ```bash
   git clone https://github.com/AWEplaysStuff/wg-fundburo/tree/codex/fundb%C3%BCro-system-f%C3%BCr-wilhelm-gymnasium-anpassen
   cd wg-fundburo
   cd server && npm install
   cd ../client && npm install
   ```
2. In `server/.env` folgende Variablen definieren
   ```
   mongoURI=<Ihre MongoDB URL>
   SECRETKEY=<geheimes JWT Token>
   ADMIN_EMAIL=<admin E‑Mail>
   ADMIN_PASSWORD=<admin Passwort>
   ```
3. Admin-Benutzer erzeugen
   ```bash
   cd server
   node adminSeeder.js
   ```

## Anwendung starten
- Backend
  ```bash
  cd server
  node server.js
  ```
- Frontend in neuem Terminal
  ```bash
  cd client
  npm start
  ```
Die Anwendung läuft anschließend unter `http://localhost:3000`.

## Anmeldung als Admin
Nach dem Ausführen des Seed-Skripts können Sie sich mit den in `.env` angegebenen Zugangsdaten anmelden. Admin‑Benutzer besitzen die Rolle `admin` und können alle Daten einsehen und bearbeiten.

## Lizenz
MIT
