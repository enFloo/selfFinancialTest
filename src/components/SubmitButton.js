import StyledButton from '../components/styled/styledButton.styled';
import Stars from './Stars';

const SubmitButton = () =>{

    const onSubmit = (rating) =>{
        console.log("Hello")
    }
    

    return(
        <div style={{flex:"4"}}>
            <StyledButton
            onClick={() => onSubmit()}
            >SUBMIT</StyledButton>
        </div>
    )
    
};

export default SubmitButton;