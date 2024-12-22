import fs from 'node:fs'

const [mapRaw, movesRaw] = fs.readFileSync('./input', 'utf8').split('\n\n')

const map = mapRaw.split('\n').map(line => line.split(''))
const moves = movesRaw.replaceAll('\n', '').split('')

const getDirCoords = (move) => {
    if(move === '<') return [0, -1]
    if(move === '>') return [0, 1]
    if(move === 'v') return [1, 0]
    if(move === '^') return [-1, 0]
}

const getInitialRobotCoords = () => {
    let coords = null

    for(let row = 0; row < map.length; row++) {
        for(let col = 0; col < map[row].length; col++) {
            if(map[row][col] === '@') {
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
    console.log(map.map(line => line.join('')).join('\n'))
}

for(let move of moves) {
    // printMap()

    const [sy, sx] = robotCoords

    const [dy, dx] = getDirCoords(move)

    let ny = sy + dy
    let nx = sx + dx

    const boxes = []
    while(map[ny][nx] === 'O') {
        boxes.push([ny, nx])
        ny += dy
        nx += dx
    }

    if(map[ny][nx] === '#') {
        continue
    }

    for(const box of boxes) {
        const [y, x] = box
        map[y + dy][x + dx] = "O"
    }

    map[sy][sx] = "."
    map[sy + dy][sx + dx] = "@"

    robotCoords = [sy + dy, sx + dx]
}

let total = 0

for(let y = 0; y < map.length; y++) {
    for(let x = 0; x < map[y].length; x++) {
        if(map[y][x] === 'O') {
            total += 100 * y + x
        }
    }
}

console.log(total)