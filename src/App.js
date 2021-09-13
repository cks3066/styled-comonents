import React from "react";
import styled, { css, keyframes, ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import theme from "./theme";

const App = (props) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <Button>success</Button>
          <Button danger rotationTime={5}>
            failed
          </Button>
          <Input></Input>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  --webkit-appearance: none;
  cursor: pointer;
  &::active,
  &:focus {
    outline: none;
  }
  background-color: ${(props) =>
    props.danger ? props.theme.dangerColor : props.theme.successColor};
  ${(props) => {
    if (props.danger) {
      return css`
        animation: ${rotation} ${props.rotationTime}s linear infinite;
      `;
    }
  }}
`;

const rotation = keyframes`
  from{
    transform:rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-color: gray;
  border-radius: 10px;
  padding: 20px;
`;

const Input = styled.input.attrs({ required: true, type: "submit" })`
  background-color: ${(props) => props.theme.mainColor};
  ${awesomeCard};
`;
