import logo from '../images/LogoTL.png';
import cart from '../images/Icon feather-shopping-bag.png'
import {ComponentHeader,Menu,One,Two,Three,Logo,Image, ShoppingCart, CartImage} from '../components/styledHeader';

function Header(props){
  return(
    <ComponentHeader>
      <Menu typeof="button" onClick={()=>{console.log("Clicou");}}>
        <One/>
        <Two/>
        <Three/>
      </Menu>
      <Logo>
        <Image src={logo} alt="logo"/>
      </Logo>

      <ShoppingCart>
        <CartImage src={cart} alt="cart"/>
      </ShoppingCart>
    </ComponentHeader>
  );
}

export default Header;