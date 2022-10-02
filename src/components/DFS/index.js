import { dfs } from "../../algorithms/dfs";
import { DFS_INFO } from "../../description";
import AlgoWrapper from "../AlgoWrapper";

const DFS = () => {
    return <AlgoWrapper algoFunction={dfs} speed={20} header="DFS" bodyText={DFS_INFO} />;
};

export default DFS;
