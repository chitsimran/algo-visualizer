import { GridRow } from "../common/style";
import Node from "../Node";
import { DijkstraContainer } from "./style";

const Dijkstra = () => {
    let grid = [];

    for (let i = 0; i < 20; i++) {
        grid.push([]);
        for (let j = 0; j < 40; j++) {
            grid[i].push(0);
        }
    }

    return (
        <DijkstraContainer>
            {grid.map((row, rowId) => {
                return (
                    <GridRow key={rowId}>
                        {row.map((item, colId) => (
                            <Node row={rowId} col={colId} key={rowId + "_" + colId} />
                        ))}
                    </GridRow>
                );
            })}
        </DijkstraContainer>
    );
};

export default Dijkstra;
