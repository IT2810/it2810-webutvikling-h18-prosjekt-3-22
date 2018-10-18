# it2810-webutvikling-h18-prosjekt-3-22

##  Innhold og funksjonalitet på siden
Siden vår består av en oversiktsside med knapper til hver av underesidene. Hver av knappene har en liten emoji som skal representere hva den tilhørende siden går ut på. Vi har tre undersider: todo, goal og contact. På todo sida skal man kunne legge til og slette todos. Å legge til todos gjøres ved å skrive inn noe i tekstfeltet og trykke på pila på tastaturet. Hvis du ikke har skrevet inn noe i todo feltet, vil du heller ikke kunne legge til en ny todo. Når man har lagt til en todo kan denne slettes ved å trykke på søppelikonet ved siden av det representativet todoen. Går man ut av appen eller tilbake til hjemmesida, vil fortsatt hvilke todos som er valgt lagres og man vil få opp de lagrede todoene når man går tilbake til siden. 

På goal sida kan man sette et mål for hvor mange skritt man har lyst til å gå. Default verdien for hvor mange skritt man har lyst til å gå er satt til 10 000. Hvis man har lyst til å endre på dette kan man sette et nytt mål ved å skrive inn ditt nye mål i tekstfeltet og trykke på pila på tastaturet. Hvor mange skritt du har gått hentes fra din helseapp (???). Hvis du ikke har nådd målet enda for hvor mange skritt du har lyst til å gå, vil det vises en blå sirkel. Hvis du har nådd målet vil det vises en grønn sirkel. 

På contact sida har man mulighet til å legge til og slette kontakter. Kontaktene lagres med navn og telefonnummer og dette vil lagres hvis man går inn og ut av appen. 

## Bruk av teknologi
Vi har brukt expo-cli og expo init for komme igang. I både todo, contacts og goals har vi brukt asyncstorage slik at data lagres på enheten mellom hver gang appen kjører. Av tredjepartskomponenter og bibilotek har vi brukt nativebase og react-navigation. Vi hadde egentlig også tenkt til å bruke react-native-elements og react-native-vector-icons for ikoner, men dette funket av en eller annen grunn ikke. Vi var på sal for å prøve å få hjelp, men ingen av de som satt der klarte å hjelpe oss og ga oss dermed tips om å bare bruke emojis istedenfor. Noe som er litt uheldig siden litt av oppgaven også var å benytte seg av tredjepartskomponenter, men siden dette ikke var noe selv studassene ikke klarte å fikse føler jeg det burde være greit. 

## Testing

## Tutorial
Disse instruksjonene vil gjøre at du får en kopi av prosjektet oppe og går på din lokale maskin for utvikling og testings formål. 

### Forutsetninger
Dette er software du må installere for å kjøre prosjektet på din maskin og hvordan du installerer det

#### Step: 1 Installer Expo CLI
Expo CLI er et verktøy for å utvikle apper med expo. Du trenger også Node.js (versjon 6 eller nyere) installert på maskinen din.
[Last ned den nyeste versjonen av Node.js](https://nodejs.org/en/)

Du kan installere Expo CLI ved å kjøre:

```
npm install -g expo-cli
```

### Installering
En step by step prosess som forteller deg hvordan du development env oppe å kjører

#### Step 1: Klon prosjektet fra github og naviger til mappen du klonet prosjektet i

```
git clone https://github.com/IT2810/it2810-webutvikling-h18-prosjekt-3-22.git
```

#### Step 2: Installer react-navigation

```
npm install react-navigation --save
```

#### Step 3: Installer native-base

```
npm install native-base --save

```

### Kjør programmet

Hvis alt går som forventet og du ikke får noen error kan du kjøre programmet

```
expo start

```


## Samarbeid, bruk av git, koding og leveranse


