import {CategoryDiv} from '../components/styledCategory';
import CategoryItem from '../components/CategoryItem';
import ItemOne from '../images/ItemOne.png';
import ItemTwo from '../images/ItemTwo.png';
import ItemThree from '../images/ItemThree.png';
import ItemFour from '../images/ItemFour.png';


function Category(props){
  

  return(
    <CategoryDiv>
      <CategoryItem imageSource={ItemOne} category={props.categoryItem} itemType={"Bermuda"}/>
      <CategoryItem imageSource={ItemTwo} category={props.categoryItem} itemType={"Sapato"}/>
      <CategoryItem imageSource={ItemThree} category={props.categoryItem} itemType={"Bone"}/>
      <CategoryItem imageSource={ItemFour} category={props.categoryItem} itemType={"Camisa"}/>
    </CategoryDiv>
  );
}

export default Category;