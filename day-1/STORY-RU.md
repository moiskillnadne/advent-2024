# День 1: Истерия Историка

Главный Историк всегда присутствует на запуске рождественских саней, но его никто не видел уже несколько месяцев! Последнее, что о нем слышали, — он посещал места, имеющие историческое значение для Северного полюса. Группа Старших Историков попросила вас сопровождать их, пока они проверяют места, которые он, по их мнению, мог посетить.

Каждое проверенное место будет отмечено звездой в их списке. Они считают, что Главный Историк должен находиться в одном из первых пятидесяти мест, поэтому, чтобы спасти Рождество, вам нужно помочь им получить пятьдесят звезд в списке до того, как Санта отправится в путь 25 декабря.

Звезды можно заработать, решая головоломки. Каждый день в Адвент-календаре будут открываться две головоломки; вторая головоломка становится доступной после завершения первой. Каждая головоломка дает одну звезду. Удачи!

Вы еще даже не вышли, а группа Старших Эльфов-Историков уже столкнулась с проблемой: их список мест для проверки пока пуст. В конце концов, кто-то предлагает первым делом проверить офис Главного Историка.

Осматривая офис, все подтверждают, что Главного Историка действительно нигде нет. Вместо этого эльфы находят множество заметок и списков исторически значимых мест! Кажется, это те самые планы, которые Главный Историк составлял перед своим исчезновением. Возможно, эти заметки помогут определить, какие места следует проверить.

В офисе Главного Историка значимые места указаны не по названиям, а по уникальным номерам, называемым идентификаторами мест. Чтобы ничего не упустить, Историки делятся на две группы, каждая из которых составляет свой список идентификаторов мест.

Однако возникает одна проблема: **когда оба списка кладут рядом (ваш ввод для головоломки), становится очевидно, что они совсем не похожи. Может быть, вы сможете помочь Историкам привести их списки в соответствие?**

Например:

-	3   4
-	4   3
-	2   5
-	1   3
-	3   9
-	3   3

Возможно, списки отличаются лишь незначительно! Чтобы проверить это, соедините числа попарно и измерьте разницу между ними. Свяжите наименьшее число из левого списка с наименьшим числом из правого списка, затем второе наименьшее из левого списка со вторым наименьшим из правого, и так далее.

Для каждой пары определите, насколько отличаются два числа; вам нужно сложить все эти различия. Например, если вы соедините 3 из левого списка с 7 из правого, разница будет 4; если соедините 9 с 3, разница будет 6.

В приведенном выше примере пары и различия выглядят следующим образом:

-	Наименьшее число в левом списке — 1, а в правом — 3. Разница между ними — 2.
-	Второе наименьшее число в левом списке — 2, а в правом — 3. Разница между ними — 1.
-	Третье наименьшее число в обоих списках — 3, разница между ними — 0.
-	Следующие числа для соединения — 3 и 4, разница — 1.
-	Пятые числа в каждом списке — 3 и 5, разница — 2.
-	Наконец, наибольшее число в левом списке — 4, а в правом — 9; разница между ними — 5.


Чтобы найти общее различие между левым и правым списками, сложите разницы между всеми парами. В приведенном выше примере это 2 + 1 + 0 + 1 + 2 + 5, итого 11!

Ваши реальные левые и правые списки содержат множество идентификаторов мест. Какова общая разница между вашими списками?

## Часть Вторая

Ваш анализ лишь подтвердил худшие опасения: два списка идентификаторов мест действительно очень разные.

Или все-таки нет?

Историки не могут договориться, кто из них допустил ошибки и как читать большинство заметок Главного Историка, но в суматохе вы замечаете одну интересную деталь: многие идентификаторы мест появляются в обоих списках! Возможно, остальные числа вообще не являются идентификаторами мест, а всего лишь результатом неправильного прочтения заметок.

Теперь вам нужно выяснить, как часто каждое число из левого списка встречается в правом. Рассчитайте общий балл схожести, сложив все числа из левого списка, умноженные на количество раз, которое они появляются в правом списке.

Вот те же примерные списки:

-	3   4
-	4   3
-	2   5
-	1   3
-	3   9
-	3   3

Для этих списков процесс подсчета балла схожести выглядит так:

-	Первое число в левом списке — 3. Оно встречается в правом списке трижды, поэтому балл увеличивается на 3 * 3 = 9.
-	Второе число в левом списке — 4. Оно встречается в правом списке один раз, поэтому балл увеличивается на 4 * 1 = 4.
-	Третье число в левом списке — 2. Оно не встречается в правом списке, поэтому балл не увеличивается (2 * 0 = 0).
-	Четвертое число, 1, также не встречается в правом списке.
-	Пятое число, 3, встречается в правом списке трижды; балл увеличивается на 9.
-	Последнее число, 3, также встречается в правом списке трижды; балл снова увеличивается на 9.
Таким образом, для этих списков общий балл схожести составляет 31 (9 + 4 + 0 + 0 + 9 + 9).

Теперь снова рассмотрите свои левые и правые списки. **Каков их балл схожести?**