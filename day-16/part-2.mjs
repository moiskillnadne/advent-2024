import fs from 'fs'
import { HeapQueue } from "./HeapQueue.mjs";

const maze = fs.readFileSync('./input', 'utf8').split('\n').map((line) => line.split(''))

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]] // up, right, down, left

let sy = 0
let sx = 0
let ey = 0
let ex = 0

for(let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
        if(maze[y][x] === 'S') {
            sy = y
            sx = x
        }

        if(maze[y][x] === 'E') {
            ey = y
            ex = x
        }
    }
}

const key = (y, x, d) => {
    return `${y},${x},${d}`
}

function printMap(matrix) {
    console.log(maze.map(line => line.join('').join('\n')))
}

function find(matrix, startY, startX, endY, endX) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    const backtrack = {}
    let bestCost

    const dist = Array.from({ length: numRows }, () =>
        Array.from({ length: numCols }, () => Array(4).fill(Infinity))
    );

    dist[startY][startX][1] = 0

    const pq = new HeapQueue((a, b) => a[0] - b[0]);
    pq.push([0, startY, startX, 1]);

    while (pq.size() > 0) {
        const element = pq.pop();
        if (!element) {
            return 'No found'
        }

        const [currentCost, y, x, dir] = element;

        if (currentCost > dist[y][x][dir]) continue

        if (y === endY && x === endX) {
            if(!bestCost) {
                bestCost = currentCost
                console.log(currentCost)
            }
        }

        for (let newDir = 0; newDir < 4; newDir++) {

            const ny = y + dirs[newDir][0];
            const nx = x + dirs[newDir][1];

            if (matrix[ny][nx] !== '#') {
                const newCost = newDir === dir ? currentCost + 1 : currentCost + 1000 + 1;

                if (newCost < dist[ny][nx][newDir]) {
                    dist[ny][nx][newDir] = newCost;
                    pq.push([newCost, ny, nx, newDir]);

                    backtrack[key(ny, nx, newDir)] = new Set()
                    backtrack[key(ny, nx, newDir)].add(key(y, x, dir))
                } else if(newCost <= dist[ny][nx][newDir]) {
                    if(!backtrack[key(ny, nx, newDir)]) {
                        backtrack[key(ny, nx, newDir)] = new Set()
                    }

                    backtrack[key(ny, nx, newDir)].add(key(y, x, dir))
                }
            }
        }
    }

    const stack = [];
    for (let d = 0; d < 4; d++) {
        if (dist[endY][endX][d] === bestCost) {
            stack.push([endY, endX, d]);
        }
    }

    const goodNodes = new Set()

    while(stack.length > 0) {
        const [y, x, d] = stack.pop()
        const ckey = key(y, x, d)

        if (!goodNodes.has(ckey)) {
            goodNodes.add(ckey);
            console.log(ckey)
        }

        const parent = backtrack[ckey]

        if(parent) {
            for(let other of Array.from(parent)) {
                if(!goodNodes.has(other)) {
                    goodNodes.add(other)
                    console.log(other)
                    const values = other.split(',').map(Number)
                    stack.push(values)
                }
            }
        }
    }

    console.log(Array.from(goodNodes))

    const finalCells = new Set()
    for(let node of Array.from(goodNodes)) {
        const [yy, xx] = node.split(',')
        finalCells.add(`${yy},${xx}`)
    }

    return finalCells.size
}

const result = find(maze, sy, sx, ey, ex);
console.log(result);