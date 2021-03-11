import {ShopArea,Item,ItemImage,ItemInfo,ItemName,ItemPrice,AddToCart, LinkProdutos} from '../components/styledShop';
import uuid from 'react-uuid';

function Shop(props){
  var arrayImages = props.images;

  return(
    <ShopArea>
      {props.produtos.map((data,key)=>{
        var url = `/produto/${data.id}`;
        return <Item key={uuid()}>
          <ItemImage src = {arrayImages[data.id-1]} />
          <ItemInfo>
            <ItemName>
              {(data.name).toUpperCase()}
            </ItemName>
            <ItemPrice>
              {(data.price).toUpperCase()}
            </ItemPrice>
            <AddToCart>
              <LinkProdutos to={url}>Ver Produto</LinkProdutos>
            </AddToCart>
          </ItemInfo>
        </Item>;
      })}
    </ShopArea>
  );
}

export default Shop;