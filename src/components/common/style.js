import styled from "styled-components";

export const StartButton = styled.button`
    background-color: var(--theme-primary);
    color: white;
    border-radius: 16px;
    font-size: larger;
    padding: 8px 16px;
    border: none;

    &:hover {
        cursor: pointer;
    }
`;

export const RoundIcon = styled.div`
    background-color: ${(props) => `${props.color}`};
    border-radius: 24px;
    width: 18px;
    height: 18px;
`;
