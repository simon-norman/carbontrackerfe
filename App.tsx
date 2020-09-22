import React from 'react';
import { Platform } from 'react-native';
import { Button } from 'react-native-elements';
import styled from 'styled-components/native';

const App: React.FC = () => (
  <Page>
    <Header>Welcome to Impact! Select to start / stop recording your journeys</Header>
    <ButtonsContainer>
      <Button title='Start' buttonStyle={{ height: 76 }} titleStyle={{ fontSize: 24 }} />
      <Button buttonStyle={{ marginTop: 28, height: 76 }} titleStyle={{ fontSize: 24 }} title='Stop' />
    </ButtonsContainer>
  </Page>
);

const Header = styled.Text`
  text-align: center;
  margin-bottom: 20px;
  font-size: 18px;
`;

const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

const Page = styled.SafeAreaView`
  height: 100%;
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: ${isAndroid() ? '54px' : '0'}
  padding-bottom: ${isAndroid() ? '54px' : '0'}
  display: flex;
  justify-content: center;
`;

function isAndroid(): boolean {
  return Platform.OS === 'android';
}

export default App;
