import fs from 'node:fs'

const inputPath = './input'

const input = fs.readFileSync(inputPath, 'utf8')

function processInput(input) {
    return input.split('\n').map(line => line.split(''))
}

function same(plotA, plotB) {
    return plotA === plotB
}

function solve(input) {
    const grid = processInput(input)

    const visitedPlots = new Set()

    const regionPrices = []

    let regionSize = 0
    let regionPerimeter = 0

    const findRegionPrice = (startY, startX, originalPlot) => {
        if(visitedPlots.has(`${startY}:${startX}`)) return

        visitedPlots.add(`${startY}:${startX}`)
        regionSize++

        // Check right
        if(grid[startY]?.[startX + 1] && same(originalPlot, grid[startY][startX + 1])) {
            findRegionPrice(startY, startX + 1, originalPlot)
        } else {
            regionPerimeter++
        }

        // Check left
        if(grid[startY]?.[startX - 1] && same(originalPlot, grid[startY][startX - 1])) {
            findRegionPrice(startY, startX - 1, originalPlot)
        } else {
            regionPerimeter++
        }

        // Check down
        if(grid[startY + 1]?.[startX] && same(originalPlot, grid[startY + 1][startX])) {
            findRegionPrice(startY + 1, startX, originalPlot)
        } else {
            regionPerimeter++
        }

        // Check up
        if(grid[startY - 1]?.[startX] && same(originalPlot, grid[startY - 1][startX])) {
            findRegionPrice(startY - 1, startX, originalPlot)
        } else {
            regionPerimeter++
        }
    }

    for(let y = 0; y < grid.length; y++) {
        for(let x = 0; x < grid[y].length; x++) {
            if(visitedPlots.has(`${y}:${x}`)) continue;

            regionSize = 0
            regionPerimeter = 0

            const plot = grid[y][x]
            findRegionPrice(y, x, plot)

            regionPrices.push(regionSize * regionPerimeter)
        }
    }

    return regionPrices.reduce((acc, val) => acc + val, 0)
}

console.log(solve(input))