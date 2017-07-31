import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Badge } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import style from '../styles/style'

export default class TabBar extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {selectedTabKey: 1};
    }

    onPressBtn(key)
    {
        this.state.selectedTabKey = key;
        this.props.switchScreen(key);
    }

    render()
    {
        return (
            <Footer>
                <FooterTab style={style.footerTab}>
                    <Button vertical style={style.footerTabBtn} onPressIn={() => this.onPressBtn(1)}>
                        <Icon name={"home"} style={this.state.selectedTabKey == 1 ? style.footerTabIcon_active : style.footerTabIcon}/>
                        <Text style={this.state.selectedTabKey == 1 ? style.footerTabText_active : style.footerTabText}>{"Home"}</Text>
                    </Button>
                    <Button vertical style={style.footerTabBtn} onPressIn={() => this.onPressBtn(2)}>
                        <Icon name={"compass"} style={this.state.selectedTabKey == 2 ? style.footerTabIcon_active : style.footerTabIcon}/>
                        <Text style={this.state.selectedTabKey == 2 ? style.footerTabText_active : style.footerTabText}>{"Explore"}</Text>
                    </Button>
                    <Button vertical style={style.footerTabBtn} onPressIn={() => this.onPressBtn(3)}>
                        <Icon name={"search"} style={this.state.selectedTabKey == 3 ? style.footerTabIcon_active : style.footerTabIcon}/>
                        <Text style={this.state.selectedTabKey == 3 ? style.footerTabText_active : style.footerTabText}>{"Search"}</Text>
                    </Button>
                    <Button vertical style={style.footerTabBtn} onPressIn={() => this.onPressBtn(4)}>
                        <Icon name={"user"} style={this.state.selectedTabKey == 4 ? style.footerTabIcon_active : style.footerTabIcon}/>
                        <Text style={this.state.selectedTabKey == 4 ? style.footerTabText_active : style.footerTabText}>{"Me"}</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}
