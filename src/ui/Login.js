import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export const Login = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <View style={styles.profileImgContainer}>
                    <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Lion_d%27Afrique.jpg/1879px-Lion_d%27Afrique.jpg" }} style={styles.profileImg} />
                </View>
                <View style={styles.profileName}>
                    <Text style={styles.nameText}>Account</Text>
                </View>
            </View>
            <View style={styles.setting}></View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        flex: 1,
        justifyContent: 'flex-start',
        width: '25%',
        margin: '1%',
        borderRadius: 5,
        backgroundColor: 'powderblue'
    },
    profile: {
        height: '10%',
        flexDirection :'row',
        margin: 5,
        justifyContent: 'space-between',
    },
    profileName: {
        width: '65%',
        justifyContent: 'center',
    },
    nameText:{
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
        marginTop: 5,
        backgroundColor: 'red',
    },
});