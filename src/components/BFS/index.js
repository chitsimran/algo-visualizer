import { useEffect, useState } from "react";
import { bfs } from "../../algorithms/bfs";
import { initializeGrid, useWindowSize } from "../../util";
import Grid from "../Grid";
import GridHeader from "../GridHeader";
import { BFSContainer } from "./style";

const BFS = () => {
    const [grid, setGrid] = useState([]);
    const size = useWindowSize();
    const [toggleReset, setToggleReset] = useState(true);
    const [startNode, setStartNode] = useState({ row: 1, col: 1 });
    const [endNode, setEndNode] = useState({ row: Math.trunc(size.height / 33), col: Math.trunc(size.width / 33) });

    useEffect(() => {
        setGrid(initializeGrid(Math.trunc(size.height / 30), Math.trunc(size.width / 30)));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [size, toggleReset]);

    return (
        <BFSContainer>
            <GridHeader
                grid={grid}
                setGrid={setGrid}
                startNode={startNode}
                endNode={endNode}
                algoFunction={() => bfs(grid, startNode, endNode)}
                speed={10}
                visualizePath={true}
                toggleReset={toggleReset}
                setToggleReset={setToggleReset}
            />
            <Grid
                grid={grid}
                setGrid={setGrid}
                startNode={startNode}
                setStartNode={setStartNode}
                endNode={endNode}
                setEndNode={setEndNode}
            />
        </BFSContainer>
    );
};

export default BFS;
