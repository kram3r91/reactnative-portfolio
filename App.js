import React from 'react';
import { Text, View, Button, SCrollView}  from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faQrcode, faCode, faUser } from '@fortawesome/free-solid-svg-icons'

import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native'

import Home from './src/pages/HomePage';
import About from './src/pages/AboutPage';
import Portfolio from './src/pages/PortfolioPage';
import Contact from './src/pages/ContactPage';

const AppWrapper = styled.View`
  display: flex;
  flex-wrap: nowrap;
  background-color: #f0f0f0;
  height: 100%;
`
const PageWrapper = styled.View`
  flex-grow: 1;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: 100px;
`
const NavigationWrap = styled.View`
  flex-direction: row;
`
const NavigationText = styled.Text`
  color: #fff;
  font-size: 12px;
  padding: 8px 6px 6px;
  text-align: center;
  flex-wrap: nowrap;
  text-transform: uppercase;
`
const ButtonLink = styled.View`
  background-color: #209dd7;
  flex-grow: 1;
`

export default function App() {
  return (
    <NativeRouter>
      <StatusBar hidden />
      <AppWrapper>
        <PageWrapper>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </PageWrapper>
        <NavigationWrap>
          <ButtonLink>
            <Link to="/" underlayColor="#1188BF" >
              <NavigationText><FontAwesomeIcon icon={ faHome } size={ 28 } color="white" />{"\n"}Home</NavigationText>
            </Link>
          </ButtonLink>
          <ButtonLink>
            <Link to="/about" underlayColor="#1188BF">
              <NavigationText><FontAwesomeIcon icon={ faQrcode } size={ 28 } color="white" />{"\n"}About</NavigationText>
            </Link>
          </ButtonLink>
          <ButtonLink>
            <Link to="/portfolio" underlayColor="#1188BF">
              <NavigationText><FontAwesomeIcon icon={ faCode } size={ 28 } color="white" />{"\n"}Portfolio</NavigationText>
            </Link>
          </ButtonLink>
          <ButtonLink>
            <Link to="/contact" underlayColor="#1188BF">
              <NavigationText><FontAwesomeIcon icon={ faUser } size={ 28 } color="white" />{"\n"}Contact</NavigationText>
            </Link>
          </ButtonLink>
        </NavigationWrap>
      </AppWrapper>
    </NativeRouter>
  );
}
