import React from "react";
import styled from "styled-components";
import Title from "./components/Title";
import Flex from "./components/Flex";
import Console from "./components/Console";
import Button from "./components/Button";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
`

function App() {
    return (
        <AppWrapper>
            <Flex justify={'center'}>
                <Title>Console cmd 2020. (c) Yan</Title>
            </Flex>
            <Flex direction={'column'} margin={'10px 0'}>
                <Console/>
                <Button outlined align={'flex-end'}>Send</Button>
            </Flex>
        </AppWrapper>
    );
}

export default App;
