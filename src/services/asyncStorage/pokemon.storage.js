import AsyncStorage from "./index";

export default {
  getPokemonList,
  setPokemonList,
  getPokemonDetail,
  setPokemonDetail,
  getFavorites,
  addToFavorites,
  removeFromFavorites,
};

export async function getPokemonList() {
  try {
    const data = await AsyncStorage.get("PokemonList");
    return Promise.resolve(data);
  } catch (e) {
    return Promise.reject(e);
  }
}
export async function setPokemonList(data) {
  try {
    await AsyncStorage.set("PokemonList", data);
    return Promise.resolve(true);
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function getPokemonDetail(name) {
  try {
    const data = await AsyncStorage.get(name);
    return Promise.resolve(data);
  } catch (e) {
    return Promise.reject(e);
  }
}
export async function setPokemonDetail(name, data) {
  try {
    await AsyncStorage.set(name, data);
    return Promise.resolve(true);
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function getFavorites() {
  try {
    const data = await AsyncStorage.get("Favorites");
    return Promise.resolve(data);
  } catch (e) {
    return Promise.reject(e);
  }
}
export async function addToFavorites(name) {
  try {
    const data = await getFavorites();
    if (data == null) {
      let list = [];
      list.push(name);
      await AsyncStorage.set("Favorites", list);
    } else {
      data.push(name);
      await AsyncStorage.set("Favorites", data);
    }

    return Promise.resolve(true);
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function removeFromFavorites(name) {
  try {
    const data = await getFavorites();
    if (data == null) {
      let list = [];
      await AsyncStorage.set("Favorites", list);
    } else {
      let filteredData = data.filter((item) => item != name);
      await AsyncStorage.set("Favorites", filteredData);
    }

    return Promise.resolve(true);
  } catch (e) {
    return Promise.reject(e);
  }
}
