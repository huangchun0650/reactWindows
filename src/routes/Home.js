import React,{ Component } from "react";
import { 
    Text,
    TextInput,
    View,
    TouchableOpacity,
    StyleSheet,
    Platform,
    Appearance,
 } from "react-native";

 //useColorScheme()

 export default class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            theme: Appearance.getColorScheme(),
        }
    }

    componentDidMount() {
        Appearance.addChangeListener(this.handleThemeChange)
    }

    componentWillUnmount() {
        Appearance.removeChangeListener(this.handleThemeChange)
    }

    handleThemeChange = () => {
        this.setState({
            theme: Appearance.getColorScheme(),
        })
    }

    render() {
        return (
            <View style={[this.state.theme == 'dark' ? styles.dark : styles.light, styles.container]}>
                <Text style={styles.infoText}>Login</Text>
                <View style={styles.loginContainer}>
                    <Text style={styles.loginTextStyle}>Account</Text>
                    <View style={styles.loginItem}>
                        <TextInput
                            style={{ flex: 1 }}
                            ref="inputAccount"
                            clearButtonMode="while-editing"
                            placeholder="請輸入帳號"
                            onChangeText={ (input) => this.setState({ account: input }) }
                        />
                    </View>
                    <Text style={styles.loginTextStyle}>Password</Text>
                    <View style={styles.loginItem}>
                        <TextInput
                            style={{ flex: 1 }}
                            secureTextEntry={true}
                            clearButtonMode="while-editing"
                            placeholder="請輸入密碼"
                            ref="inputPassword"
                            onChangeText={(input) => this.setState({ password: input }) }
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.loginBtn}
                        // onPress={() => { this.props.navigation.replace('Main', { account: this.state.account })}}
                        onPress={() => { this.props.navigation.navigate('歡迎', { account: this.state.account }) }}
                        disabled={!this.state.account || !this.state.password}
                    >
                        <Text style={styles.loginBtnText}> Login </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => { this.props.navigation.navigate('忘記密碼')}}>
                    <Text style={styles.btnText}>忘記密碼</Text>
                </TouchableOpacity>
            </View>
        )
    }
 }

 const styles = StyleSheet.create({
     dark: {
         backgroundColor: "#000",
         color: "#fff",
     },
     light: {
         backgroundColor: "#fff",
         color: "#000",
     },
     container: {
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center',
     },
     infoText: {
         fontSize: 28,
         fontWeight: 'bold',
         height: 40
     },
     btn: {
         width: '30%',
         height: 30,
     },
     btnText: {
         fontSize: 18,
         alignSelf: 'center',
         color: '#000'
     },
     loginContainer: {
         flex: 1,
         justifyContent: 'center',
         width: '40%',
         marginHorizontal: 16
     },
     loginItem: {
         flexDirection: 'row',
         alignItems: 'center',
         margin: 10
     },
     loginTextStyle: {
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
     loginBtnText: {
         fontSize: 18,
         alignSelf: 'center',
         color: '#fff'
     },
 })