import styled from "styled-components";

export const ContentDivider = ({ text, addMargin }: { text: string, addMargin?: boolean }) => {
  return (
    <Title addMargin={addMargin || false}>
      {text}
    </Title>
  );
};

const Title = styled.p<{ addMargin: boolean }>`
  margin-top: ${props => props.addMargin ? "60px" : 0};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--skyblue_4);
`;
