# Installatie handleiding

## Inleiding


## Inhoudsopgave
1. Inleiding
2. Inhoudsopgave
3. Vereisten
4. Installatie
5. Starten
6. Starten
7. Testen
8. Demo
9. Uitloggen

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

Om in te loggen met een Demo account ga je naar [http://localhost:3000/?demo](http://localhost:3000/?demo). Als de link niet werkt heeft npm waarschijnlijk op een andere port/ip address een connectie geopend. In dat geval: ga naar de standaard URL van je geopende webserver en voeg `?demo` aan de url toe.   
Dit is een link naar de standaard login pagina. Er verschijnt dan een anchor tag op de login pagina die automatisch voor je inlogd.  
Let op dat je niet al bent ingelogd.

## Uitloggen
Om uit te loggen moet je de localStorage leeg gooien. Dit is per browser verschillend maar de makkelijkste manier is `localStorage.clear()` uit te voeren in de JavaScript console. 