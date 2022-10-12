import {
    InfoComponentBody,
    InfoComponentContainer,
    InfoComponentHeader,
    LegendContainer,
    LegendItem,
    LegendMarker,
    LegendText,
} from "./style";

const InfoComponent = ({ header, bodyText, legendKeys = [] }) => {
    return (
        <InfoComponentContainer>
            <InfoComponentHeader>{header}</InfoComponentHeader>
            <InfoComponentBody>{bodyText}</InfoComponentBody>
            <LegendContainer>
                <LegendItem>
                    <LegendMarker color="var(--theme-primary)" />
                    <LegendText>Start Node</LegendText>
                </LegendItem>
                <LegendItem>
                    <LegendMarker color="var(--theme-secondary)" />
                    <LegendText>End Node</LegendText>
                </LegendItem>
                <LegendItem>
                    <LegendMarker color="black" />
                    <LegendText>Wall</LegendText>
                </LegendItem>
                {legendKeys &&
                    legendKeys.map((legendKey, idx) => (
                        <LegendItem key={idx}>
                            <LegendMarker color={legendKey.color} />
                            <LegendText>{legendKey.text}</LegendText>
                        </LegendItem>
                    ))}
            </LegendContainer>
        </InfoComponentContainer>
    );
};

export default InfoComponent;
