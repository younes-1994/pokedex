import React, { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./Home.style";
import pokemonService from "../../services/api/pokemon.service";

export default function Home(props) {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    getPokemonList();
  }, []);
  const getPokemonList = async () => {
    if (!loading)
      try {
        setLoading(true);
        const response = await pokemonService.getPokemonList();
        const list = response?.data?.results || [];
        setList(list);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
  };

  const Loading = () => loading && <Text>loading</Text>;
  const List = () =>
    !loading && (
      <FlatList
        style={styles.list}
        data={list}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={(item) => item.name}
      />
    );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Loading />
      {/* <Input /> */}
      <List />
    </View>
  );
}
