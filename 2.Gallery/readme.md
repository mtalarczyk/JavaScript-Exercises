# JavaScript - Warsztaty - Galeria

Zadanie będzie polagało na napisaniu prostej galerii. Galeria po naciśnięciu któregoś zdjęcia powinna pokazywać to zdjęcie w trybie pełnego ekranu.
Będzie się to diziało poprzez dodanie nowego elementu w chwili, w której ktoś kliknie na którymś obrazku.
Ćwiczenie podzielone jest na punkty. Pamiętaj żeby trzymać się dokładnie treści punktów i robić je po kolei.

Po skończeniu zadania pamiętaj o zrobieniu commita.

## Punkt 1
Zapoznaj się z kodem HTML i CSS dodanym do zadania. Do zrobienia galerii zazwyczaj używany odpowiednio wystylowanej listy w której znajdują się obrazki.
Lista zazwyczaj spełnia następujące zależności:

1. Nie ma żadnych styli,
2. Ma szerokość i wysokość odpowiednią do wyświetlenia jednego obrazka,
3. Wszsytkie obrazki mają tą samą szerokość i wysokość,
5. Wszystkie obrazki są widoczne

Dodaj w odpowiednie miejsce klasę ```gallery``` w kodzie HTML.

## Punkt 2
Przygotuj do pracy plik JavaScript. Dopisz event ```DomContentLoaded``` i sprawdź czy działa (np poprzez wyświetlenie w konsoli napisu "Działa").
Następnie znajdź następujące elementy i zapisz je do zmiennych:

1. Wszystkie elementy listy (zapisz do tablicy),
2. Tag body (będzie nam potrzebny do dodania elementu, który pokaże się na pełnym ekranie).

Wypisz zmienne w konsoli, żeby upewnić się czy zawierają poprawne dane.

## Punkt 3
Do wszystkich obrazków dodaj event reagujący na kliknięcie. Niech na poczatku wypisuje "działa" w konsoli.

## Punkt 4
Zmodyfikuj event w taki sposób, żeby w konsoli wypisywał adres url klikniętego obrazka. Uzyj do tego ```this```.

## Punkt 5
Zauważ że na górze pliku ```app.js``` jest zakomentowany kawałek kodu HTML. Jest to wzór elementu który ma zostać dodany do  strony.
Przeanalizuj go, a następnie zmodyfikuj event dla obrazków w taki sposób, żeby twoży takie elementy i dodawały go do tagu ```body```.
Pamiętaj o tym, żeby pod adres URL obrazka podłożyć odpowiednie dane.

## Punkt 6
Po kliknięciu na obrazek powinien nam się wyświetlać powiększony obrazek + guzik. Musisz teraz dopisać event reagujący na kliknięcie w guzik. Ma on spowodować usunięcie nowo stworzonego elementu z drzewa DOM.

## Punkt 7
Sprawdź jak działa twoja strona. Widzisz jakieś problemy.
