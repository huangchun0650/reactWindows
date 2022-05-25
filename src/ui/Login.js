import React from 'react';
import Main from '../routes/Main'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Alert,
    TouchableOpacity,
} from 'react-native';

export const Login = (props) => {
    const [Account, setAccount] = React.useState('');
    const [PassWord, setPassWord] = React.useState('');

    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>Account</Text>
            <View style={styles.item}>
                <TextInput
                    style={{ flex: 1 }}
                    value={Account}
                    clearButtonMode="while-editing"
                    placeholder="請輸入帳號"
                    onChangeText={setAccount}
                />
            </View>
            <Text style={styles.textStyle}>Password</Text>
            <View style={styles.item}>
                <TextInput
                    style={{ flex: 1 }}
                    secureTextEntry={true}
                    clearButtonMode="while-editing"
                    placeholder="請輸入密碼"
                    value={PassWord}
                    onChangeText={setPassWord}
                />
            </View>
            <TouchableOpacity 
                style={styles.loginBtn} 
                onPress={() => { this.props.navigation.navigate('Main') }}
                disabled={!Account || !PassWord}
                >
                <Text style={styles.btnText}> Login </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: '50%',
        marginHorizontal: 16
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    textStyle: {
        fontSize: 18,
        color: 'black',
        marginRight: 10
    },
    loginBtn: {
        height: 40,
        backgroundColor: 'green',
        margin: 20,
        justifyContent: 'center',
    },
    btnText: {
        fontSize: 18,
        alignSelf: 'center',
        color: '#fff'
    }
});