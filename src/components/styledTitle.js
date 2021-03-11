import styled from 'styled-components';

export const Base = styled.div`
    height: 3rem;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 15px;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
  `;

export const FirstLine = styled.div`
    width: 38%;
    height: 0.1rem;
    justify-self: start;
    align-self:center;
    background-color: #8D8585;
    margin-left: 20px;

    @media(max-width: 639px){
      width: 33%;
    }

    @media(max-width: 480px){
      width: 28%;
    }

    @media(max-width: 380px){
      width: 24%
    }
  `;

export const SecondLine = styled.div`
    width: 38%;
    height: 0.1rem;
    justify-self: end;
    align-self:center;
    background-color: #8D8585;
    margin-right: 20px;

    @media(max-width: 639px){
      width: 33%;
    }

    @media(max-width: 480px){
      width: 28%;
    }

    @media(max-width: 380px){
      width: 24%
    }
  `;

export const Text = styled.h4`
    width: 24%;
    text-align: center;
  `;