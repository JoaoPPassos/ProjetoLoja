import jsonObjects from '../jsonObjects/objects.json';
import {InfosArea, Content, Description,Image,List,ItemColor,ItemSize,BuyButton} from '../components/styledProdutosInfo';
import imageOne from "../images/Items/Bermuda/bermuda 1.png";
import imageTwo from "../images/Items/Bermuda/bermuda 2.png";
import imageThree from "../images/Items/Bermuda/bermuda 3.png";
import imageFour from "../images/Items/Bermuda/bermuda 4.png";
import imageFive from "../images/Items/Bermuda/bermuda 5.png";
import imageSix from "../images/Items/Bonés/bone 1.png";
import imageSeven from "../images/Items/Bonés/bone 2.png";
import imageEight from "../images/Items/Bonés/bone 3.png";
import imageNine from "../images/Items/Bonés/bone 4.png";
import imageTen from "../images/Items/Bonés/bone 5.png";
import imageEleven from "../images/Items/Bonés/bone 6.png";
import imageTwelve from "../images/Items/Camisas/camisa 2.png";
import imageThirteen from "../images/Items/Camisas/camisa 3.png";
import imageFourteen from "../images/Items/Camisas/camisa 4.png";
import imageFiveteen from "../images/Items/Sapatos/sapato 1.png";
import imageSixteen from "../images/Items/Sapatos/sapato 2.png";
import imageSeventeen from "../images/Items/Sapatos/sapato 3.png";
import imageEighteen from "../images/Items/Sapatos/sapato 4.png";
import imageNineteen from "../images/Items/Sapatos/sapato 5.png";

function ProdutoInfos(props){
  const id = props.id;

  const produto = jsonObjects[id -1];
  var arrayImages = [imageOne,imageTwo,imageThree,imageFour,imageFive,imageSix, 
    imageSeven,imageEight, imageNine,imageTen,imageEleven,imageTwelve,imageThirteen,
    imageFourteen,imageFiveteen,imageSixteen,imageSeventeen,imageEighteen,imageNineteen];

  var url = arrayImages[produto.id - 1];

  return(
    <div style={{'display':'block'}}>
      <InfosArea>
        <Content className="Photos" width="80%">
          <Image src={url}>
          </Image>
        </Content>
        <Content className="Buy" width="70%">
          <h1>{produto.price}</h1>
          <h3>Cor:</h3>
          <List>
            <ItemColor color='#F94D4D'/>
            <ItemColor color='#4D1092'/>
            <ItemColor color='#3EDF74'/>
          </List>
          <h3>Tamanho:</h3>
          <List>
            <ItemSize>36</ItemSize>
            <ItemSize>38</ItemSize>
            <ItemSize>40</ItemSize>
            <ItemSize>42</ItemSize>
          </List>

          <BuyButton>
            Comprar
          </BuyButton>
        </Content>
      </InfosArea>
      <Description className="Description">
        <h2>{(produto.name).toUpperCase()}</h2>
        <h4>{produto.description}</h4>
      </Description>
    </div>
  );
}

export default ProdutoInfos;