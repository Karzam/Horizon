/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { Container, Content, Header, Body, Title, Footer, FooterTab, Button, Icon, Badge, Text } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';
import style from './styles/style'
import HomeScreen from './components/screens/HomeScreen.js'
import ExploreScreen from './components/screens/ExploreScreen.js'
import SearchScreen from './components/screens/SearchScreen.js'
import ProfileScreen from './components/screens/ProfileScreen.js'
import TabBar from './components/TabBar.js'

export default class Horizon extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {currentScreen: <HomeScreen/>};
        this.switchScreen = this.switchScreen.bind(this);
    }

    switchScreen(key)
    {
        switch (key) {
            case 1:
                this.setState({currentScreen: <HomeScreen/>});
                break;
            case 2:
                this.setState({currentScreen: <ExploreScreen/>});
                break;
            case 3:
                this.setState({currentScreen: <SearchScreen/>});
                break;
            default:
                this.setState({currentScreen: <ProfileScreen/>});
        }
    }

    render()
    {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Horizon</Title>
                    </Body>
                </Header>
                { this.state.currentScreen }
                <Content/>
                <TabBar switchScreen = {this.switchScreen} />
            </Container>
        );
    }
}

AppRegistry.registerComponent('Horizon', () => Horizon);
