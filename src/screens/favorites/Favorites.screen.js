import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import pokemonStorage from "../../services/asyncStorage/pokemon.storage";

import Loading from "../../components/loading/Loading.component";
import List from "../../components/list/List.component";
import Empty from "../../components/empty/empty.component";
import styles from "././Favorites.style";

export default function Favorites(props) {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    getFavList();
  }, [props, isFocused]);

  const getFavList = async () => {
    if (!loading)
      try {
        setLoading(true);
        let list = [];
        const storageRes = await pokemonStorage.getFavorites();
        if (storageRes != null) {
          list = storageRes?.map((item) => ({ name: item })) || [];
        }
        setList(list);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
  };

  const onItemPress = (name) => {
    props.navigation.navigate("Details", { name });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Loading status={loading} />
      {list.length == 0 && !loading && <Empty />}
      {list.length > 0 && !loading && <List data={list} onItemPress={onItemPress} />}
    </View>
  );
}
