import styled from "styled-components";


interface LogonProps {
  flex?: number;
}

export const LogonContainer = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 80px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled.h3`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  margin-bottom: 24px;
`;

export const TitleHighlight = styled.h3`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff70;
  margin-bottom: 24px;
`;

export const Column = styled.div<LogonProps>`
  flex: ${({ flex }) => flex};
  padding-right: 24px;
  /* display: flex; */
  justify-content: flex-start;
`;
