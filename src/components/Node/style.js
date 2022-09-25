import styled from "styled-components";

export const NodeContainer = styled.div`
    display: inline-flex;
    height: 20px;
    width: 20px;
    text-align: center;
    justify-content: center;
    align-items: center;
    fill: ${(props) => (props.isStartNode ? "#008000" : props.isFinishNode ? "#EE4B2B" : "white")};
    border: ${(props) =>
        props.isPath ? "0.1px solid var(--theme-path)" : props.isWall ? "0.1px solid black" : "0.1px solid lightblue"};
    /* border-radius: 24px; */
    background-color: ${(props) =>
        props.isStartNode || props.isFinishNode
            ? "white"
            : props.isPath
            ? "var(--theme-path)"
            : props.isVisited
            ? "var(--theme-visited)"
            : props.isWall
            ? "black"
            : "white"};
    transition: all 30ms ease-in-out;
`;
