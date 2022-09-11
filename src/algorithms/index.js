export const isNodeInGrid = (node, n, m) => {
    return !!node && node.row >= 0 && node.col >= 0 && node.row < n && node.col < m;
};
