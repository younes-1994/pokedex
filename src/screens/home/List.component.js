import React from "react";
import { Text, FlatList } from "react-native";
import styles from "./Home.style";

const List = ({ status, data, searchKey }) => {
  const filteredData = data.filter((item) => item.name.includes(searchKey));

  return (
    status && (
      <FlatList
        style={styles.list}
        data={filteredData}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={(item) => item.name}
      />
    )
  );
};
export default List;
