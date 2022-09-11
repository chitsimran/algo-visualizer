import { animateGrid } from "../../util";
import { StartButton } from "../common/style";
import { GridHeaderContainer } from "./style";

const GridHeader = ({ grid, setGrid, startNode, endNode, algoFunction, speed, visualizePath = false }) => {
    return (
        <GridHeaderContainer>
            <StartButton
                onClick={() => animateGrid(grid, setGrid, startNode, endNode, algoFunction(), speed, visualizePath)}
            >
                Start
            </StartButton>
        </GridHeaderContainer>
    );
};

export default GridHeader;
