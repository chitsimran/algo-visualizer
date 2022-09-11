import { NodeContainer } from "./style";

const Node = ({
    row,
    col,
    isStartNode,
    isFinishNode,
    isVisited,
    isWall,
    isPath,
    handleMouseDown,
    handleMouseEnter,
    handleMouseUp,
}) => {
    return (
        <NodeContainer
            isStartNode={isStartNode}
            isFinishNode={isFinishNode}
            isVisited={isVisited}
            isWall={isWall}
            isPath={isPath}
            onMouseDown={() => handleMouseDown(row, col, isStartNode || isFinishNode)}
            onMouseEnter={() => handleMouseEnter(row, col, isStartNode || isFinishNode)}
            onMouseUp={() => handleMouseUp(row, col)}
        ></NodeContainer>
    );
};

export default Node;
