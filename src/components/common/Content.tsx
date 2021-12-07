import { ScriptProps } from "next/script";
import styled from "styled-components";

export const Content = ({ children}: ScriptProps) => {
  return (
    <ContentBox>
      {children}
    </ContentBox>
  );
};

const ContentBox = styled.div`
  padding: 25px;
  margin: 0 12px 95px;

  background: var(--white);
  border-radius: 8px;
  
  ${({ theme }) => theme.media.pc`
    margin: 0 25px;
  `}
`;
