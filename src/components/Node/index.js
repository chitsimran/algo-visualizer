import { RoundIcon } from "../common/style";
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
        >
            {isStartNode && <RoundIcon color="green" />}
            {isFinishNode && <RoundIcon color="red" />}
        </NodeContainer>
    );
};

export default Node;
