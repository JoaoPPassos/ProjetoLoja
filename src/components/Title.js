import {Base, FirstLine, SecondLine, Text} from '../components/styledTitle';

function Title(props){
  return(
    <Base>
      <FirstLine/>
      <Text>
        {props.title}
      </Text>
      <SecondLine/>
    </Base>
  );
}

export default Title;