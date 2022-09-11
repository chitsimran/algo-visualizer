import styled from "styled-components";

export const NodeContainer = styled.div`
    display: inline-block;
    height: 20px;
    width: 20px;
    border: 0.1px solid lightblue;
    background-color: ${(props) =>
        props.isStartNode ? "green" : props.isFinishNode ? "red" : props.isVisited ? "blue" : "white"};
`;
