import React from 'react';
import { spawn, kill } from 'react-native-childprocess'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export const SystemInfo = async() => {
    let cmdID;
    console.log(cmdID)
    cmdID = await spawn('/sbin/ping', ['google.com'], {
        pwd: project.path,
        stdout: (output) => {
            console.log('>>>', output)
        }
    });

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, textAlign: 'center' }}>111</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchContainer: {
        margin: 10,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 5
    },
    homeContainer: {
        marginTop: 10,
        justifyContent: 'center',
    },
    featuresContainer: {
        justifyContent: 'center',
        height: '10%'
    },
    profile: {
        height: '10%',
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'space-between',
    },
    profileName: {
        width: '65%',
        justifyContent: 'center',
    },
    nameText: {
        marginLeft: 10,
        fontSize: 20,
    },
    profileImgContainer: {
        marginTop: 8,
        marginLeft: 8,
        justifyContent: 'flex-start',
    },
    profileImg: {
        height: 65,
        width: 65,
        borderRadius: 40,
    },
    setting: {
        flex: 2,
        margin: 5,
        backgroundColor: 'white',
    },
});