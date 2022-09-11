import { isNodeInGrid } from ".";
import Queue from "../dataStructures/queue";

export const bfs = (grid, startNode, endNode) => {
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

    let visited = new Array(n).fill(false).map(() => new Array(m).fill(false));
    let visitedNodes = [];

    const queue = new Queue();

    queue.push(startNode);

    while (!queue.isEmpty()) {
        const node = queue.pop();

        if (!isNodeInGrid(node, n, m) || visited[node.row][node.col]) continue;

        visited[node.row][node.col] = true;
        visitedNodes.push(node);

        if (node.row === endNode.row && node.col === endNode.col) return visitedNodes;

        queue.push({ row: node.row + 1, col: node.col });
        queue.push({ row: node.row, col: node.col + 1 });
        queue.push({ row: node.row - 1, col: node.col });
        queue.push({ row: node.row, col: node.col - 1 });
    }

    return visitedNodes;
};
