import styled from "styled-components";

export const AlgoWrapperContainer = styled.div`
    width: 100%;
`;

export const AlgoWrapperBody = styled.div`
    display: flex;
    justify-content: space-around;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
