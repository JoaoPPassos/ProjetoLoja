import styled from 'styled-components';

export const ComponentHeader = styled.header`
    height:10rem;
    width: 100%;
    min-width: 320px;
    border-bottom: 1px solid #A29797;
    position:fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255,255,255,0.85);
    z-index:10;
  `;

export const Menu = styled.div`
    height: 4rem;
    width: 3rem;
    display: block;
    margin-left: 50px;

    @media(max-width: 768px){
      margin-left: 45px;
      height: 3.5rem;
      width: 2.75rem;
    }

    @media(max-width: 425px){
      margin-left: 40px;
      height: 3.5rem;
      width: 2.5rem;
    }
    
    @media(max-width: 375px){
      margin-left: 35px;
      height: 3rem;
      width: 2.25rem;
    }

    @media(max-width: 320px){
      margin-left: 35px;
      height: 3rem;
      width: 2rem;
    }
  `;

export const One = styled.div`
    background-color:#707070;
    height: 8%;
    width: 100%;
    margin: 6px auto;
  `;

export const Two = styled.div`
    background-color:#707070;
    height: 8%;
    width: 100%;
    margin: 6px auto;
  `;

export const Three = styled.div`
    background-color:#707070;
    height: 8%;
    width: 100%;
    margin: 6px auto;
    `;

export const ShoppingCart = styled.div`
    height: 4rem;
    width: 8rem;
    margin-right: 50px;
    
    @media(max-width: 768px){
      margin-right: 45px;
      width: 6rem;
    }

    @media(max-width: 425px){
      margin-right: 40px;
      width: 4rem;
    }
    
    @media(max-width: 375px){
      margin-right: 35px;
      width: 3.4rem;
    }

    @media(max-width: 320px){
      margin-right: 35px;
      width: 1rem;
    }
  `;

export const CartImage = styled.img`
    height: auto;
    width: auto;
  `;

export const Logo = styled.div`
    height: 14rem;
    width: 16.6rem;
    justfy-self: center;
    
    @media(max-width: 768px){
      width: 14.6rem;
    }

    @media(max-width: 425px){
      width: 13.6rem;
    }
    
    @media(max-width: 375px){
      width: 12.6rem;
    }

    @media(max-width: 320px){
      width: 11.6rem;
    }
  `;

export const Image = styled.img`
    height: 100%;
    width: 100%;
  `;