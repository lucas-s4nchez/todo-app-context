import { useState } from "react";
import { useQuery } from "react-query";
import { Card } from "../../components";
import { getPokemon } from "../../helpers/getPokemon";
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
  const [value, setValue] = useState("");

  const isEnabled = !!formState;
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidSearch =
      formState.trim().length > 0 || parseInt(formState) > 0;
    if (!isValidSearch) {
      alert("Escribí algo pibe");
      return;
    }
    setValue(formState.toLowerCase().trim());
    isValidSearch ? refetch : undefined;
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
  } = useQuery(["pokemon", value], getPokemon, {
    enabled: isEnabled,
  });
  return (
    <>
      <Title>Busca un pokemon por su nombre o id</Title>
      <FormSearch onSubmit={handleSubmit}>
        <InputSearch
          type="text"
          name="search"
          value={formState}
          onChange={handleChange}
        />
        <ButtonSearch type="submit">Buscar</ButtonSearch>
      </FormSearch>
      {value.length > 1 || parseInt(value) > 0 ? (
        <CardContainer>
          {isLoading && <p>Cargando...</p>}
          {isError && <MessageError>{error.message}</MessageError>}
          {pokemon && <Card data={pokemon.data} />}
        </CardContainer>
      ) : null}
    </>
  );
};
