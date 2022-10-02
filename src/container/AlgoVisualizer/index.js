import { useState } from "react";
import BFS from "../../components/BFS";
import DFS from "../../components/DFS";
import Navbar from "../../components/Navbar";
import { ALGO_DFS } from "../../constants/algoConstants";
import { AlgoContainerBody, AlgoVisualizerContainer } from "./style";

//TODO
//Disable user to edit grid when an algo is running and also after it has visualized it
//Don't let start or end node pass through a wall
//Adjust start button, so they're with grid component
//Try to add some animation

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
