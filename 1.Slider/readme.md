# JavaScript - Ćwiczenia - Slider

Zadanie będzie polagało na napisaniu prostego slidera. Ćwiczenie podzielone jest na punkty. Pamiętaj żeby trzymać się dokładnie treści punktów i robić je po kolei.

Po skończeniu zadania pamiętaj o zrobieniu commita.

## Punkt 1
Zapoznaj się z kodem HTML i CSS dodanym do zadania. Do zrobienia slidera zazwyczaj używany odpowiednio ostylowanej listy, w której znajdują się obrazki.
Lista zazwyczaj spełnia następujące zależności:

1. Nie ma żadnych styli,
2. Ma szerokość i wysokość odpowiednią do wyświetlenia jednego obrazka,
3. Wszsytkie obrazki mają tą samą szerokość i wysokość,
4. Wszystkie obrazki poza jednym są niewidoczne.


Dodaj w odpowiednie miejsce klasę ```slider``` w kodzie HTML.

## Punkt 2
Przygotuj do pracy plik JavaScript. Dopisz even ```DomContentLoaded``` i sprawdź czy działa (np. poprzez wyświetlenie w konsoli napisu "Działa").
Następnie znajdź następujące elementy i zapisz je do zmiennych:

1. Guzik next,
2. Guzik prev,
3. Wszystkie elementy listy (zapisz do tablicy),

Dodaj też zmienną liczbową, która będzie określała index obrazka, który jest aktualnie widoczny (na początku będzie to pierwszy obrazek - czyli zmienna będzie wskazywała na index 0).

Wypisz zmienne w konsoli, żeby upewnić się czy zawierają poprawne dane.

## Punkt 3
Po dodaniu klasy ```slider``` znikneły nam wszystkie obrazki. Dodaj do zerowego elemenu naszej listy klasę ```visible```. Użyj odpowiednich zmiennych (czyli tablicy z elementami listy oraz zmiennej, która określa, który element jest widoczny).

Po wejściu na stronę pierwszy obrazek powinien być widoczny.

## Punkt 4
Dodaj do guzików eventy, które zareagują na kliknięcie. Na początku niech wypisują tylko informacje o kliknięciu w konsoli.

## Punkt 5
W evencie odpowiadającym za pokazanie następnego obrazka wykonaj nastepujące czynności:

1. Zabierz obecnie widocznemu obrazkowi klasę ```visible```.
2. Zwiększ zmienną trzymającą index obrazka który jest aktualnie widoczny o jeden.
3. Dodaj obrazkowi który powinien być widoczny klasę ```visible```;

Użyj odpowiednich zmiennych (czyli tablicy z elementami listy oraz zmiennej która określa który element jest widoczny).

## Punkt 6
Wykonaj czynności w evencvie dla guzika pokazującego poprzedni obbrazek analogicznie do punku 5.

## Punkt 7
Sprawdź jak działa twoja strona. Widzisz jakieś problemy związane ze sliderem?

## Punkt 8
W poprzednim punkcie powinieneś zauważyć, że po wielokrotnym naciśnięciu guzika do przodu (albo do tyłu) obrazki znikają ze strony. Dzieje się tak dlatego, że zmienna określająca numer widocznego obrazka przyjmuje niepoprawną wartość (mniejsza od 0 lub większa niż ilość elementów w naszej tablicy).
W eventach dodaj if-a, który sprawdzi czy wartość nie wyszła poza zakres, a jeżeli wyszła to nastawi ją na poprawną wartość (jeżeli zmienna jest mniejsza od 0 naztaw jej 0, a jeżeli wartość jest więcksza lub równa ilości elementów to nastaw ją na ilość elementów - 1).
