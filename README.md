# Where it's @

Appen använder sig av 3 stycken React bibliotek.

-   FontAwesomeIcon
-   Swiper
-   Framer Motion

## FontAwesomeIcon

Detta bibliotek ger dig tillgång till "alla" av FontAwesomes ikoner så du kan importera dem direkt utan att behöva ha en massa ikoner i projektets asset-mapp. Biblioteket ger dig också möjligheten att styla ikonerna direkt i koden utan att behöva skaffa en ny ikon för varje ny variation.

Biblioteket är bekvämt att använda då det bara är att leta upp en passande ikon från FontAwesome, importera den och sedan styla den direkt med CSS. Den begränsning som finns är dock att ikonerna är uppdelade mellan de som är gratis och de som kräver en proversion. Gratisikonerna kan användas så mycket man vill men proversionen kräver en årlig kostnad för att få tillgång till.

I min app används ikoner för förstorningsglas, bakåtpil, biljett samt plus- och minussymbolen. Enkla ikoner som jag inte behöver krångla med hur de ser ut.

## Swiper

Detta bibliotek öppnar upp för att kunna swipa mellan sidor och komponenter på appen/webbsidan. Då både för att navigera fram och tillbaka samt för att bläddra mellan exemelvis olika bilder. Övergången blir också animerad.

Då appen som skapas är tänkt som en mobilapp så är Swiper ett logiskt val för att navigera mellan vissa sidor. Detta då mobilanvändare har som vana att kunna swipa sig fram.

I min app används Swiper för att navigera mellan tre av fem sidor. Swiper används även för att swipa mellan biljetterna som användaren köpt. Det blir visuellt mer intressant att se biljetterna staplade på varandra samt att de förflyttas upp och ned via rörelse än att bara statiskt gå från en biljett till en annan. Användarupplevelsen blir bättre.

## Framer Motion

Detta bibliotek gör det enkelt att kunna lägga på en massa olika animationseffekter på komponenter och element. Allt från förflyttningar, rotation, synlighet, respons från användarens input med mera.

Saker som rör på sig på ett snyggt sätt kan både användas för att fånga användarens uppmärksamhet samt göra sidan "roligare" att besöka. En användares upplevelse är inte bara begränsad till hur lätt/svårt det är att nå sitt mål utan även "oooh"-upplevelsen de kan få av att se animationerna.

I min app så används en Framer Motion för att förtydliga för användaren när de lägger till biljetter i varukorgen. Ett litet pop-up meddelande dyker upp som ger feedback på vad användaren gör. Lite animation och rörelse gör meddelandet lite trevligare.
