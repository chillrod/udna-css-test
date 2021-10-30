import React from "react";
import { InformationContainer, Paragraph, Title } from "./style";

export const InformationText = ({ title, paragraph }: any) => {
  return (
    <InformationContainer>
      <Title>{title}</Title>
      <Paragraph>{paragraph}</Paragraph>
    </InformationContainer>
  );
};

export default InformationText;
