import styled from "styled-components";

export const CardStyles = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  padding: 20px 10px;
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin: auto;
`;

export const CardImage = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export const CardTitle = styled.div`
  margin-block: 15px;
  text-align: center;
  font-size: 20px;
  text-transform: capitalize;
`;
export const CardTypesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const CardTypes = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;
  top: 20px;
`;
export const CardType = styled.div`
  padding: 5px;
  color: #fff;
  font-weight: 700;
  border-radius: 5px;
  text-transform: uppercase;
  background-color: ${({ type }) => {
    switch (type) {
      case "bug":
        return "#9eac1a";
      case "dark":
        return "#2c221b";
      case "dragon":
        return "#705fc6";
      case "electric":
        return "#e2a926";
      case "fairy":
        return "#eaabe5";
      case "fighting":
        return "#6b3020";
      case "fire":
        return "#d5471c";
      case "flying":
        return "#798bd7";
      case "ghost":
        return "#474388";
      case "grass":
        return "#409211";
      case "ground":
        return "#877754";
      case "ice":
        return "#81dbf0";
      case "normal":
        return "#908e7e";
      case "poison":
        return "#854784";
      case "psychic":
        return "#d1547e";
      case "rock":
        return "#9e8340";
      case "steel":
        return "#b0b0bc";
      case "water":
        return "#2f7ece";
    }
  }};
`;
