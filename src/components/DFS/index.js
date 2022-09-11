import { useEffect, useState } from "react";
import { dfs } from "../../algorithms/dfs";
import { animateGrid, initializeGrid } from "../../util";
import Grid from "../Grid";
import { DFSContainer } from "./style";

const DFS = () => {
    const [grid, setGrid] = useState([]);

    const START_NODE = {
        row: 5,
        col: 10,
    };
    const END_NODE = {
        row: 18,
        col: 33,
    };

    useEffect(() => {
        setGrid(initializeGrid(START_NODE, END_NODE));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <DFSContainer>
            <div>
                <button onClick={() => animateGrid(grid, setGrid, dfs(grid, START_NODE, END_NODE), 20)}>Start</button>
            </div>
            <Grid grid={grid} />
        </DFSContainer>
    );
};

export default DFS;
