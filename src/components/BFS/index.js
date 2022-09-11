import { useEffect, useState } from "react";
import { bfs } from "../../algorithms/bfs";
import { animateGrid, initializeGrid } from "../../util";
import Grid from "../Grid";
import { BFSContainer } from "./style";

const BFS = () => {
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
        <BFSContainer>
            <div>
                <button onClick={() => animateGrid(grid, setGrid, bfs(grid, START_NODE, END_NODE), 10)}>Start</button>
            </div>
            <Grid grid={grid} />
        </BFSContainer>
    );
};

export default BFS;
