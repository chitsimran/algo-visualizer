import { useState } from "react";
import BFS from "../../components/BFS";
import DFS from "../../components/DFS";
import Navbar from "../../components/Navbar";
import { ALGO_DFS } from "../../constants/algoConstants";
import { AlgoContainerBody, AlgoVisualizerContainer } from "./style";

//TODO Add reset button
//Make start and finish node dynamic (user selects)
//Show info for given algos and shortest path

const AlgoVisualizer = () => {
    const [algo, setAlgo] = useState(ALGO_DFS);

    return (
        <AlgoVisualizerContainer>
            <Navbar algo={algo} setAlgo={setAlgo} />
            <AlgoContainerBody>{algo === ALGO_DFS ? <DFS /> : <BFS />}</AlgoContainerBody>
        </AlgoVisualizerContainer>
    );
};

export default AlgoVisualizer;
