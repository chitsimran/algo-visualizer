import { useEffect } from "react";
import { useState } from "react";

export const initializeGrid = (startNode, endNode, n, m) => {
    let grid = [];

    for (let i = 0; i < n; i++) {
        grid.push([]);
        for (let j = 0; j < m; j++) {
            grid[i].push({
                row: i,
                col: j,
                isStartNode: i === startNode.row && j === startNode.col,
                isFinishNode: i === endNode.row && j === endNode.col,
                isVisited: false,
                isWall: false,
                isPath: false,
            });
        }
    }
    return grid;
};

export const animateGrid = (grid, setGrid, startNode, endNode, visitedNodes, speed, visualizePath) => {
    for (let i = 0; i <= visitedNodes.length; i++) {
        setTimeout(() => {
            if (i === visitedNodes.length) {
                if (visualizePath)
                    animatePath(
                        grid,
                        setGrid,
                        startNode,
                        endNode,
                        getPathNodes(startNode, endNode, visitedNodes),
                        speed
                    );
            } else {
                const node = visitedNodes[i];

                let tempGrid = [...grid];
                const newNode = {
                    row: node.row,
                    col: node.col,
                    isStartNode: node.row === startNode.row && node.col === startNode.col,
                    isFinishNode: node.row === endNode.row && node.col === endNode.col,
                    isVisited: true,
                    isWall: node.isWall,
                    isPath: node.isPath,
                };
                tempGrid[node.row][node.col] = newNode;
                setGrid(tempGrid);
            }
        }, speed * i);
    }
};

const isSameNode = (nodeA, nodeB) => {
    return nodeB && nodeB.row === nodeA.row && nodeB.col === nodeA.col;
};

const getPathNodes = (startNode, endNode, visitedNodes) => {
    console.log(visitedNodes);
    let pathNodes = [];
    let node = visitedNodes[visitedNodes.length - 1];
    if (!isSameNode(endNode, node)) return;
    while (!isSameNode(startNode, node)) {
        pathNodes.unshift(node);
        for (let i = 0; i < visitedNodes.length; i++) {
            if (visitedNodes[i].row === node.parent.row && visitedNodes[i].col === node.parent.col) {
                node = visitedNodes[i];
                break;
            }
        }
    }
    return pathNodes;
};

const animatePath = (grid, setGrid, startNode, endNode, pathNodes, speed) => {
    for (let i = 0; i < pathNodes.length; i++) {
        setTimeout(() => {
            const node = pathNodes[i];

            let tempGrid = [...grid];
            const newNode = {
                row: node.row,
                col: node.col,
                isStartNode: node.row === startNode.row && node.col === startNode.col,
                isFinishNode: node.row === endNode.row && node.col === endNode.col,
                isVisited: false,
                isWall: false,
                isPath: true,
            };
            tempGrid[node.row][node.col] = newNode;
            setGrid(tempGrid);
        }, speed * i);
    }
};

export function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: 400,
        height: 200,
    });
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}
