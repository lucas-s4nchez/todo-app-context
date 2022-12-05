import { useQuery, useQueryClient } from "react-query";
import { getPokemon } from "../helpers/getPokemon";

export const useGetPokemon = (name, pokemon) => {
  return useQuery([name, pokemon], getPokemon, {
    enabled: false,
  });
};
