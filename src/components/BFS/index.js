import { useEffect, useState } from "react";
import { bfs } from "../../algorithms/bfs";
import { initializeGrid, useWindowSize } from "../../util";
import Grid from "../Grid";
import GridHeader from "../GridHeader";
import { BFSContainer } from "./style";

const BFS = () => {
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
        <BFSContainer>
            <GridHeader
                grid={grid}
                setGrid={setGrid}
                startNode={START_NODE}
                endNode={END_NODE}
                algoFunction={() => bfs(grid, START_NODE, END_NODE)}
                speed={10}
            />
            <Grid grid={grid} />
        </BFSContainer>
    );
};

export default BFS;
