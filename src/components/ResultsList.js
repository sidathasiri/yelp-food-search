import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultDetail from "./ResultDetail";
import {withNavigation} from 'react-navigation';

const ResultsList = ({title, results, navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                return (
                <TouchableOpacity onPress={() => navigation.navigate("ResultsShow")}>
                    <ResultDetail result={item}/>
                </TouchableOpacity>
                )
                }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default withNavigation(ResultsList) ;