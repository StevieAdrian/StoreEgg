import React, { useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import SearchComponent from './Search';

interface ItemListProps {
    data: Array<string>;
    id: string;
}

const ItemList: React.FC<ItemListProps> = ({ data }) => {
    const [datas, setDatas] = useState<string[]>(data);

    const handleSearch = (text: string) => {
        const Items = data.filter((item: string) =>
            item.toLowerCase().includes(text.toLowerCase())
        );
        setDatas(Items);
    };

    return (
        <View>
            <SearchComponent onSearch={handleSearch} />
            <FlatList 
                data={datas}
                renderItem={({ item }) => <Text>{item}</Text>}
                // keyExtractor={(item) => item.id}
            />
        </View>
    )

}


export default ItemList;