import React from "react";
import styled from 'styled-components';
const FooterWrapper = styled.div `
    position: absolute;
    bottom: 0px;
    width: 100%;
    color: white;
    background: black;
    text-align: center;
`;


const Footer = props => {
    return(
        <FooterWrapper>
            <p>{props.text}</p>
        </FooterWrapper>
    )
}



export default  Footer;