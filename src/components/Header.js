import logo from '../images/LogoTL.png';
import cart from '../images/Icon feather-shopping-bag.png'
import {ComponentHeader,Menu,One,Two,Three,Logo,Image, ShoppingCart, CartImage} from '../components/styledHeader';
import {Link} from 'react-router-dom';

function Header(props){
  return(
    <ComponentHeader>
      <Menu typeof="button" onClick={()=>{console.log("Clicou");}}>
        <One/>
        <Two/>
        <Three/>
      </Menu>
      <Logo>
        <Link to='/'>
          <Image src={logo} alt="logo"/>
        </Link>
      </Logo>

      <ShoppingCart>
        <CartImage src={cart} alt="cart"/>
      </ShoppingCart>
    </ComponentHeader>
  );
}

export default Header;