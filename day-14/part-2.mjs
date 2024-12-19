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

for(let sec = 1; sec < 1000000; sec++) {
    const seen = new Set()

    for(const {p, v} of input) {
        const {x: px, y: py} = p
        const {x: vx, y: vy} = v

        const nx = ((px + sec * vx) % 101 + 101) % 101;
        const ny = ((py + sec * vy) % 103 + 103) % 103;

        const key = `${nx},${ny}`

        seen.add(key)
    }



    if(seen.size === input.length) {
        console.log(sec)
        // break
    }
}