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
    isDisabled,
    setIsDisabled,
}) => {
    const handleStart = () => {
        if (isDisabled) return;
        setIsDisabled(true);
        animateGrid(grid, setGrid, startNode, endNode, algoFunction(), speed, visualizePath);
    };

    const handleReset = () => {
        setIsDisabled(false);
        setToggleReset(!toggleReset);
    };

    return (
        <GridHeaderContainer>
            <StartButtonContainer onClick={handleStart}>START</StartButtonContainer>
            <ResetButtonContainer onClick={handleReset}>RESET</ResetButtonContainer>
        </GridHeaderContainer>
    );
};

export default GridHeader;
