
# День 9: Фрагментация Диска
Ещё одно нажатие кнопки переносит вас в знакомые коридоры с дружелюбными амфиподами! Хорошо, что у каждого из вас есть свой личный мини-субмарин. Историки устремляются на поиски Главного, в основном врезаясь прямо в стены.

Пока Историки быстро осваивают управление этими штуками, вы замечаете амфипода в углу, который борется со своим компьютером. Он пытается создать больше непрерывного свободного пространства, уплотняя все файлы, но его программа не работает; вы предлагаете помочь.

Он показывает вам карту диска (ваш ввод задачи), которую он уже сгенерировал. **Например:**

```2333133121414131402```

Карта диска использует плотный формат для представления расположения файлов и свободного пространства на диске. Цифры чередуются, указывая длину файла и длину свободного пространства.

Таким образом, карта диска ```12345``` представляет собой файл длиной один блок, два блока свободного пространства, файл длиной три блока, четыре блока свободного пространства и затем файл длиной пять блоков. Карта диска ```90909``` представляет собой три файла длиной девять блоков подряд (без свободного пространства между ними).

Каждый файл на диске также имеет номер ID на основе порядка файлов до их перестановки, начиная с ID 0. Таким образом, карта диска ```12345``` имеет три файла: файл длиной один блок с ID 0, файл длиной три блока с ID 1 и файл длиной пять блоков с ID 2. Используя по одному символу для каждого блока, где цифры — это ID файла, а . — свободное пространство, карта диска ```12345``` представляет собой следующие отдельные блоки:

```0..111....22222```

Первый пример выше, ```2333133121414131402```, представляет собой следующие отдельные блоки:

```00...111...2...333.44.5555.6666.777.888899```

Амфипод хочет перемещать блоки файлов по одному, начиная с конца диска, в левый край свободного блока пространства (пока между блоками файлов не останется пробелов). Для карты диска ```12345``` процесс выглядит следующим образом:

```
0..111....22222
02.111....2222.
022111....222..
0221112...22...
02211122..2....
022111222......
```

Первый пример требует несколько больше шагов:

```
00...111...2...333.44.5555.6666.777.888899
009..111...2...333.44.5555.6666.777.88889.
0099.111...2...333.44.5555.6666.777.8888..
00998111...2...333.44.5555.6666.777.888...
009981118..2...333.44.5555.6666.777.88....
0099811188.2...333.44.5555.6666.777.8.....
009981118882...333.44.5555.6666.777.......
0099811188827..333.44.5555.6666.77........
00998111888277.333.44.5555.6666.7.........
009981118882777333.44.5555.6666...........
009981118882777333644.5555.666............
00998111888277733364465555.66.............
0099811188827773336446555566..............
```

Заключительный шаг этого процесса уплотнения файлов — обновление контрольной суммы файловой системы. Чтобы вычислить контрольную сумму, сложите результат умножения позиции каждого из этих блоков на номер ID файла, который он содержит. Левый крайний блок находится в позиции 0. Если блок содержит свободное пространство, пропустите его.

В продолжении первого примера, позиции первых блоков умножаются на их ID следующим образом: 0 * 0 = 0, 1 * 0 = 0, 2 * 9 = 18, 3 * 9 = 27, 4 * 8 = 32 и так далее. В этом примере контрольная сумма равна сумме этих значений, 1928.

Уплотните жёсткий диск амфипода, используя запрошенный им процесс. Какова будет итоговая контрольная сумма файловой системы? (Будьте осторожны, копируя/вставляя ввод для этой задачи; это одна очень длинная строка.)

## Часть Вторая
После завершения сразу становится ясно две вещи. Во-первых, на диске действительно стало гораздо больше непрерывного свободного пространства, как и надеялся амфипод. Во-вторых, компьютер работает значительно медленнее! Возможно, внедрение всей этой фрагментации файловой системы было плохой идеей?

Нетерпеливый амфипод уже придумал новый план: вместо перемещения отдельных блоков, он хотел бы попробовать уплотнить файлы на своём диске, перемещая целые файлы.

На этот раз попытайтесь перемещать целые файлы в самый левый блок свободного пространства, который может вместить файл. Попытайтесь переместить каждый файл ровно один раз в порядке убывания ID файла, начиная с файла с наивысшим ID. Если слева от файла нет пространства, которое могло бы вместить файл, файл не перемещается.

Первый пример из предыдущего раздела теперь проходит иначе:

```
00...111...2...333.44.5555.6666.777.888899
0099.111...2...333.44.5555.6666.777.8888..
0099.1117772...333.44.5555.6666.....8888..
0099.111777244.333....5555.6666.....8888..
00992111777.44.333....5555.6666.....8888..
```

Процесс обновления контрольной суммы файловой системы остаётся тем же; теперь контрольная сумма этого примера равна 2858.

Начните сначала, теперь уплотняя жёсткий диск амфипода, используя этот новый метод. Какова будет итоговая контрольная сумма файловой системы?