import Node from "../Node";
import { GridRow } from "./style";

const Grid = ({ grid }) => {
    return (
        <>
            {grid.map((row, rowId) => {
                return (
                    <GridRow key={rowId}>
                        {row.map((node, colId) => {
                            return (
                                <Node
                                    row={rowId}
                                    col={colId}
                                    key={rowId + "_" + colId}
                                    isStartNode={node.isStartNode}
                                    isFinishNode={node.isFinishNode}
                                    isVisited={!!node.isVisited}
                                />
                            );
                        })}
                    </GridRow>
                );
            })}
        </>
    );
};

export default Grid;
