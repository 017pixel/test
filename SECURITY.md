# Sicherheitsrichtlinie

## 🛡️ Unsere Verpflichtung

Die Sicherheit dieser Anwendung hat für uns Priorität. Wir sind bestrebt, alle Sicherheitslücken zeitnah zu identifizieren und zu beheben.

## 🔑 API-Schlüssel-Sicherheit

Der für die Kommunikation mit der Google Gemini API verwendete API-Schlüssel wird **niemals** auf der Client-Seite (im Browser) offengelegt oder in den Quellcode fest einkodiert.

### Konfiguration des API-Schlüssels

Der Schlüssel wird sicher über Umgebungsvariablen verwaltet, die von der Datei `src/config.ts` gelesen werden. Um die Anwendung auszuführen, müssen Sie den API-Schlüssel in Ihrer Umgebung bereitstellen:

- **Für die lokale Entwicklung:** Erstellen Sie eine `.env`-Datei im Stammverzeichnis Ihres Projekts (auf der gleichen Ebene wie `index.html`) und fügen Sie die folgende Zeile hinzu:
  ```
  API_KEY="IHR_GEMINI_API_SCHLÜSSEL_HIER"
  ```
  Stellen Sie sicher, dass Ihre Build-Tools (wie Vite, Parcel, etc.) so konfiguriert sind, dass sie `.env`-Dateien laden.

- **Für die Produktion/Hosting:** Legen Sie die Umgebungsvariable `API_KEY` in den Einstellungen Ihrer Hosting-Plattform (z.B. Vercel, Netlify, Google Cloud) fest.

Dieser Ansatz stellt sicher, dass Ihr geheimer Schlüssel vom Quellcode getrennt bleibt und nicht in öffentlichen Repositories landet.

## reporting-a-vulnerability Eine Schwachstelle melden

Wenn Sie eine Sicherheitslücke entdecken, bitten wir Sie, uns dies verantwortungsvoll zu melden. Bitte erstellen Sie ein Issue im GitHub-Repository (falls vorhanden) und kennzeichnen Sie es deutlich als Sicherheitsproblem.

Bitte fügen Sie keine sensiblen Informationen in öffentliche Issues ein.

Wir danken Ihnen, dass Sie dazu beitragen, dieses Projekt sicher zu halten!
