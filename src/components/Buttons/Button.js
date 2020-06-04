import React from "react";
import { ButtonWrapper, ButtonDanger, ButtonSuccess} from "./Buttons.styled";

function Button (props){
    return (
        <ButtonWrapper>
            <ButtonSuccess>-</ButtonSuccess>
            <ButtonDanger>+</ButtonDanger>
        </ButtonWrapper>
    )
}

export default  Button;