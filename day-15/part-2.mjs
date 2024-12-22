import fs from 'node:fs'

const [mapRaw, movesRaw] = fs.readFileSync('./input', 'utf8').split('\n\n')

const map = mapRaw.split('\n').map(line => line.split(''))
const moves = movesRaw.replaceAll('\n', '').split('')

let map2 = []
for(let ri = 0; ri < map.length; ri++) {
    for(let ci = 0; ci < map[ri].length; ci++) {
        const cell = map[ri][ci]

        if(!map2[ri]) {
            map2[ri] = []
        }

        if(cell === '#') {
            map2[ri].push('#')
            map2[ri].push('#')
        }

        if(cell === 'O') {
            map2[ri].push('[')
            map2[ri].push(']')
        }

        if(cell === '.') {
            map2[ri].push('.')
            map2[ri].push('.')
        }

        if(cell === '@') {
            map2[ri].push('@')
            map2[ri].push('.')
        }
    }
}

console.log(map2)

const getDirCoords = (move) => {
    if(move === '<') return [0, -1]
    if(move === '>') return [0, 1]
    if(move === 'v') return [1, 0]
    if(move === '^') return [-1, 0]
}

const getInitialRobotCoords = () => {
    let coords = null

    for(let row = 0; row < map2.length; row++) {
        for(let col = 0; col < map2[row].length; col++) {
            if(map2[row][col] === '@') {
                coords = [row, col]
                break
            }
        }

        if(coords !== null) {
            break
        }
    }

    return coords
}

let robotCoords = getInitialRobotCoords()

const printMap = () => {
    console.log(map2.map(line => line.join('')).join('\n'))
}

const key = (y, x) => `${y},${x}`

for(let move of moves) {
    // printMap()

    const [sy, sx] = robotCoords

    const [dy, dx] = getDirCoords(move)

    const coordinatesToMove = [key(sy, sx)]
    let i = 0
    let blocked = false
    while (i < coordinatesToMove.length) {
        const [y, x] = coordinatesToMove[i].split(',').map(Number)
        let ny = y + dy
        let nx = x + dx
        const cell = map2[ny][nx]

        if(cell === '#') {
            blocked = true
            break
        }

        if(cell === '[' || cell === ']') {
            if(!coordinatesToMove.includes(key(ny, nx))) {
                coordinatesToMove.push(key(ny, nx))
            }

            if(cell === '[') {
                if(!coordinatesToMove.includes(key(ny, nx + 1))) {
                    coordinatesToMove.push(key(ny, nx + 1))
                }
            }

            if(cell === ']') {
                if(!coordinatesToMove.includes(key(ny, nx - 1))) {
                    coordinatesToMove.push(key(ny, nx - 1))
                }
            }
        }

        i++
    }

    if(blocked) {
        continue
    }

    const updatedGrid = []
    for(let row = 0; row < map2.length; row++) {
        for(let col = 0; col < map2[row].length; col++) {

            if(!updatedGrid[row]) {
                updatedGrid[row] = []
            }

            updatedGrid[row][col] = map2[row][col]
        }
    }

    for(let key of coordinatesToMove) {
        const [y, x] = key.split(',').map(Number)
        updatedGrid[y][x] = '.'
    }

    for(let key of coordinatesToMove) {
        const [y, x] = key.split(',').map(Number)
        updatedGrid[y + dy][x + dx] = map2[y][x]
    }

    map2 = updatedGrid

    robotCoords = [sy + dy, sx + dx]
}

let total = 0

for(let y = 0; y < map2.length; y++) {
    for(let x = 0; x < map2[y].length; x++) {
        if(map2[y][x] === '[') {
            total += 100 * y + x
        }
    }
}

console.log(total)