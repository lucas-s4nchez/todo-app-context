import { useState } from "react";
import { Card } from "../../components";
import { useGetPokemon } from "../../hooks/useGetPokemon";
import {
  ButtonSearch,
  CardContainer,
  FormSearch,
  InputSearch,
  MessageError,
  Title,
} from "./PokemonPageStyles";

export const PokemonPage = () => {
  const [formState, setFormState] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setFormState(e.target.value);
  };
  const {
    isLoading,
    isError,
    data: pokemon,
    error,
    refetch,
  } = useGetPokemon("pokemon", formState.toLowerCase().trim());

  return (
    <>
      <Title>Busca un pokemon por su nombre</Title>
      <FormSearch onSubmit={handleSubmit}>
        <InputSearch
          type="text"
          name="search"
          value={formState}
          onChange={handleChange}
        />
        <ButtonSearch onClick={refetch}>Buscar</ButtonSearch>
      </FormSearch>
      <CardContainer>
        {isLoading && <p>Cargando...</p>}
        {isError && <MessageError>{error.message}</MessageError>}
        {pokemon && <Card data={pokemon.data} />}
      </CardContainer>
    </>
  );
};
