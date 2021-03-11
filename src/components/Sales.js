import {Sale, SalesField, ImageSale,SaleInfoDiv,SaleInfo, ButtonSale} from '../components/styledSales';
import SaleOne from '../images/SaleOne.png';
import SaleTwo from '../images/SaleTwo.png';
import SaleThree from '../images/SaleThree.png';


function Sales(props){
    return(
    <Sale>
      <SalesField className="promotionOne" height='52rem' width='44rem' marginTop='30px' justify='flex-end'>
        <ImageSale src={SaleOne}/>
        <SaleInfoDiv>
          <SaleInfo>
            As melhores promoções de começo de ano  
          </SaleInfo>
          <ButtonSale>
            Confira
          </ButtonSale>
        </SaleInfoDiv>
      </SalesField>

      <div>
        <SalesField className="promotionTwo" height='25rem' width='46rem' marginTop='30px'>
          <ImageSale src={SaleTwo}/>
          <SaleInfoDiv>
            <SaleInfo>
              As melhores promoções de começo de ano  
            </SaleInfo>
            <ButtonSale>
              Confira
            </ButtonSale>
          </SaleInfoDiv>
        </SalesField>

        <SalesField className="promotionThree" height='25rem' width='46rem' marginTop='20px'>
          <ImageSale src={SaleThree}/>
          <SaleInfoDiv>
            <SaleInfo>
              As melhores promoções de começo de ano  
            </SaleInfo>
            <ButtonSale>
              Confira
            </ButtonSale>
          </SaleInfoDiv>
        </SalesField>
      </div>
    </Sale>
  );
}

export default Sales;