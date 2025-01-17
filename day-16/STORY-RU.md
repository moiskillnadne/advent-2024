
# День 16: Лабиринт Оленей

Настало время Олимпиады Оленей! В этом году главное событие — Лабиринт Оленей, где соревнуются за наименьший результат.

Вы и Историки прибываете как раз к началу события, чтобы поискать Главного. Почему бы не посмотреть немного, верно?

Олени стартуют с Плитки Старт (обозначена S) и направляются на восток, чтобы добраться до Плитки Финиш (обозначена E). Они могут двигаться вперёд на одну плитку за раз (увеличивая их результат на 1 очко), но никогда не заходят в стену (#). Также они могут поворачиваться по часовой или против часовой стрелке на 90 градусов за раз (увеличивая их результат на 1000 очков).

Чтобы выбрать лучшее место для наблюдения, вы берёте карту (ваш ввод задачи) из ближайшего киоска. Например:

```
###############
#.......#....E#
#.#.###.#.###.#
#.....#.#...#.#
#.###.#####.#.#
#.#.#.......#.#
#.#.#####.###.#
#...........#.#
###.#.#####.#.#
#...#.....#.#.#
#.#.#.###.#.#.#
#.....#...#.#.#
#.###.#.#.#.#.#
#S..#.....#...#
###############
```

Существует множество путей через этот лабиринт, но использование любого из лучших путей приведёт к результату всего 7036. Это можно достичь, сделав в общей сложности 36 шагов вперёд и повернув 90 градусов 7 раз:

```
###############
#.......#....E#
#.#.###.#.###^#
#.....#.#...#^#
#.###.#####.#^#
#.#.#.......#^#
#.#.#####.###^#
#..>>>>>>>>v#^#
###^#.#####v#^#
#>>^#.....#v#^#
#^#.#.###.#v#^#
#^....#...#v#^#
#^###.#.#.#v#^#
#S..#.....#>>^#
###############
```

Вот второй пример:

```
#################
#...#...#...#..E#
#.#.#.#.#.#.#.#.#
#.#.#.#...#...#.#
#.#.#.#.###.#.#.#
#...#.#.#.....#.#
#.#.#.#.#.#####.#
#.#...#.#.#.....#
#.#.#####.#.###.#
#.#.#.......#...#
#.#.###.#####.###
#.#.#...#.....#.#
#.#.#.#####.###.#
#.#.#.........#.#
#.#.#.#########.#
#S#.............#
#################
```

В этом лабиринте лучшие пути стоят 11048 очков; следование одному из таких путей выглядело бы так:

```
#################
#...#...#...#..E#
#.#.#.#.#.#.#.#^#
#.#.#.#...#...#^#
#.#.#.#.###.#.#^#
#>>v#.#.#.....#^#
#^#v#.#.#.#####^#
#^#v..#.#.#>>>>^#
#^#v#####.#^###.#
#^#v#..>>>>^#...#
#^#v###^#####.###
#^#v#>>^#.....#.#
#^#v#^#####.###.#
#^#v#^........#.#
#^#v#^#########.#
#S#>>^..........#
#################
```

Обратите внимание, что путь, показанный выше, включает один поворот на 90 градусов в качестве самого первого движения, поворачивая оленя с востока на север.

Анализируйте карту тщательно. Каков минимальный результат, который олени могли бы получить?

## Часть Вторая

Теперь, когда вы знаете, как выглядят лучшие пути, вы можете определить лучшее место для сидения.

Каждая плитка, не являющаяся стеной (S, . или E), оборудована местами для сидения вдоль её краёв. Определение, какая из этих плиток является лучшим местом, зависит от множества факторов (насколько удобны сидения, насколько близко находятся туалеты, не загораживает ли вид колонна и т.д.), но самый важный фактор — находится ли плитка на одном из лучших путей через лабиринт. Если вы сядете в другом месте, вы пропустите всё самое интересное!

Таким образом, вам нужно определить, какие плитки являются частью любого из лучших путей через лабиринт, включая плитки S и E.

В первом примере 45 плиток (обозначены O) являются частью хотя бы одного из лучших путей:

```
###############
#.......#....O#
#.#.###.#.###O#
#.....#.#...#O#
#.###.#####.#O#
#.#.#.......#O#
#.#.#####.###O#
#..OOOOOOOOO#O#
###O#O#####O#O#
#OOO#O....#O#O#
#O#O#O###.#O#O#
#OOOOO#...#O#O#
#O###.#.#.#O#O#
#O..#.....#OOO#
###############
```

Во втором примере 64 плитки являются частью хотя бы одного из лучших путей:

```
#################
#...#...#...#..O#
#.#.#.#.#.#.#.#O#
#.#.#.#...#...#O#
#.#.#.#.###.#.#O#
#OOO#.#.#.....#O#
#O#O#.#.#.#####O#
#O#O..#.#.#OOOOO#
#O#O#####.#O###O#
#O#O#..OOOOO#OOO#
#O#O###O#####O###
#O#O#OOO#..OOO#.#
#O#O#O#####O###.#
#O#O#OOOOOOO..#.#
#O#O#O#########.#
#O#OOO..........#
#################
```

Анализируйте карту дальше. Сколько плиток являются частью хотя бы одного из лучших путей через лабиринт?
