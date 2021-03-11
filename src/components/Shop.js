import {ShopArea,Item,ItemImage,ItemInfo,ItemName,ItemPrice,AddToCart} from '../components/styledShop';
import {useHistory} from 'react-router-dom';

function Shop(props){
  var arrayImages = props.images;
  const history = useHistory();


  return(
    <ShopArea>
      {props.produtos.map((data,key)=>{
        return <Item>
          <ItemImage src = {arrayImages[data.id-1]} />
          <ItemInfo>
            <ItemName>
              {(data.name).toUpperCase()}
            </ItemName>
            <ItemPrice>
              {(data.price).toUpperCase()}
            </ItemPrice>
            <AddToCart>
              Ver Produto
            </AddToCart>
          </ItemInfo>
        </Item>;
      })}
    </ShopArea>
  );
}

export default Shop;