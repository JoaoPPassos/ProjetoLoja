import styled from 'styled-components';

export const CategoryItemStyled = styled.div`
    height: 100%;
    width: 20rem;
    margin-left: 30px;
    display:flex;
    align-items: center;
    justify-content:center;
  `;

  
export const ImageItem = styled.img`
    height: 100%;
    width: 100%;
  `;

export const ItemCircle = styled.div`
    height: 12rem;
    width: 12rem;
    border-radius: 70px;
    border: 4px solid #8C0303;
    transition: transform 0.4s;

    @media(max-width: 768px){
      height: 10rem;
      width: 10rem;
    }


    @media(max-width: 512px){
      height: 8rem;
      width: 8rem;
    }

    @media(max-width: 423px){
      height: 7rem;
      width: 7rem;
    }

    @media(max-width: 380px){
      height: 6.5rem;
      width: 6.5rem;
    }

    &:hover, &:active {
      transform: scale(1.2);
      cursor:pointer;
    }
  `;
