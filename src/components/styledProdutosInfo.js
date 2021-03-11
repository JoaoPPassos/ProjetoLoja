import styled from 'styled-components';

export const InfosArea = styled.div`
  height: auto;
  width:100%;
  display: grid;
  grid-template-columns: repeat(auto-fit  ,minmax(30rem,1fr));
  grid-gap: 0px;
  `;

export const Image = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 10px;
    transition: transform .4s;
  `;

export const Description = styled.div`
  height:auto;
  min-height: 15rem;
  max-height: 30rem;
  width: 90%;
  margin-left: 4.8%;
  border-radius: 10px;
  border: 2px solid grey;
  margin-bottom: 20px;
  padding-left: 20px;
  h2{
    font-family:'roboto',sans-serif;
    text-align: center; 
  }

  h4{
    color:grey;
  }
  @media(max-width: 598px){
    width: 82%;
    margin-left: 9%;
  }
`;

export const ItemColor = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: 30%;
  border: 3px solid grey;
  background-color: ${props => props.color};
  margin-left: 4px;

  &:hover{
    border-color: black;
    cursor: pointer;
  }
`;

export const ItemSize = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  border: 3px solid grey;
  margin-left: 4px;
  
  justify-items:center;
  text-align: center;
  font-weight: bold;
  line-height: 40px;

  &:hover{
    border-color: black;
    cursor: pointer;
  }
`;

export const List = styled.div`
  height: auto;
  width: auto;
  display:flex;
  flex-direction: row;
  padding-left: 20px;
`;

export const BuyButton = styled.button`
  height: 8rem;
  width: 20rem;
  background-color:#8C0303;
  color: white;
  position: absolute;
  right: 0;
  bottom: 30px;
  margin-right: 25px;
  border-radius:10px;
  font-family: 'roboto',sans-serif;
  font-size: 22px;
  transition: 0.6s;
  cursor:pointer;

  &:hover{
    border: 2px solid black;
    background-color:white;
    color: black;
  }
`;

export const Content = styled.div`
  height: 60rem;
  width: ${props => props.width};
  margin-top: 15px;
  margin-bottom: 10px;
  justify-self: center;
  position: relative;
  border-radius: 10px;
  border: 2px solid grey;

  h1{
    text-align: center;
  }

  h3{
    margin-top: 8rem;
    margin-left: 5px;
    text-align: start;
    color: grey;
  }

  @media(max-width: 900px){
    height: 45rem;
    h3{
      margin-top: 3rem;
    }

    ${BuyButton}{
      height:7rem;
      width:15rem;
      bottom: 30px;
      margin-right: 25px;
    }
  }

  @media(max-width: 700px){
    height: 40rem;
    h3{
      margin-top: 2rem;
    }

    ${BuyButton}{
      font-size: 18px;
      height:5rem;
      width:12rem;
      bottom: 20px;
      margin-right: 25px;
    }
  }

  @media(max-width: 599px){
    height: 50rem;
    width:80%;
    h3{
    margin-top: 3rem;
    }

    ${BuyButton}{
      font-size: 22px;
      height:8rem;
      width:18rem;
      bottom: 30px;
      margin-right: 50px;
    }
  }

  @media(max-width: 530px){
    height: 45rem;
    h3{
    margin-top: 2rem;
    }
  }

  @media(max-width: 430px){
    height: 40rem;

    ${ItemColor},${ItemSize}{
      height:3rem;
      width: 3rem;
      margin-left: 15px;
      line-height: 25px;
    }

    h3{
    margin-top: 1.3rem;
    }

    ${BuyButton}{
      font-size: 18px;
      height:6rem;
      width:14rem;
      bottom: 30px;
      margin-right: 30px;
    }
  }

  @media(max-width: 375px){
    height: 35rem;

    ${ItemColor},${ItemSize}{
      height:2.4rem;
      width: 2.4rem;
      margin-left: 15px;
      line-height: 22px;
    }

    h3{
    margin-top: 0.7rem;
    }

    ${BuyButton}{
      font-size: 18px;
      height:5rem;
      width:14rem;
      bottom: 30px;
      margin-right: 30px;
    }
  }
  @media(max-width: 320px){
    height: 32rem;

    ${ItemColor},${ItemSize}{
      height:2.2rem;
      width: 2.2rem;
      margin-left: 15px;
      line-height: 17px;
    }

    h3{
      margin-top: 0rem;
    }

    ${BuyButton}{
      font-size: 16px;
      height:4rem;
      width:12rem;
      bottom: 20px;
      margin-right: 20px;
    }
  }
`;