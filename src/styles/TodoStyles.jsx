import styled from "styled-components";

export const RowContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
