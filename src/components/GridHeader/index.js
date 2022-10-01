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
                Start
            </StartButtonContainer>
            <ResetButtonContainer onClick={() => setToggleReset(!toggleReset)}>Reset</ResetButtonContainer>
        </GridHeaderContainer>
    );
};

export default GridHeader;
