import React from "react";
import { ButtonWrapper, ButtonDanger, ButtonSuccess} from "./Buttons.styled";

function Button (props){
    return (
        <ButtonWrapper>
            <ButtonSuccess onClick={props.handleIncrease}>+</ButtonSuccess>
            <ButtonDanger onClick={props.handleDecrease}>-</ButtonDanger>
        </ButtonWrapper>
    )
}

export default  Button;