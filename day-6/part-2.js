const input = "..........#.....................#...................#.......................................................................#....#\n" +
    ".........#................................................................#....##......#........##.............#..................\n" +
    "............#..............#..#.................................................................#.................................\n" +
    "..............#.....#................................................................................#...........................#\n" +
    "............................................................................................................#.............#.......\n" +
    ".........#..........##......................................#......................................#......#...#.......#...#.....#.\n" +
    "..#...................................................#.................#....#........#.....#.................#...................\n" +
    ".....#............#.#..#..................#.......................#................................#......#..............#........\n" +
    "#.................................................................#..........#.......................................#.#..........\n" +
    "..##...................#..................................#..#.................................#...#..#.#.#.........#...##........\n" +
    "..#..........................#...............#...............#..........................#.................................#.......\n" +
    "................##......#......#......................##.............#........#................................#.#..#.............\n" +
    ".............................................................#.#.......................................................#..........\n" +
    ".....##.............................................#.......................#...............#...............#..#...#....#.........\n" +
    ".#.........................#..................................#..........#....#...............................................#...\n" +
    ".......................#..#.............#......#.....#..#................................................#....#........#..........\n" +
    "...............#.....................#................#...................................#......#........................#.......\n" +
    ".......................#....#..............#.......#...........................#....................................#.#...........\n" +
    "..#..................#...........#........................#............#...................#......................#.............#.\n" +
    "..............................................#........................................#..............#...........#.........#.....\n" +
    "............#.................#...#..........#.#.....................##.........#................##...........##............#.....\n" +
    "..................#.......#..................................................................#....#..................#.......#....\n" +
    "..........##......#...............................................#.................................#.......#.............#.......\n" +
    "................................................................................#.......................................#.........\n" +
    ".....#........................#.............##......................#.......#.......#...............................#.............\n" +
    "..#.......................................##........#.............#...............................................#...............\n" +
    ".............#.....#..........................................#...................#.................................#..........#..\n" +
    ".........#............#..#....................#............##.............#..................................#....................\n" +
    "........................................................#..........#.............................#................................\n" +
    "......................#..............................................................................................#............\n" +
    ".......#............#..#........................#...............#.......#.............................#......................#....\n" +
    "...................................................................................#........................#........#..#.....#.#.\n" +
    "..#.......#......#...................................................................................#..#.....#................#..\n" +
    ".....#...#......................................................#...................#.#..............................#.#..........\n" +
    "..#.#.....................#....................#...........#.................#........#..#.........#........#..................#..\n" +
    "....#......#.......#.....................................................##...........#...........................................\n" +
    "........................#......#......................#......#.....................................................#.......#......\n" +
    "............................................................#..........................#...#.#..................................#.\n" +
    ".#..........#..............................#.....#.............................................#..................................\n" +
    "#..........................................#......#.............#...........................................#.........#...........\n" +
    "......#...............................#..#......................#.....#.......#.....#..#......................#.......#...........\n" +
    "........................................#..#.................................#......#.......................#.....................\n" +
    ".#................#...........#.........#.............................................................#...........................\n" +
    ".....#.......................#....................................................................................................\n" +
    ".............#................#............................................#...........#......................#..................#\n" +
    "#........................#....#.....................#................#..##.............#......................#...#...............\n" +
    "....#....................#....#.#..................#...........................................................#......##..........\n" +
    "#............#..........##............................................................#...........................................\n" +
    "...........#..................................#..##................#..............................................................\n" +
    "..........................#..............................................................................#...............#........\n" +
    ".......................................................................#...........#...#...........#..#.....#..................#..\n" +
    ".........................#....#.......#......................#....................................#...............................\n" +
    "..#..................#...................................................#......................................#.................\n" +
    "..............#....##........................................#..................#.................................................\n" +
    "..........................#............................................#...................#............................#.........\n" +
    "......#...............................#..........................#.............................#..................................\n" +
    "...................................#.............................................................#..............#.................\n" +
    ".................#...#.......#..............#.#...........................................#.......#.....#.........................\n" +
    "........................#.......................................#..#.........................#...##...#...........................\n" +
    "....#..#.............#........#.............#..........#......#.........................................#....#..#.................\n" +
    ".......................................................................#...........#......#.....................#...........#.....\n" +
    "#.#..............................#................................................................................................\n" +
    ".#.................................................#...................#..........................................................\n" +
    "..............................#.............#.............................#.....#............#....................................\n" +
    ".#...............................#.......#...##.#.................#............................................#..................\n" +
    ".............#....#.................#.........#..............#....#...............................................................\n" +
    "......................#.#..........................................................................#................#.............\n" +
    ".#....................#.....#................#.....................#..................#......................#....................\n" +
    ".............#.#............#......................................#.......................#......................#...............\n" +
    ".#..#...#...................#.....................................................................................................\n" +
    "...........................................................................#.....................#................................\n" +
    "...........#.............................#......#.................................................................................\n" +
    "..............#.................................................#.##........#..........................#.........................#\n" +
    "..................#...#...........................................................................................................\n" +
    "........#.....#......................#..#....#...#.#......................................#.#............#........................\n" +
    ".....#..#.........................................................#......#.....#...........#..................#...#..........#....\n" +
    "......#.........................................#......................#........#...................................#.............\n" +
    "..........................................#........................#........#.............#........#..#...........................\n" +
    ".......#..............#...................#...........................................#.............#.............................\n" +
    "..............#....#....#......#...........................................................#..........................#...........\n" +
    "..................................................................................#.......#...................#...#....#..........\n" +
    ".................#........................#........#...#.....................................................#........#...........\n" +
    "...........................#......^.#..............#.#.....................#.#...........#....##.......#..........................\n" +
    ".............#.....#.........................................................................#..........#......#..#.#.............\n" +
    "...................................................................#.......#.......#...........................................#..\n" +
    ".......#.........#.......................#...................................................................#..........#.....#..#\n" +
    ".....................#...............#...#..#.....................................................#.....##.##..........#..........\n" +
    ".......................#.......#..................................#.................#.....................................#.......\n" +
    "................................................#........#....................#........................#..........................\n" +
    "......#....#..#....#.......................#....#...#.............................#............................#......#...........\n" +
    "...................................................................................................##.#.....#.................#...\n" +
    ".................#...#....................#........................#...............##.....#...........#........#.............#....\n" +
    ".....#............#......................................................................#................#....#..................\n" +
    "........#.............#..................................................................#....#.......#...........................\n" +
    ".#.......................................#.......................................#....#.............................#.............\n" +
    "...#.............................#..................#............................#.....................#.....#...........#........\n" +
    "....#......#.................................................................................................................#....\n" +
    ".....................................#..........#.............#......................................#............................\n" +
    "..#...#....#............#.....................................................#..#................................................\n" +
    ".....#.......................................................#............#..........................#...........#................\n" +
    "#.....................#..............#................................................#..........................#......#........#\n" +
    "........#.........................#........................#................#.......................#.............................\n" +
    "...........................#........#............................#.......#..............#.........................................\n" +
    "......###.........................................................................#.........#........#................#...#.......\n" +
    "............#........................#................#.................#........................#.............#.......#..........\n" +
    "........#.#................................#.....................................................#................................\n" +
    ".#...#............#........#........#..#...............................................#............................#............#\n" +
    "...#.............#.........#....................................#..............#.......................................##.........\n" +
    "...#...........#.....................................#.........#................#......................#............#.............\n" +
    "..................#....................................................##.......##..........#...............................##....\n" +
    "........................#.........#...........#............................................................###....................\n" +
    "....................#.......#....................................................#...#..............................#............#\n" +
    "............................#.....................................................................................................\n" +
    "......#........#........................#..........#..........#.......#..........................#................................\n" +
    "....................................#..............#...#.#......................................................................#.\n" +
    ".....#.....#...#..............................................###......#..............#.........##......#...............#.........\n" +
    "........................#.........................#...............#...............#.#........#.....................#.#............\n" +
    "...............#..............#........#........................................#..........#........#......#......................\n" +
    ".....................#..........................#...............................#........#.......#.....#...................#......\n" +
    ".........#...........................................#.............................#....#.......#......#..#....#..................\n" +
    ".........#...#........#....................#.......#..#...#..............................................................#........\n" +
    "..................#......................................#........................................................................\n" +
    "........#.....................................................#..#...........#........#......................#...#....#.....#.....\n" +
    "...........................#........#....#.........................................................#.............#................\n" +
    ".....#.#.........#................................................................................#...............................\n" +
    "...#............................................#......................#.......#.#...............#............#...................\n" +
    ".........#................................#.....#...........#.#....................#...#.....................................#.#..\n" +
    "..........#.#....#......#.........#....#.....#........#...........................#...............................................\n" +
    "............#...............#............#..........#.............................#...............................................\n" +
    "#.#............#.....................##................................................#....#.................##.................."

const testInput = "....#.....\n" +
    ".........#\n" +
    "..........\n" +
    "..#.......\n" +
    ".......#..\n" +
    "..........\n" +
    ".#..^.....\n" +
    "........#.\n" +
    "#.........\n" +
    "......#..."


function solvePartTwo(mapInput) {
    let map = mapInput.map(line => line.split(''))
    const rows = map.length
    const cols = map[0].length

    let startX
    let startY
    let direction

    const directionsMap = { '^': 0, '>': 1, 'v': 2, '<': 3 }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const ch = map[r][c]
            if (ch in directionsMap) {
                startX = c
                startY = r
                direction = directionsMap[ch]
                map[r][c] = '.'
                break
            }
        }
        if (startX !== undefined) break
    }

    function isBlocked(x, y) {
        if (x < 0 || x >= cols || y < 0 || y >= rows) return true
        return map[y][x] === '#'
    }

    function moveForward(x, y, dir) {
        if (dir === 0) return [x, y-1] // Up
        if (dir === 1) return [x+1, y] // right
        if (dir === 2) return [x, y+1] // Down
        if (dir === 3) return [x-1, y] // Left
    }

    function turnRight(dir) {
        return (dir + 1) % 4
    }

    function causesLoop(obX, obY) {
        map[obY][obX] = '#'

        let x = startX
        let y = startY
        let dir = direction

        const visited = new Set()
        visited.add(`${x},${y},${dir}`)

        while (true) {
            const [nx, ny] = moveForward(x, y, dir)
            if (nx < 0 || nx >= cols || ny < 0 || ny >= rows) {
                map[obY][obX] = '.'
                return false
            }

            if (isBlocked(nx, ny)) {
                dir = turnRight(dir)
            } else {
                x = nx
                y = ny
            }

            const state = `${x},${y},${dir}`
            if (visited.has(state)) {
                map[obY][obX] = '.'
                return true
            }
            visited.add(state)
        }
    }

    let count = 0
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (r === startY && c === startX) continue
            if (map[r][c] === '.') {
                if (causesLoop(c, r)) {
                    count++
                }
            }
        }
    }

    return count
}


console.log(solvePartTwo(input.split('\n')))