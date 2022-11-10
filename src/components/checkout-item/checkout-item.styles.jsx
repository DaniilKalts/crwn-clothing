import styled from "styled-components";


export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
  }
`

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
  
  @media screen and (max-width: 768px){
    width: 50%;
  }

  @media screen and (max-width: 475px){
    width: 85%;
  }
`

export const Name = styled.span`
  width: 23%;

  @media screen and (max-width: 768px){
    width: 50%;
    text-align: center;
  }
`

export const Quantity = styled.span`
    width: 23%;
    display: flex;

    .arrow {
      cursor: pointer;
    }

    .value {
      margin: 0 10px;
    }

    @media screen and (max-width: 768px){
      width: 50%;
      justify-content: center;
    }
`

export const Price = styled.span`
  width: 23%;

  @media screen and (max-width: 768px){
    text-align: center;
  }
`

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`