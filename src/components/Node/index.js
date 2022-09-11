import { useState } from "react";
import { NodeContainer } from "./style";

const Node = ({ row, col, isStartNode, isFinishNode, isVisited }) => {
    const [visited, setVisited] = useState(false);

    return <NodeContainer isStartNode={isStartNode} isFinishNode={isFinishNode} isVisited={isVisited}></NodeContainer>;
};

export default Node;
