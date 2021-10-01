import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import pokemonService from "../../services/api/pokemon.service";
import pokemonStorage from "../../services/asyncStorage/pokemon.storage";

import Loading from "../../components/loading/Loading.component";
import List from "../../components/list/List.component";
import Empty from "../../components/empty/empty.component";
import Search from "./Search.component";
import styles from "./Home.style";

export default function Home(props) {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getPokemonList();
  }, []);

  const getPokemonList = async () => {
    if (!loading)
      try {
        setLoading(true);
        let list = [];
        const storageRes = await pokemonStorage.getPokemonList();
        if (storageRes == null) {
          const apiRes = await pokemonService.getPokemonList();
          await pokemonStorage.setPokemonList(apiRes);
          list = apiRes?.data?.results || [];
        } else {
          list = storageRes?.data?.results || [];
        }
        setList(list);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
  };

  const onSearch = (value) => {
    setSearch(value);
  };

  const onItemPress = (name) => {
    props.navigation.navigate("Details", { name });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Loading status={loading} />
      {list.length == 0 && !loading && <Empty />}
      {list.length > 0 && !loading && <Search status={!loading} onSearch={onSearch} />}
      {list.length > 0 && !loading && <List data={list} searchKey={search} onItemPress={onItemPress} />}
    </View>
  );
}
