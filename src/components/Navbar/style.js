import styled from "styled-components";

export const NavbarContainer = styled.div`
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

export const LogoContainer = styled.div`
    font-size: x-large;
    font-weight: 900;
    color: var(--theme-primary);
    display: inline-block;
    margin-right: 20px;
`;

export const AlgoButtonsContainer = styled.div`
    padding: 0 40px;
`;

export const AlgoButton = styled.button`
    border: none;
    color: ${(props) => (props.isSelected ? "var(--theme-primary)" : "#282828")};
    margin: 0 20px;
    background-color: white;
    font-size: large;
    border-radius: 24px;
    padding: 8px 24px;

    &:hover {
        cursor: pointer;
        color: var(--theme-primary);
    }
`;
