import { useEffect } from "react";
import { useState } from "react";
import { initializeGrid, useWindowSize } from "../../util";
import Grid from "../Grid";
import GridHeader from "../GridHeader";
import InfoComponent from "../InfoComponent";
import { AlgoWrapperBody, AlgoWrapperContainer, GridWrapper } from "./style";

const AlgoWrapper = ({ algoFunction, speed, visualizePath = false, header, bodyText, legendKeys = [] }) => {
    const [grid, setGrid] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    const size = useWindowSize();
    const [toggleReset, setToggleReset] = useState(true);
    const [startNode, setStartNode] = useState({ row: 1, col: 1 });
    const [endNode, setEndNode] = useState({ row: 2, col: 2 });

    useEffect(() => {
        setEndNode({ row: Math.trunc(size.height / 40), col: Math.trunc(size.width / 40) });
        setGrid(initializeGrid(Math.trunc(size.height / 30), Math.trunc(size.width / 30)));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [size, toggleReset]);

    return (
        <AlgoWrapperContainer>
            <AlgoWrapperBody>
                <InfoComponent header={header} bodyText={bodyText} legendKeys={legendKeys} />
                <GridWrapper>
                    <GridHeader
                        grid={grid}
                        setGrid={setGrid}
                        startNode={startNode}
                        endNode={endNode}
                        algoFunction={() => algoFunction(grid, startNode, endNode)}
                        speed={speed}
                        visualizePath={visualizePath}
                        toggleReset={toggleReset}
                        setToggleReset={setToggleReset}
                        isDisabled={isDisabled}
                        setIsDisabled={setIsDisabled}
                    />
                    <Grid
                        grid={grid}
                        setGrid={setGrid}
                        startNode={startNode}
                        setStartNode={setStartNode}
                        endNode={endNode}
                        setEndNode={setEndNode}
                        isDisabled={isDisabled}
                        setIsDisabled={setIsDisabled}
                    />
                </GridWrapper>
            </AlgoWrapperBody>
        </AlgoWrapperContainer>
    );
};

export default AlgoWrapper;
