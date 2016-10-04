# JavaScript - Warsztaty - Menu

Zadanie będzie polagało na napisaniu prostego menu rozwijanego. Zazwyczaj takie menu tworzy się w liście (gdzie pod-menu znajduje się w zagnieżdżonych listach).
Nasze menu będzie miało dwa poziomy (następne poziomy możecie dorobić podobnie do pierwszego).

Po skończeniu zadania pamiętaj o zrobieniu commita.

## Punkt 1
Zapoznaj się z kodem HTML i CSS dodanym do zadania. Żeby menu zaczeło się poprawnie wyświetlać musisz dodać odpowiednią klasę do odpowiedniego elementu.  

## Punkt 2
Przygotuje do pracy plik JavaScript. Dopisz event ```DomContentLoaded``` i sprawdź czy działa (np poprzez wyświetlenie w konsoli napisu "Działa").
Następnie znajdź następujące elementy i zapisz je do zmiennych:

1. Elementy listy - czyli wszystkie elementy listy głównej (te które są widoczne), bez elementów listy zagnieżdżonych (te które są niewidoczne). Pamiętaj o trzymaniu ich w tablicy.

Wypisz zmienne w konsoli, żeby upewnić się czy zawierają poprawne dane.

## Punkt 3
Do każdego elementu listy (trzymanego w zmiennej) dodaj dwa eventy: ```mouseover``` i ```mouseout```. Wypisz coś w konsoli, żeby sprawdzić że eventy są dobrze podpięte.

## Punkt 4
Zmień eventy, w taki sposób, żeby wyszukiwały podlistę elementu, na który najechaliśmy myszką (czyli zagnieżdzony element ```ul```).

## Punkt 5
Zmień eventy, w taki sposób, żeby wiadomość z punktu 3 była wyświetlana tylko i wyłącznie kiedy wtedy podlista istnieje (czyli zwrócony element jest inny niż ```null```).

## Punkt 6
Zmień event ```mouseover```, w taki sposób, żeby zamiast wyświetlać informację w konsoli powodował że podlista jest widoczna (jeżeli nie wiesz jak to zrobić sprawdź kod CSS, żeby doczytać się w jaki sposób lista staje się niewidoczna).

## Punkt 7
Zmień event ```mouseout```, w taki sposób, żeby zamiast wyświetlać informację w konsoli powodował, że podlista znowu znika.

## Punkt 8
Sprawdź jak działa twoja strona. Widzisz jakieś problemy?
