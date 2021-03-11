import styled from 'styled-components';

export const CategoryDiv = styled.div`
    height: 18.9rem;
    width: 100%;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    margin-bottom: 20px;
    overflow-x: auto;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    white-space: nowrap;

    @media(max-width: 512px){
      height: 15rem;
    }
    @media(max-width: 423px){
      height: 13.5rem;
    }
  `;