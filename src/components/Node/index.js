import { NodeContainer } from "./style";

const Node = ({ row, col, isStartNode, isFinishNode, isVisited }) => {
    return <NodeContainer isStartNode={isStartNode} isFinishNode={isFinishNode} isVisited={isVisited}></NodeContainer>;
};

export default Node;
