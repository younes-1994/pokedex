import AsyncStorage from "@react-native-async-storage/async-storage";

export default { getPokemonList, setPokemonList, getPokemonDetail, setPokemonDetail };

export async function getPokemonList() {
  try {
    const stringData = await AsyncStorage.getItem("PokemonList");
    const data = stringData != null ? JSON.parse(stringData) : null;
    return Promise.resolve(data);
  } catch (e) {
    return Promise.reject(e);
  }
}
export async function setPokemonList(data) {
  try {
    const stringData = JSON.stringify(data);
    await AsyncStorage.setItem("PokemonList", stringData);
    return Promise.resolve(true);
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function getPokemonDetail(name) {}
export async function setPokemonDetail(name) {}
