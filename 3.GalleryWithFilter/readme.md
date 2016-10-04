# JavaScript - Warsztaty - Galleria z filtrem

Zadanie będzie polagało na napiszaniu galerii, w której będziemy mogli chować obrazki z odpowiednimi tagami.
Po wpisaniu odpowiedniego tagu w inpucie i kliknięciu guzika, obrazki które są opisane tym tagiem powinny zniknąć/pojaawić się

Po skończeniu zadania pamiętaj o zrobieniu commita.

## Punkt 1
Zapoznaj się z kodem HTML i CSS dodanym do zadania. Do zrobienia galerii zazwyczaj używamy diva o odpowiednim id.

## Punkt 2
Przygotuj do pracy plik JavaScript. Dopisz event ```DomContentLoaded``` i sprawdź czy działa (np poprzez wyświetlenie w konsoli napisu "Działa").
Następnie znajdź następujące elementy i zapisz je do zmiennych:

1. Wszystkie obrazki należące do galerii (zapisz do tablicy),
2. Guzik odpowiedzialny za znikanie obrazków,
3. Guzik odpowiedzialny za pojawianie się obrazków,
4. Input, do którego bedziemy wprowadzać tagi.

Wypisz zmienne w konsoli, żeby upewnić się czy zawierają poprawne dane.

## Punkt 3
Do guzików dopisz eventy na kliknięcie. Sprawdź czy działają poprzez wyświetlnienie w konsoli jakiegoś napisu.

## Punkt 4
Zmień eventy w taki sposób, żeby wyświetlały tekst który wpisany jest w inpucie, a następnie czyściły go.
Zapisz ten tekst do zmiennej.

## Punkt 5
Zmień eventy, w taki sposób, żeby dodatkowo wypisywały wszystkie tagi dla wszystkich obrazków (czyli musisz użyć pętli i data-setu).

## Punkt 6
Zmień eventy, w taki sposób, żeby wyświetlały tylko i wyłącznie tagi, w których znajduje się napis z inputu (uzyj do tego ```substring```).

## Punkt 7
Zmień eventy, w taki sposób, żeby zamiast wyświetlać tag dla obrazka (cały czas tylko i wyłącznie dla tych, które mają odpowiedni tag), obrazek ten dostawał lub tracił (w zależności od guzika) klasę ```invisible```.

## Punkt 8
Sprawdź jak działa twoja strona. Widzisz jakieś problemy?
