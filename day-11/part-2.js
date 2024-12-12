const input = "5 62914 65 972 0 805922 6521 1639064"

const testInput = "125 17"

function processInput(input) {
    return input.split(" ").reduce((acc, val) => {
        acc[val] = 1
        return acc;
    }, {});
}

const SPLIT_CACHE = {}

function splitNumber(numStr) {
    if(SPLIT_CACHE[numStr]) {
        return SPLIT_CACHE[numStr];
    }

    const mid = numStr.length / 2;
    const firstPart = numStr.slice(0, mid);
    const secondPart = numStr.slice(mid);
    const result = [firstPart, secondPart];

    SPLIT_CACHE[numStr] = result

    return result
}

function solution(input) {
    let stones = processInput(input)

    const blinks = 75

    for (let i = 0; i < blinks; i++) {
        const newStones = {}

        for (const [value, count] of Object.entries(stones)) {
            const stone = parseInt(value);

            if (stone === 0) {
                newStones[1] = (newStones[1] || 0) + count
            } else if (stone.toString().length % 2 === 0) {
                const [left, right] = splitNumber(stone.toString())

                newStones[parseInt(left)] = (newStones[parseInt(left)] || 0) + count
                newStones[parseInt(right)] = (newStones[parseInt(right)] || 0) + count
            } else {
                const newStone = stone * 2024

                newStones[newStone] = (newStones[newStone] || 0) + count

            }
        }

        stones = newStones
    }

    return Object.values(stones).reduce((a, v) => a + v, 0)
}

const t0 = performance.now()
console.log(solution(testInput));
const t1 = performance.now()

console.log(`Solution takes: ${t1-t0}ms`)


// Test 1 (25 steps) - no optimization
// Result - 199753 Solution takes: 22334.446041ms


// Test 2 (25 steps) - with optimization
// Result - 199753 Solution takes: 25.289625ms