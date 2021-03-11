import styled from 'styled-components';

export const SaleInfo = styled.p`
    font-size: 18px;
    margin-left:20px;
    color:white;
  `;

export const ButtonSale = styled.a`
    height: 35%;
    width: 20%;
    border-radius: 8px;
    color: white;
    justify-self: flex-end;
    align-self :flex-end;
    margin-right: 10px;
    margin-bottom: 10px;
    opacity:0;
    font-size: 20px;
    font-family:'Roboto', sans-serif;
    
    &:hover {
      color: black;
      cursor: pointer;
    }
  `;

export const SaleInfoDiv = styled.div`
    height: 0rem;
    width: 100%;
    background-color: #8C0303;
    position:relative;
    z-index:0;
    display:flex;
    opacity: 0;
  `;

export const ImageSale = styled.img`
    height: 100%;
    width: 100%;
  `;

export const Sale = styled.div`
    height: auto;
    display: grid;
    margin: auto;
    grid-template-columns: repeat(auto-fit  ,minmax(30rem,1fr));
    grid-gap: 40px;
    
    @media(max-width: 639px){
      justify-items: center;
    }

    .promotionOne{
      ${SaleInfoDiv}{
        margin-top:-12.3rem;
      }

      &:hover{
        ${SaleInfoDiv}{
          height: 11.9rem;
          transition: ease 0.4s;
          opacity:0.8;
          ${ButtonSale}{
            opacity:1;
            transition: ease 0.4s;
            @media(max-width: 1024px){
              height:25%
            }
          }
        }
      }
    }

    .promotionTwo,.promotionThree{
      ${SaleInfoDiv}{
        margin-top:-9.3rem;
      }

      &:hover{
        ${SaleInfoDiv}{
          height: 9rem;
          transition: ease 0.4s;
          opacity:0.8;
          ${ButtonSale}{
            height:30%;
            opacity:1;
            transition: ease 0.4s;
            @media(max-width: 1024px){
              margin-bottom: 10px;
            }
          }
        }
      }
    }
  `;

export const SalesField = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  background-color: ${props => props.color};
  margin-top: ${props => props.marginTop};

  align-self: center;
  justify-self: ${props => props.justify};

  @media(max-width: 1024px){
    width: 36rem;
  }

  @media(max-width: 800px){
    height: calc(${props => props.height} - 4rem);
    width: 30rem;
  }

  @media(max-width: 639px){
    width: 45rem;
    justify-self: center;
  }

  @media(max-width: 480px){
    width: 35rem;
    height: calc(${props => props.height} - 8rem);
    justify-self: center;
  }

  @media(max-width: 380px){
    width: 30rem;
    height: calc(${props => props.height} - 10rem);
    justify-self: center;
  }
  `;