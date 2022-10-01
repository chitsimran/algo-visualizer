import styled from "styled-components";

export const StartButtonContainer = styled.button`
    background-color: var(--theme-secondary);
    color: white;
    border-radius: 4px;
    font-size: larger;
    padding: 8px 16px;
    border: none;
    margin-right: 20px;

    &:hover {
        cursor: pointer;
    }
`;

export const ResetButtonContainer = styled.div`
    color: var(--theme-secondary);
    margin-left: 20px;
    float: right;

    &:hover {
        cursor: pointer;
    }
`;

export const StartEndIcon = styled.div`
    background-color: ${(props) => `${props.color}`};
    width: 20px;
    height: 20px;
`;
