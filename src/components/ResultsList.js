import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ResultsList = ({title, results}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text>{results.length}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default ResultsList;