import styled from "styled-components";

export const LoginContainer = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;
  gap: 240px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  width: 565px;
  margin-bottom: 20px;
  line-height: 44px;
  color: #ffffff;
`;

export const TitleLogin = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 20px;
  line-height: 44px;
`;

export const SubTitleLogin = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 35px;
  line-height: 25px;
`;

export const EsqueciText = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  color:#e5e044
`;

export const CriarText = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  color:#23DD7A;
;
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;

export const ColumnLogin = styled.div`
  flex: 1;
`;

export const RowLogin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
