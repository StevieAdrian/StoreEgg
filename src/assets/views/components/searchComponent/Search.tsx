import React, { useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';

interface SearchProps {
    onSearch: (text: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [search, setSearch] = useState('');

    const handleSearch = (text: string) => {
        setSearch(text);
        onSearch(text);
    };

    return (
        <TextInput
            placeholder='Search'
            onChangeText={handleSearch}
        />
    );
};

export default Search;
