export const initializeGrid = (startNode, endNode) => {
    let grid = [];
    for (let i = 0; i < 20; i++) {
        grid.push([]);
        for (let j = 0; j < 40; j++) {
            grid[i].push({
                row: i,
                col: j,
                isStartNode: i === startNode.row && j === startNode.col,
                isFinishNode: i === endNode.row && j === endNode.col,
                isVisited: false,
            });
        }
    }
    return grid;
};

export const animateGrid = (grid, setGrid, visitedNodes, speed) => {
    for (let i = 0; i < visitedNodes.length; i++) {
        setTimeout(() => {
            const node = visitedNodes[i];

            let tempGrid = [...grid];
            const newNode = {
                row: node.row,
                col: node.col,
                isStartNode: node.row === 5 && node.col === 10,
                isFinishNode: node.row === 18 && node.col === 33,
                isVisited: true,
            };
            tempGrid[node.row][node.col] = newNode;
            setGrid(tempGrid);
        }, speed * i);
    }
};
