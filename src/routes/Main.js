import React, { Component } from 'react';
// import { useNavigation, useNavigationParam } from 'react-navigation-hooks'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class Main extends Component {

    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>主介面</Text>
                <Text style={styles.textStyle}>帳號：{
                    this.props.route.params.account}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textStyle: {
        fontSize: 18,
        color: 'black',
        marginRight: 10
    }
})