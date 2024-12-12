const input = "5 62914 65 972 0 805922 6521 1639064"

const testInput = "125 17"

function processInput(input) {
    return input.split(" ").map(Number)
}

function isEven(number) {
    return number % 2 === 0
}

function splitNumber(number) {
    const str = number.toString()
    const length = str.length
    const mid = length / 2

    const firstPart = Number(str.slice(0, mid))
    const secondPart = Number(str.slice(mid))

    return [firstPart, secondPart]
}

function getValuesAccordingRules(number) {

    if(number === 0) {
        return [1]
    }

    if(isEven(String(number).length)) {
        return splitNumber(number)
    }

    return [number * 2024]
}

function solution(input) {
    let processed = processInput(input)

    const blinks = 25

    for(let i = 0; i < blinks; i++) {
        let buffer = []

        for(let j = 0; j < processed.length; j++) {
            buffer = buffer.concat(getValuesAccordingRules(processed[j]))
        }

        processed = buffer
    }

    return processed.length
}

console.log(solution(input));
