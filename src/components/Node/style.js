import styled from "styled-components";

export const NodeContainer = styled.div`
    display: inline-flex;
    height: 20px;
    width: 20px;
    text-align: center;
    justify-content: center;
    align-items: center;
    fill: ${(props) => (props.isStartNode ? "#008000" : props.isEndNode ? "#EE4B2B" : "white")};
    border: ${(props) =>
        props.isPath ? "0.1px solid var(--theme-path)" : props.isWall ? "0.1px solid black" : "0.1px solid #ADD8E6"};
    background-color: ${(props) =>
        props.isStartNode || props.isEndNode
            ? "white"
            : props.isPath
            ? "var(--theme-path)"
            : props.isVisited
            ? "var(--theme-visited)"
            : props.isWall
            ? "black"
            : "white"};
    transition: all 30ms ease-in-out;

    /* ${({ isWall }) =>
        isWall &&
        `
        animation-name: wallAnimation;
        animation-duration: 0.2s;
        animation-timing-function: ease-out;
        animation-delay: 0;
        animation-direction: alternate;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        animation-play-state: running;
    `}

    @keyframes wallAnimation {
        0% {
            transform: scale(0.3);
            background-color: rgb(12, 53, 71);
        }
        50% {
            transform: scale(1.2);
            background-color: rgb(12, 53, 71);
        }
        100% {
            transform: scale(1);
            background-color: rgb(12, 53, 71);
        }
    } */
`;
