import {CategoryItemStyled, ItemCircle, ImageItem} from '../components/styledCategoryItem';

function CategoryItem(props){  
  return(
    <CategoryItemStyled>
      <ItemCircle onClick={() => props.category(props.itemType)}>
        <ImageItem src={props.imageSource} />
      </ItemCircle>
    </CategoryItemStyled>
  );
}

export default CategoryItem;