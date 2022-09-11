export const dfs = (grid, startNode, endNode) => {
    if (!grid || !grid.length) return [];
    let n = grid.length,
        m = grid[0].length;

    if (
        !!!startNode ||
        !!!endNode ||
        startNode === endNode ||
        startNode.row < 0 ||
        endNode.row < 0 ||
        startNode.col >= n ||
        endNode.col >= m
    )
        return [];

    let gridInOrder = [];
    let visited = [];

    for (let i = 0; i < n; i++) {
        visited.push([]);

        for (let j = 0; j < m; j++) {
            visited[i].push(false);
        }
    }

    const internalDFS = (row, col) => {
        if (row < 0 || row >= n || col < 0 || col >= m || grid[row][col].isWall || visited[row][col]) return false;

        visited[row][col] = true;
        gridInOrder.push({ row, col });

        if (row === endNode.row && col === endNode.col) return true;

        return (
            internalDFS(row + 1, col) ||
            internalDFS(row, col + 1) ||
            internalDFS(row - 1, col) ||
            internalDFS(row, col - 1)
        );
    };

    internalDFS(startNode.row, startNode.col);

    return gridInOrder;
};
