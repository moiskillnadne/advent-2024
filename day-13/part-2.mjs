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

function solveLinearEquations(X_target, Y_target, a, b) {
    const aX = a.x, aY = a.y;
    const bX = b.x, bY = b.y;

    const determinant = aX * bY - aY * bX;

    if (determinant === 0) {
        throw new Error("Система уравнений не имеет решений.");
    }

    const nA = (X_target * bY - Y_target * bX) / determinant;
    const nB = (Y_target * aX - X_target * aY) / determinant;

    if (nA < 0 || nB < 0 || !Number.isInteger(nA) || !Number.isInteger(nB)) {
        throw new Error("Нет целочисленного решения для данной цели.");
    }

    const cost = 3 * nA + 1 * nB;

    return {
        nA: Math.round(nA),
        nB: Math.round(nB),
        totalCost: cost
    };
}

const increase = 10000000000000

let total  = 0

for(let combo of input) {
    const [a, b, p] = getVariables(combo)

    const targetX = p[0]
    const targetY = p[1]


    try {
       const  result = solveLinearEquations(targetX + increase, targetY + increase, { x: a[0], y: a[1] }, { x: b[0], y: b[1] });
        total += result.totalCost
        console.log(result)
    } catch(error) {
        console.error(error)
    }
}

console.log(total)