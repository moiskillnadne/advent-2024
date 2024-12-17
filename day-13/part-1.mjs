import fs from 'node:fs'

const input = fs.readFileSync('./input', 'utf8').split('\n\n').map(str => str.split('\n'))


const extractNums = (line) => {
    const xMatch = line.match(/X(?:=|\+)(\d+)/);
    const yMatch = line.match(/Y(?:=|\+)(\d+)/);

    // Преобразуем найденные значения в числа
    const x = xMatch ? parseInt(xMatch[1], 10) : null;
    const y = yMatch ? parseInt(yMatch[1], 10) : null;

    return [x, y];
}

const getVariables = (combo) => {
   return combo.reduce((acc, val) => {
       const nums = extractNums(val)
       acc.push(nums)
       return acc
   }, [])
}

let sum = 0

const aPrice = 3
const bPrice = 1

function getCheapest(a, b, p) {
    console.log(`A: ${a}, B: ${b}, P: ${p}`)

    let price = null

    for(let fi = 1; fi < 101; fi++) {
        for(let si = 1; si < 101; si++) {
            const AX1 = a[0] * fi
            const BX2 = b[0] * si

            const AY1 = a[1] * fi
            const BY2 = b[1] * si

            const xr = AX1 + BX2
            const yr = AY1 + BY2

            if(xr === p[0] && yr === p[1]) {
                const trial = fi * aPrice + si * bPrice

                if(price === null) {
                    price = trial
                    continue
                }

                if(trial < price) {
                    price = trial
                }
            }
        }
    }

    return price
}

let total = 0

for(let combo of input) {
    const [a, b, p] = getVariables(combo)

    const cheapest = getCheapest(a, b, p)

    console.log(cheapest)

    if(cheapest) {
        total += cheapest
    }
}

console.log(total)