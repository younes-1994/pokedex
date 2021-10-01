import React from "react";
import { FlatList, TouchableOpacity, View, Text } from "react-native";
import styles from "./List.style";

const List = ({ data, searchKey = "", onItemPress }) => {
  const filteredData = data.filter((item) => item.name.includes(searchKey));

  const renderItem = ({ item }) => <Item name={item.name} onPress={onItemPress} />;

  const keyExtractor = (item) => item.name;

  return <FlatList style={styles.list} data={filteredData} renderItem={renderItem} keyExtractor={keyExtractor} />;
};

const Item = ({ name, onPress }) => (
  <TouchableOpacity onPress={() => onPress(name)}>
    <View style={styles.item}>
      <Text style={styles.text}>{name}</Text>
    </View>
  </TouchableOpacity>
);

export default List;
