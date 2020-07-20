import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    return (<View>
        <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={searchApi}/>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
    <Text>Results count: {results.length}</Text>
    <ResultsList title="Cost Effective"/>
    <ResultsList title="Bit Pricier"/>
    <ResultsList title="Big Spender"/>
    </View>);
}

const styles = StyleSheet.create({
});

export default SearchScreen;