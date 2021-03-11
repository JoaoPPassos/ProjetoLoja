import Header from '../components/Header';
import {useParams} from 'react-router-dom';
import ProdutoInfos from '../components/ProdutoInfos';

function Produto(){
    let {id} = useParams();
    window.scrollTo({top:0});
    return(
      <div>
        <Header/>
        <div style={{'margin-top':'10rem'}}/>
        <ProdutoInfos id = {id}/>
      </div>
    );
}
export default Produto;