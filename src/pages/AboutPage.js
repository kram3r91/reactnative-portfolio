import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import styled from 'styled-components/native'

const AboutPage = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`

export default function App() {
  return (
    <AboutPage>
      <Text>About Page</Text>
    </AboutPage>
  );
}
