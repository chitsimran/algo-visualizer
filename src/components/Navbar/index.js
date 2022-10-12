import { ALGO_BFS, ALGO_DFS } from "../../constants/algoConstants";
import { AlgoButton, AlgoButtonsContainer, LogoContainer, NavbarContainer } from "./style";

const Navbar = ({ algo, setAlgo }) => {
    return (
        <NavbarContainer>
            <LogoContainer>Algo Visualizer</LogoContainer>
            <AlgoButtonsContainer>
                <AlgoButton isSelected={algo === ALGO_DFS} onClick={() => setAlgo(ALGO_DFS)}>
                    DFS
                </AlgoButton>
                <AlgoButton isSelected={algo === ALGO_BFS} onClick={() => setAlgo(ALGO_BFS)}>
                    BFS
                </AlgoButton>
            </AlgoButtonsContainer>
        </NavbarContainer>
    );
};

export default Navbar;
