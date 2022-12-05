import axios from "axios";

export const getPokemon = ({ queryKey }) => {
  const pokemon = queryKey[1];
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
};
