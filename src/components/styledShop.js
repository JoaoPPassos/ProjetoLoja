import styled from 'styled-components';

export const ShopArea = styled.div`
  height: auto;
  width: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit  ,minmax(35rem,1fr)); 
  grid-row-gap: 40px ;
  grid-column-gap: 20px;
  margin: auto;
  align-items:center;
`;

export const ItemImage= styled.img`
  height: 100%;
  width: 100%;
  transition: transform 0.4s;
`;

export const ItemInfo = styled.div`
  height: 2rem;
  width: 100%;
  background-color: black;
  transition: ease 0.3s;
  opacity: 0;
  display:block;
  justify-content: center;
  margin-top: -55%;
`;

export const ItemPrice = styled.h4`
  height:auto;
  width: 100%;
  color: white;
  margin-left: 10px;
`;

export const ItemName = styled.h3`
  height:auto;
  width: auto;
  color: white;
  margin-left: 10px;
`;

export const ItemDescription = styled.p`
  height: auto;
  width: auto;
  color: white;
  margin-left: 10px;
`;

export const AddToCart = styled.button`
  height: 5rem;
  width: 20rem;
  margin-left: 20%;
`;

export const Item = styled.div`
  height: 45rem;
  width: 35rem;
  justify-self: center;
  border: 2px solid grey;
  
  &:hover{
    ${ItemInfo}{
      top: 0%;
      height: 17rem;
      opacity: 0.75;
    }

    ${ItemImage}{
      transform: scale(0.9);
    }
  }
`;