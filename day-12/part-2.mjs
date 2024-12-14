const fs = require('fs');

const input = fs.readFileSync('./input', 'utf8').trim();
const grid = input.split('\n');
const R = grid.length;
const C = grid[0].length;

const DIRS = [[-1,0],[0,1],[1,0],[0,-1]]; // up, right, down, left

let p1 = 0;
let p2 = 0;

const SEEN = new Set();

function coordKey(y,x) {
    return `${y},${x}`;
}

for (let y = 0; y < R; y++) {
    for (let x = 0; x < C; x++) {
        const key = coordKey(y,x);
        if (SEEN.has(key)) {
            continue;
        }
        const Q = [];
        Q.push([y,x]);
        let area = 0;
        let perim = 0;
        const PERIM = {};

        while (Q.length > 0) {
            const [y2,x2] = Q.shift();
            const k2 = coordKey(y2,x2);

            if (SEEN.has(k2)) {
                continue;
            }

            SEEN.add(k2);
            area += 1;

            for (const [dy,dx] of DIRS) {
                const yy = y2+dy;
                const xx = x2+dx;

                if (yy >= 0 && yy < R && xx >= 0 && xx < C && grid[yy][xx] === grid[y2][x2]) {
                    const nk = coordKey(yy,xx);
                    if (!SEEN.has(nk)) {
                        Q.push([yy,xx]);
                    }
                } else {
                    perim += 1;
                    const dirKey = `${dy},${dx}`;

                    if (!PERIM[dirKey]) {
                        PERIM[dirKey] = new Set();
                    }

                    PERIM[dirKey].add(coordKey(y2,x2));
                }
            }
        }

        let sides = 0;
        for (const vs of Object.values(PERIM)) {
            const SEEN_PERIM = new Set();


            for(let coord of vs) {
                if(SEEN_PERIM.has(coord)) continue;

                sides += 1;
                const queue = [];
                queue.push(coord);

                while (queue.length > 0) {
                    const cur = queue.shift();

                    if (SEEN_PERIM.has(cur)) continue;

                    SEEN_PERIM.add(cur);

                    // Пробуем расширить в рамках vs
                    const [py, px] = cur.split(',').map(Number);

                    for (const [dy,dx] of DIRS) {
                        const ry = py+dy;
                        const cx = px+dx;
                        const kk = coordKey(ry,cx);

                        if (vs.has(kk)) {
                            if (!SEEN_PERIM.has(kk)) {
                                queue.push(kk);
                            }
                        }

                    }
                }
            }
        }

        p1 += area * perim;
        p2 += area * sides;
    }
}

console.log(p1);
console.log(p2);