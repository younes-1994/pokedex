import axios from "./index";

export default { getPokemonList, getPokemonDetail };

export function getPokemonList() {
  return axios({
    baseURL: "https://pokeapi.co/api/v2",
    url: "pokemon?limit=100&offset=200",
    method: "GET",
  });
}
export function getPokemonDetail(name) {
  return axios({
    baseURL: "https://pokeapi.co/api/v2",
    url: `/pokemon/${name}`,
    method: "GET",
  });
}
