import { useEffect, useState } from "react";
import { dfs } from "../../algorithms/dfs";
import { initializeGrid, useWindowSize } from "../../util";
import Grid from "../Grid";
import GridHeader from "../GridHeader";
import { DFSContainer } from "./style";

const DFS = () => {
    const [grid, setGrid] = useState([]);
    const size = useWindowSize();

    const START_NODE = {
        row: 1,
        col: 1,
    };
    const END_NODE = {
        row: Math.trunc(size.height / 33),
        col: Math.trunc(size.width / 33),
    };

    useEffect(() => {
        setGrid(initializeGrid(START_NODE, END_NODE, Math.trunc(size.height / 30), Math.trunc(size.width / 30)));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [size]);

    return (
        <DFSContainer>
            <GridHeader
                grid={grid}
                setGrid={setGrid}
                startNode={START_NODE}
                endNode={END_NODE}
                algoFunction={() => dfs(grid, START_NODE, END_NODE)}
                speed={20}
            />
            <Grid grid={grid} />
        </DFSContainer>
    );
};

export default DFS;
