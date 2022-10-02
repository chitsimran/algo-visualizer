import { animateGrid } from "../../util";
import { ResetButtonContainer, StartButtonContainer } from "../common/style";
import { GridHeaderContainer } from "./style";

const GridHeader = ({
    grid,
    setGrid,
    startNode,
    endNode,
    algoFunction,
    speed,
    visualizePath = false,
    toggleReset,
    setToggleReset,
}) => {
    return (
        <GridHeaderContainer>
            <StartButtonContainer
                onClick={() => animateGrid(grid, setGrid, startNode, endNode, algoFunction(), speed, visualizePath)}
            >
                START
            </StartButtonContainer>
            <ResetButtonContainer onClick={() => setToggleReset(!toggleReset)}>RESET</ResetButtonContainer>
        </GridHeaderContainer>
    );
};

export default GridHeader;
