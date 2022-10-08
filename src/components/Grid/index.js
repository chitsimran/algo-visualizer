import { useState } from "react";
import Node from "../Node";
import { GridContainer, GridRow } from "./style";

const Grid = ({ grid, setGrid, startNode, setStartNode, endNode, setEndNode, isDisabled, setIsDisabled }) => {
    const [isMousePressed, setIsMousePressed] = useState(false);
    const [isStartNodeSelected, setIsStartNodeSelected] = useState(false);
    const [isEndNodeSelected, setIsEndNodeSelected] = useState(false);

    const handleMouseDown = (row, col, isStartNode, isEndNode) => {
        if (isDisabled) return;
        setIsMousePressed(true);
        toggleWalls(row, col, isStartNode, isEndNode);
    };

    const handleMouseEnter = (row, col, isStartNode, isEndNode) => {
        if (!isMousePressed || isDisabled) return;
        toggleWalls(row, col, isStartNode, isEndNode);
    };

    const handleMouseUp = () => {
        setIsStartNodeSelected(false);
        setIsMousePressed(false);
        setIsEndNodeSelected(false);
    };

    const toggleWalls = (row, col, isStartNode, isEndNode) => {
        if (
            (isStartNode && isEndNode) ||
            ((isStartNode || isEndNode || isStartNodeSelected || isEndNodeSelected) && grid[row][col].isWall)
        ) {
            return;
        }
        if ((isStartNode || isStartNodeSelected) && !isEndNode && !isEndNodeSelected) {
            setIsStartNodeSelected(true);
            setStartNode({ row, col });
        } else if ((isEndNodeSelected || isEndNode) && !isStartNode && !isStartNodeSelected) {
            setIsEndNodeSelected(true);
            setEndNode({ row, col });
        }
        if (isStartNode || isEndNode || isStartNodeSelected || isEndNodeSelected) {
            let tempGrid = [...grid];
            tempGrid[row][col].isWall = false;
            setGrid(tempGrid);
            return;
        }
        let tempGrid = [...grid];
        tempGrid[row][col].isWall = !tempGrid[row][col].isWall;
        setGrid(tempGrid);
    };

    return (
        <GridContainer onMouseLeave={() => handleMouseUp()}>
            {grid.map((row, rowId) => {
                return (
                    <GridRow key={rowId}>
                        {row.map((node, colId) => {
                            return (
                                <Node
                                    row={rowId}
                                    col={colId}
                                    key={rowId + "_" + colId}
                                    isStartNode={
                                        !(node.row === endNode.row && node.col === endNode.col) &&
                                        node.row === startNode.row &&
                                        node.col === startNode.col
                                    }
                                    isEndNode={
                                        !(node.row === startNode.row && node.col === startNode.col) &&
                                        node.row === endNode.row &&
                                        node.col === endNode.col
                                    }
                                    isVisited={!!node.isVisited}
                                    isWall={!!node.isWall}
                                    isPath={!!node.isPath}
                                    handleMouseDown={handleMouseDown}
                                    handleMouseEnter={handleMouseEnter}
                                    handleMouseUp={handleMouseUp}
                                />
                            );
                        })}
                    </GridRow>
                );
            })}
        </GridContainer>
    );
};

export default Grid;
