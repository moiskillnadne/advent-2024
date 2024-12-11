const input = "1237651012319765432345545498010145891010\n" +
    "0348943105408894001056654584321036712329\n" +
    "9432342236717433145677723675490121903478\n" +
    "8541051549826522238988812106789030876569\n" +
    "7650760678434011032349900125699845686788\n" +
    "6789898730569545601456987234016768798697\n" +
    "4372123621078438780767076543223609894556\n" +
    "5201014532321029892898123456104510983045\n" +
    "6102306545452310121234010767040125672130\n" +
    "7985430696101402100765109898234534343421\n" +
    "8976521787210569011843210982129653254321\n" +
    "8907823474389678123954301011018762169870\n" +
    "7010910567478012335869832109800121078765\n" +
    "6327823498565723546778789236789630989034\n" +
    "5436910989367874695219654345676547876123\n" +
    "6785403873456965784301105654565670945210\n" +
    "5690342762106543287012234787654981234678\n" +
    "4301201659014690196543989898943272221589\n" +
    "5210112348323787017432170101032102100450\n" +
    "1290010167654896528903061232589043678321\n" +
    "0381201233210743434012354345672154509100\n" +
    "5470300344984652143023403456983893210234\n" +
    "6565415455675430032110512987870765210985\n" +
    "7432326966556721243329601070121894387876\n" +
    "8901457877876898358478732112434721296901\n" +
    "9450962340945876569569540003965780105432\n" +
    "2365871651232903478757651654875698987321\n" +
    "1671010787891212349808932787034567076670\n" +
    "0982107896500301256710149890123498125583\n" +
    "1210212783410450901223456781210321034492\n" +
    "0398347894323467814345069890323498503301\n" +
    "3457656321301556030196178765432567412212\n" +
    "6569845490219698123287234076781064565801\n" +
    "7078780185428787654876543189899873278921\n" +
    "8129698276538988140989812278734765103210\n" +
    "9234567345445679031256701345625654014765\n" +
    "0103216548765678120349810566010103425894\n" +
    "0987607239854581234569809870987912436723\n" +
    "1234568120123290107678712561296876543010\n" +
    "2109879011234103238932103450345689832123"

const testInput = "89010123\n" +
    "78121874\n" +
    "87430965\n" +
    "96549874\n" +
    "45678903\n" +
    "32019012\n" +
    "01329801\n" +
    "10456732"

function processInput(input) {
    return input.split('\n').map(el => el.split('').map(Number))
}

function canGo(newHeight, currentHeight) {
    return (newHeight - currentHeight) === 1
}

function calculateScore(score, grid, startY, startX ) {
    const currentHeight = grid[startY][startX];

    if(currentHeight === 9) {
        score.add(`${startY}:${startX}`)
        return
    }

    // Right
    if(grid[startY]?.[startX + 1] && canGo(grid[startY][startX + 1], currentHeight)) {
        calculateScore(score, grid, startY, startX + 1)
    }

    // Left
    if(grid[startY]?.[startX - 1] && canGo(grid[startY][startX - 1], currentHeight)) {
        calculateScore(score, grid, startY, startX - 1)
    }

    // Up
    if(grid[startY - 1]?.[startX] && canGo(grid[startY - 1][startX], currentHeight)) {
        calculateScore(score, grid, startY - 1, startX)
    }

    // Down
    if(grid[startY + 1]?.[startX] && canGo(grid[startY + 1][startX], currentHeight)) {
        calculateScore(score, grid, startY + 1, startX)
    }
}

function findRouteScore(grid, startY, startX) {
    let score = new Set();

    calculateScore(score, grid, startY, startX);

    return score.size;
}

function solution(input) {
    const processed = processInput(input);

    const rows = processed.length;
    const columns = processed[0].length;

    let mapScore = 0

    for(let row = 0; row < rows; row++) {
        for(let col = 0; col < columns; col++) {
            const value = processed[row][col];

            if(value !== 0) continue;

            mapScore += findRouteScore(processed, row, col)
        }
    }

    return mapScore;
}

console.log(solution(input))

