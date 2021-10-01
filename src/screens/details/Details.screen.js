import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import pokemonService from "../../services/api/pokemon.service";
import pokemonStorage from "../../services/asyncStorage/pokemon.storage";

import Loading from "../../components/loading/Loading.component";
import FavoriteHeader from "./FavoriteHeader.component";
import Info from "./Info.component";

export default function Details(props) {
  const name = props?.route?.params?.name || "";
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    getPokemonDetail(name);
    checkFavorites();
  }, []);

  useLayoutEffect(() => {
    setTitle(name);
  }, [isFavorite]);

  const setTitle = (name) =>
    props.navigation.setOptions({
      title: name,
      headerRight: () => <FavoriteHeader onPress={toggleFavorites} isFavorite={isFavorite} />,
    });
  const getPokemonDetail = async (name) => {
    if (!loading)
      try {
        setLoading(true);
        let data = {};
        const storageRes = await pokemonStorage.getPokemonDetail(name);
        if (storageRes == null) {
          const apiRes = await pokemonService.getPokemonDetail(name);
          await pokemonStorage.setPokemonDetail(name, apiRes);
          data = apiRes?.data || {};
        } else {
          data = storageRes?.data || {};
        }
        setData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
  };
  const toggleFavorites = async () => {
    try {
      if (isFavorite) await pokemonStorage.removeFromFavorites(name);
      if (!isFavorite) await pokemonStorage.addToFavorites(name);
      checkFavorites();
    } catch (error) {}
  };
  const checkFavorites = async () => {
    try {
      const favorites = await pokemonStorage.getFavorites();
      if (favorites != null && favorites.length && favorites.includes(name)) {
        setFavorite(true);
      } else {
        setFavorite(false);
      }
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Loading status={loading} />
      <Info status={!loading} data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
