import React from "react";
import {
  CardImage,
  CardStyles,
  CardTitle,
  CardType,
  CardTypes,
  CardTypesContainer,
} from "./CardStyles";

export const Card = ({ data }) => {
  const {
    sprites: {
      other: {
        "official-artwork": { front_default },
      },
    },
    name,
    types,
  } = data;
  return (
    <CardStyles>
      <CardImage>
        <img src={front_default} alt={name} />
      </CardImage>
      <div>
        <CardTitle>{name}</CardTitle>
        <CardTypesContainer>
          <CardTypes>
            {types.map((type, index) => (
              <CardType key={index} type={type.type.name}>
                {type.type.name}
              </CardType>
            ))}
          </CardTypes>
        </CardTypesContainer>
      </div>
    </CardStyles>
  );
};
