import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, FlatList, Image} from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen =({navigation}) => {
    const id = navigation.getParam("id");
    const [result, setResult] = useState(null);

    const getResult = async(id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if(!result){
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{result.name}</Text>
            <Text style={styles.phone}>Tel: {result.phone}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{uri: item}}/>
                }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        marginBottom: 5,
        borderRadius: 8
    },
    phone: {
        fontSize: 12,
        color: "grey",
        marginBottom: 10,
        fontStyle: "italic"
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        margin: 10,
        marginBottom: 0,
        borderBottomColor: "black",
        borderBottomWidth: 1
    },
    container: {
        alignItems: "center"
    }
});

export default ResultsShowScreen;
