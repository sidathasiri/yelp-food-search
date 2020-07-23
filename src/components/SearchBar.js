import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (<View style={styles.searchBox}>
        <Feather name="search" style={styles.iconStyle}/>
        <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search" 
        value={term}
        onChangeText={onTermChange}
        onEndEditing={() => onTermSubmit(term)}
        style={styles.textInput}/>
    </View>);
}

const styles = StyleSheet.create({
    searchBox: {
        backgroundColor: '#e6e3e3',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 10
    },
    textInput: {
        padding: 5,
        flex:1,
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;