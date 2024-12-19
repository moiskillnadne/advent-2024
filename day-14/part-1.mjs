import fs from 'node:fs'

const format = (str) => {
    const regex = /(\w)=(-?\d+),(-?\d+)/g;
    let result = {};

    for (const match of str.matchAll(regex)) {
        const [ , name, xStr, yStr ] = match;
        const x = parseInt(xStr, 10);
        const y = parseInt(yStr, 10);

        result[name] = { x, y };
    }

    return result;
};

const input = fs.readFileSync('./input', 'utf8').split('\n').map(format)

// const input = [{ p: { x: 2, y: 4 }, v: { x: 2, y: -3 }}]

const rows = 103
const columns = 101
const seconds = 100

const move = (p, v) => {
    const { x: px, y: py } = p
    const { x: vx, y: vy } = v

    let newX = px + vx

    if(0 > newX) {
        newX = newX + columns
    }

    if(newX >= columns) {
        newX = newX - columns
    }

    let newY = py + vy

    if(0 > newY) {
        newY = newY + rows
    }

    if(newY >= rows) {
        newY = newY - rows
    }

    return {
        x: newX,
        y: newY,
    }
}


for(let sec = 0; sec < seconds; sec++) {
    for(let coordIndex = 0; coordIndex < input.length; coordIndex++) {
        const robotCoord = input[coordIndex]

        const newCoord = move(robotCoord.p, robotCoord.v)
        input[coordIndex] = { p: newCoord, v: robotCoord.v }

    }
}

const quads = [0, 0, 0, 0]
for(let robot of input) {
    const {x, y} = robot.p

    if(x < 50 && y < 51) {
        quads[0]++
    } else if(x > 50 && y < 51) {
        quads[1]++
    } else if(x < 50 && y > 51) {
        quads[2]++
    } else if(x > 50 && y > 51) {
        quads[3]++
    }
}

console.log(quads[0] * quads[1] * quads[2] * quads[3])