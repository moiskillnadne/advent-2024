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

function find(matrix, startY, startX, endY, endX) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    const dist = Array.from({ length: numRows }, () =>
        Array.from({ length: numCols }, () => Array(4).fill(Infinity))
    );

    dist[startY][startX][1] = 0

    const pq = new HeapQueue((a, b) => a[0] - b[0]);
    pq.push([0, startY, startX, 1]);

    while (true) {
        const element = pq.pop();
        if (!element) {
            return 'No found'
        }

        const [currentCost, y, x, dir] = element;

        if (currentCost > dist[y][x][dir]) {
            continue;
        }

        if (y === endY && x === endX) {
            return currentCost;
        }

        for (let newDir = 0; newDir < 4; newDir++) {

            const ny = y + dirs[newDir][0];
            const nx = x + dirs[newDir][1];

            if (matrix[ny][nx] !== '#') {
                const newCost = newDir === dir ? currentCost + 1 : currentCost + 1000 + 1;

                if (newCost < dist[ny][nx][newDir]) {
                    dist[ny][nx][newDir] = newCost;
                    pq.push([newCost, ny, nx, newDir]);
                }
            }
        }
    }
}

const result = find(maze, sy, sx, ey, ex);
console.log(result);