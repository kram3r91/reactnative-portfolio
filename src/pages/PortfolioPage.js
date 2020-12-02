import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import styled from 'styled-components/native'

const PortfolioPage = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`

export default function App() {
  return (
    <PortfolioPage>
      <Text>Portfolio Page</Text>
    </PortfolioPage>
  );
}
