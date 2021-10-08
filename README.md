# Installatie handleiding

## Vereisten
|#|Software|Version
|---|---|---
|1. |node| v14.17.1
|2. |npm| 6.14.13
|3. |git| 2.30.1
* A basic understanding of JavaScript and working with a terminal.

## Installatie
### 1. Git clone
Voer een git clone uit om deze repository op je lokale schijf te draaien.  
`git clone https://github.com/lfaoanl/frontend-strava-activities.git`

### 2. Dependencies installeren
Om de benodigde dependencies aan het project te voeren voer je de volgende commando uit vanuit de geclonede repo.  
`npm install`

## Starten

`npm start`  
Dit opent een lokale server op port `:3000`

## Testen

`npm test`  
Om alle tests in `./tests` uit te voeren.

## Demo

Om in te loggen met een Demo account ga je naar `http://localhost:300/?demo`. Er verschijnt dan een anchor tag op de login pagina die automatisch voor je inlogd. Let op dat je niet al bent ingelogd.

## Uitloggen
Om uit te loggen moet je de localStorage leeg gooien. Dit is per browser verschillend maar de makkelijkste manier is `localStorage.clear()` uit te voeren in de JavaScript console. 