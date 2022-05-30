import React from 'react';
// import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export const ControlBar = (props) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={styles.container}>
            <View style={styles.homeContainer}>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>主頁</Text>
            </View>
            <View style={styles.profile}>
                <View style={styles.profileImgContainer}>
                    <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Lion_d%27Afrique.jpg/1879px-Lion_d%27Afrique.jpg" }} style={styles.profileImg} />
                </View>
                <View style={styles.profileName}>
                    <Text style={styles.nameText}>{props.account}</Text>
                </View>
            </View>
            <View style={styles.searchContainer}>
                {/* <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    theme='dark'
                /> */}
                <Text style={{fontSize: 20, textAlign:'center'}}>搜尋欄</Text>
            </View>
            <View style={styles.setting}></View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchContainer:{
        margin: 10,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 5
    },
    homeContainer: {
        marginTop: 10,
        justifyContent: 'center',
    },
    featuresContainer:{
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