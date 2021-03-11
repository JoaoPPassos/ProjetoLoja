import {Component} from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Sales from '../components/Sales';
import Category from '../components/Category';
import Shop from '../components/Shop';
import object from '../jsonObjects/objects.json';
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

class Home extends Component{ 
  constructor(props){
    super(props);

    this.state = {
      itemCategory: null
    }

    this.changeItemCategory = this.changeItemCategory.bind(this);
  }

  changeItemCategory(value){
      this.setState({
      itemCategory: value
    });
  }

  render(){
    var arrayImages = [imageOne,imageTwo,imageThree,imageFour,imageFive,imageSix, 
      imageSeven,imageEight, imageNine,imageTen,imageEleven,imageTwelve,imageThirteen,
      imageFourteen,imageFiveteen,imageSixteen,imageSeventeen,imageEighteen,imageNineteen];

    var array = [];

    for(var i = 0, j = 0; i < object.length;i++){
      if((object[i].type === this.state.itemCategory) || this.state.itemCategory === null){
        array[j] = object[i];
        j++;
      }
    }

    return(
      <div>
        <Header/>
        <div style={{'margin-top':'10rem'}}/>
        <Title title="Promoções"/>
        <Sales/>
        <Title title="Produtos"/>
        <Category categoryItem={this.changeItemCategory}/>
        <Shop produtos={array} images = {arrayImages}/>
      </div>
    );
  }
}

export default Home;