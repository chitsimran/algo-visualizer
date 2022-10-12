import { StartEndIcon } from "../common/style";
import { NodeContainer } from "./style";

const Node = ({
    row,
    col,
    isStartNode,
    isEndNode,
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
            isEndNode={isEndNode}
            isVisited={isVisited}
            isWall={isWall}
            isPath={isPath}
            onMouseDown={() => handleMouseDown(row, col, isStartNode, isEndNode)}
            onMouseEnter={() => handleMouseEnter(row, col, isStartNode, isEndNode)}
            onMouseUp={() => handleMouseUp(row, col)}
        >
            {isStartNode && <StartEndIcon color="var(--theme-primary)" />}
            {isEndNode && <StartEndIcon color="var(--theme-secondary)" />}
        </NodeContainer>
    );
};

export default Node;
