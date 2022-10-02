import { bfs } from "../../algorithms/bfs";
import { BFS_INFO } from "../../description";
import AlgoWrapper from "../AlgoWrapper";

const BFS = () => {
    const legendKeys = [{ color: "var(--theme-path)", text: "Path Node" }];

    return (
        <AlgoWrapper
            algoFunction={bfs}
            speed={10}
            visualizePath={true}
            header="BFS"
            bodyText={BFS_INFO}
            legendKeys={legendKeys}
        />
    );
};

export default BFS;
