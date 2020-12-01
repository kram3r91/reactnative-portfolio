import React from 'react';
import {
  Text,
  View,
  Button,
  SCrollView
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native'

import Home from './src/pages/HomePage';
import About from './src/pages/AboutPage';
import Portfolio from './src/pages/PortfolioPage';
import Contact from './src/pages/ContactPage';

export default function App() {
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
