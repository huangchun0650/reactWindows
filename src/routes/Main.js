import React, { Component } from 'react';
import toast from 'react-native-toast-message';
import { ControlBar } from '../ui/ControlBar'
import { SystemInfo } from '../ui/SystemInfo'
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
        toast.show({
            type: 'success',
            text1: 'Login Success',
            text2: 'Hello ' + this.props.route.params.account +'👋'
        })

        return (
            <View style={styles.container}>
                <View style={styles.controlBarContainer}>
                    <ControlBar account={this.props.route.params.account} />
                </View>
                <View style={styles.mainContainer}>
                    <SystemInfo/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    controlBarContainer: {
        flex: 1,
        margin: '0.3%',
        borderRadius: 5,
        backgroundColor: 'powderblue'
    },
    mainContainer: {
        flex: 3,
        margin: '0.3%',
        borderRadius: 5,
        backgroundColor: 'gray'
    },
})