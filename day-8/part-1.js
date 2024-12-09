const input = "..................................................\n" +
    "................2.................................\n" +
    "......6.........x.0..G............................\n" +
    "..............x5......0..................S........\n" +
    ".....0............................................\n" +
    "..................................y..............e\n" +
    "..........................G...............O.......\n" +
    ".....................0........GO...............d..\n" +
    ".........................8..........e.............\n" +
    ".........6....................................e...\n" +
    "......z6..5...N..x...................eY...........\n" +
    "................6.........5..........Y.E..........\n" +
    ".........X.....N....................E.a...S.....4.\n" +
    "...........................N.2......d.............\n" +
    "...s..................92.....a...................4\n" +
    "............s....................GO........4......\n" +
    "...........................................d.....S\n" +
    ".....................X....N.......................\n" +
    ".........A........................................\n" +
    ".s.....................A....E.......a.........Y...\n" +
    ".....g....s..................E.....Y..............\n" +
    ".............o....................................\n" +
    "...............................3...............O..\n" +
    ".g.................F.3.y..........................\n" +
    ".......F................y.....................d...\n" +
    "..................................X...............\n" +
    "..8....5............X..Z..........................\n" +
    "..g.....8.....na..................................\n" +
    "......................................3...........\n" +
    ".............J.......x............S.Z.............\n" +
    "..2J....h.A...............Z.......................\n" +
    "......A.............................3.............\n" +
    "............J.......n.............................\n" +
    ".8......o....n...........Z........................\n" +
    "..................o..............y................\n" +
    "..F.........................D...............9H....\n" +
    ".................................1.............9..\n" +
    "..................................................\n" +
    ".........h.....n......................f...........\n" +
    ".h....................z..........j.........9......\n" +
    ".......oF............................j............\n" +
    "..........h......z...........7.....1.f............\n" +
    "........................7.......1...H...j........f\n" +
    "........................................f.........\n" +
    "...........................7.......H..............\n" +
    "................................H.................\n" +
    ".............z...........D........................\n" +
    "..............J....................Dj.............\n" +
    "....................................D.............\n" +
    "....................7.......1....................."

const testInput = "............\n" +
    "........0...\n" +
    ".....0......\n" +
    ".......0....\n" +
    "....0.......\n" +
    "......A.....\n" +
    "............\n" +
    "............\n" +
    "........A...\n" +
    ".........A..\n" +
    "............\n" +
    "............"


function isWithinBounds(antinode, map) {
    return (
        antinode.x >= 0 &&
        antinode.y >= 0 &&
        antinode.x < map[0].length &&
        antinode.y < map.length
    );
}

function extractAllAntiNodes(antennaCoord, grid) {
    const antinodeCoords = new Set()

    const {row: y, column: x } = antennaCoord

    for(let ny = 0; ny < grid.length; ny++) {
        for(let nx = 0; nx < grid[ny].length; nx++) {
            if(grid[ny][nx] !== grid[y][x]) continue;

            if(ny === y && nx === x) continue;

            const antinode1 = { x: 2*x - nx, y: 2*y - ny };
            const antinode2 = { x: 2*nx - x, y: 2*ny - y };

            if(isWithinBounds(antinode1, grid)) {
                antinodeCoords.add(`${antinode1.y}:${antinode1.x}`)
            }

            if(isWithinBounds(antinode2, grid)) {
                antinodeCoords.add(`${antinode2.y}:${antinode2.x}`)
            }
        }
    }

    return Array.from(antinodeCoords)
}

function solution(grid) {

    let allAntinodes = []

    for(let row = 0; row < grid.length; row++) {
        for(let column = 0; column < grid[row].length; column++) {
            if(grid[row][column] === '.') continue;

            const result = extractAllAntiNodes({ row, column }, grid)

            allAntinodes = allAntinodes.concat(result)
        }
    }

    console.log(allAntinodes);
    const unique = Array.from(new Set(allAntinodes));
    console.log(unique.length)
}

const grid = input.split("\n").map(row => row.split(''))

solution(grid)
