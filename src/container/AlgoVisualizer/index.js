import DFS from "../../components/DFS";
import Navbar from "../../components/Navbar";
import { AlgoVisualizerContainer } from "./style";

const AlgoVisualizer = () => {
    return (
        <AlgoVisualizerContainer>
            <Navbar />
            <DFS />
        </AlgoVisualizerContainer>
    );
};

export default AlgoVisualizer;
