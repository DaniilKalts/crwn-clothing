import { NavLink } from "react-router-dom";
import styled from "styled-components";



export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const Title = styled(NavLink)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media screen and (max-width: 992px){
    grid-template-columns: repeat(3, 1fr);
    row-gap: 30px;
  }

  @media screen and (max-width: 768px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 475px){
    grid-template-columns: repeat(1, 1fr);
    row-gap: 30px;
  }
`