import { useState } from "react";
import Node from "../Node";
import { GridContainer, GridRow } from "./style";

const Grid = ({ grid, setGrid }) => {
    const [isMousePressed, setIsMousePressed] = useState(false);

    const handleMouseDown = (row, col, isStartOrFinishNode) => {
        setIsMousePressed(true);
        toggleWalls(row, col, isStartOrFinishNode);
    };

    const handleMouseEnter = (row, col, isStartOrFinishNode) => {
        if (!isMousePressed) return;
        toggleWalls(row, col, isStartOrFinishNode);
    };

    const handleMouseUp = () => {
        setIsMousePressed(false);
    };

    const toggleWalls = (row, col, isStartOrFinishNode) => {
        if (isStartOrFinishNode) return;
        let tempGrid = [...grid];
        tempGrid[row][col].isWall = !tempGrid[row][col].isWall;
        setGrid(tempGrid);
    };

    return (
        <GridContainer onMouseLeave={() => setIsMousePressed(false)}>
            {grid.map((row, rowId) => {
                return (
                    <GridRow key={rowId}>
                        {row.map((node, colId) => {
                            return (
                                <Node
                                    row={rowId}
                                    col={colId}
                                    key={rowId + "_" + colId}
                                    isStartNode={node.isStartNode}
                                    isFinishNode={node.isFinishNode}
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
