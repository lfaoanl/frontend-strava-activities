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
9. Responsive Design
10. Uitloggen

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
`git clone https://github.com/lfaoanl/frontend-strava-activities.git`.

Dit doe je door een Terminal/PowerShell op te starten en te navigeren naar de gewenste locatie. Je voert vervolgens de bovenstaande commando uit. Dit commando maakt een directory aan genaamd "frontend-strava-activities" later te benoemen repository.

### 2. Dependencies installeren
Om de benodigde dependencies aan het project te voeren voer je de volgende commando uit vanuit de geclonede repository.  
`npm install`

Deze zal alle packages beschreven in `package.json` installeren in de directory `node_modules`.

## Starten
Vanuit de repository voer je het commando
`npm start` uit.   
Dit opent een lokale webserver op port `:3000`. Standaard wordt hier voor je lokale ipaddress gebruikt. In een standaard setup zal de alias `localhost` of `127.0.0.1` ook beschikbaar zijn.
Waar je vervolgens daadwerkelijk de webserver kan vinden wordt ook getoond na het uitvoeren van de commando.

## Testen
De commando `npm test` kun je gebruiken om de scripts uit te voeren in de directory `/tests`.  

Het resultaat wordt bij elke aanpassing opnieuw getoond in de terminal.

## Demo

Om in te loggen met een Demo account ga je naar [http://localhost:3000/?demo](http://localhost:3000/?demo). Als de link niet werkt heeft npm waarschijnlijk op een andere port/ip address een connectie geopend. In dat geval: ga naar de standaard URL van je geopende webserver en voeg `?demo` aan de url toe.   

Dit is een link naar de standaard login pagina. Er verschijnt dan een anchor tag op de login pagina die automatisch voor je inlogd.  
Let op dat je niet al bent ingelogd.

## Responsive Design
Dit is ontworpen als een webapp voor mobiel. Voor de beste ervaring bekijken in 'Responsive Design Mode' via de developer tools, per browser is dit verschillend.

## Uitloggen
Om uit te loggen moet je de localStorage leeg gooien. Dit is per browser verschillend maar de makkelijkste manier is `localStorage.clear()` uit te voeren in de JavaScript console. 