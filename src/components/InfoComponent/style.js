import styled from "styled-components";

export const InfoComponentContainer = styled.div`
    border: 1px solid lightgray;
    width: 20%;
    border-radius: 4px;
    /* box-shadow: 1px 1px 1px 1px lightgray; */

    @media (max-width: 768px) {
        width: 80%;
        margin: auto;
        margin-bottom: 10px;
    }
`;

export const InfoComponentHeader = styled.div`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    padding: 10px 0;
    background-color: var(--theme-tertiary);
    color: white;
    margin-bottom: 16px;
`;

export const InfoComponentBody = styled.div`
    font-size: medium;
    text-align: center;
    color: #383838;
    margin: 4px;
`;

export const LegendContainer = styled.div`
    margin-top: 20px;
`;

export const LegendItem = styled.div`
    display: flex;
`;

export const LegendMarker = styled.div`
    background-color: ${(props) => props.color};
    width: 20px;
    height: 20px;
    border: 0.1px solid #add8e6;
    margin: 8px 20px;
`;

export const LegendText = styled.div`
    align-self: center;
`;
