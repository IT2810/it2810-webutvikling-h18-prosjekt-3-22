# Dokumentasjon

##  Innhold og funksjonalitet på siden
Siden vår består av en oversiktsside med knapper til hver av undersidene. Hver av knappene har en liten emoji som skal representere hva den tilhørende siden går ut på. Vi har tre undersider: todo, goal og contact. På todo sida skal man kunne legge til og slette todos. Å legge til todos gjøres ved å skrive inn noe i tekstfeltet og trykke på pila på tastaturet. Hvis du ikke har skrevet inn noe i todo feltet, vil du heller ikke kunne legge til en ny todo. Når man har lagt til en todo kan denne slettes ved å trykke på søppelikonet ved siden av den representative todoen. Går man ut av appen eller tilbake til hjemmesida, vil fortsatt hvilke todos som er valgt lagres og man vil få opp de lagrede todoene når man går tilbake til todosiden. 

På goal sida kan man sette et mål for hvor mange skritt man har lyst til å gå i løpet av en dag. Default verdien for hvor mange skritt man har lyst til å gå er satt til 10 000. Hvis man har lyst til å endre på dette kan man sette et nytt mål ved å skrive inn dette i tekstfeltet og trykke på pila på tastaturet. Hvor mange skritt du har gått hentes fra din helseapp (???). Hvis du ikke har nådd målet enda for hvor mange skritt du har lyst til å gå, vil det vises en blå sirkel. Hvis du har nådd målet vil det vises en grønn sirkel. 

På contact sida har man mulighet til å legge til og slette kontakter. Kontaktene lagres med navn og telefonnummer og dette vil lagres hvis man går inn og ut av appen. [SKRIV MER?]

## Bruk av teknologi
Vi har brukt expo-cli og expo init for komme igang. I både todo, contacts og goals har vi brukt asyncstorage slik at data lagres på enheten mellom hver gang appen kjører. Av tredjepartskomponenter og bibilotek har vi brukt nativebase og react-navigation. Vi hadde egentlig også tenkt til å bruke react-native-elements og react-native-vector-icons for ikoner, men dette funket av en eller annen grunn ikke. Vi var på sal for å prøve å få hjelp, men ingen av de som satt der klarte å hjelpe oss og ga oss dermed tips om å bare bruke emojis istedenfor. Noe som er litt uheldig siden litt av oppgaven også var å benytte seg av tredjepartskomponenter, men siden dette var noe selv studassene ikke klarte å fikse føler jeg det burde være greit. 

## Testing
Testene ble utviklet med bruk av Jest. Da vi først fikk prosjektet, skulle vi lage testene med både Jest og Enzyme, men bruk av Enzyme sammen med Jest viste seg å være en utfordring. Vi hadde ikke mulighet til å kjøre noen tester med ‘run test’ kommandoen, og gikk derfor til studass for veiledning rundt problemet. Studass hadde ikke skrevet tester tidligere, men informerte om at Enzyme ikke skulle brukes til dette prosjektet allikevel. Det førte til at vi ikke fikk testet så veldig mye mer enn snapshots, men vi har også lagt inn tester på om elementene inne på hver page er tilgjengelig, ved hjelp av en ‘testID’ på hvert element. Før vi fikk vite at Enzyme ikke skulle brukes, hadde vi plan om å skrive tester som faktisk sjekket funksjonaliteten til hvert element, f.eks at dersom man trykket på To Do-knappen, kunne vi forvente at den gikk inn på To Do-siden. Dessverre ble det ikke slik, og vi ble fortalt av studass at det kun var nødvendig med snapshot-testing.
Da vi endret designet med native-base, fungerte plutselig ikke testene lengre. Etter mye googling fant vi ut at Jest og Native-Base ikke er kjempegode venner foreløpig, men at det finnes en snarvei. Snarveien var å legge følgende i package.json-filen.

```
"transformIgnorePatterns": [
"node_modules/(?!react-native|expo|react-navigation|native-base|@shoutem/theme|@shoutem/animation|@shoutem/ui|tcomb-form-native)"]
```

For å kjøre testene må følgende skrives inn i terminalen:

```
npm install --save-dev jest jest-expo babel-jest jest-react-native babel-preset-env babel-preset-react-native react-test-renderer 
```

Etter at alle dependencies er lastet ned skrives følgende i terminalen for å faktisk kjøre testene:

```
npm test
```

## Tutorial
Disse instruksjonene vil gjøre at du får en kopi av prosjektet oppe og går på din lokale maskin for utvikling og testingsformål. 

### Forutsetninger
Dette er software du må installere for å kjøre prosjektet på din maskin og hvordan du installerer det

#### Step: 1 Installer Expo CLI
Expo CLI er et verktøy for å utvikle apper med expo. Du trenger også Node.js (versjon 6 eller nyere) installert på maskinen din.
[Last ned den nyeste versjonen av Node.js](https://nodejs.org/en/)

Du kan installere Expo CLI ved å kjøre:

```
npm install -g expo-cli
```

#### Step 1: Klon prosjektet fra github og naviger til mappen du klonet prosjektet i

```
git clone https://github.com/IT2810/it2810-webutvikling-h18-prosjekt-3-22.git
```


### Installering
En step by step prosess som forteller deg hvordan du installerer alle dependencies

#### Step 1: Installer react-navigation

```
npm install react-navigation --save
```

#### Step 2: Installer native-base

```
npm install native-base --save

```

### Kjør programmet

Hvis alt går som forventet og du ikke får noen error kan du kjøre programmet

```
expo start

```
For å få opp prosjektet på mobilen kan du blant annet laste ned appen expo og enten scanne QR koden eller trykke på prosjektet som kommer opp under "Recently in development"

## Samarbeid, bruk av git, koding og leveranse
Gjennom hele prosjektet har gruppa brukt git og github for å dele kode og holde oversikt over issues. Ved hjelp av github sitt trelloboard har vi hatt et oversiktlig og fint sted for å legge til oppgaver som skulle gjøres, se hvem som jobber med hva og hva som er fullført. I begynnelsen av prosjektet laget vi en del issues ut i fra hvilke funksjonalitet vi ville ha med i appen vår. Dette ble utgangspunktet for prosjektet. Når noen begynte å jobbe med en issue satte man seg opp på denne, slik at hele gruppa kunne se det, og ikke jobbe med det samme. Issues ble også flyttet fra todo til in progress når de ble påbegynt, og til done når de var merget inn. Hver issue har fått en egen branch med navn "feat-'issuenummer'-'tittel'", og hver commit til en branch med melding "#issuenummer beskrivelse". Når en issue var ferdig laget vi en pull request på github hvor de andre kunne se over at alt fungerte som det skulle før det ble merget inn i development-branchen.

