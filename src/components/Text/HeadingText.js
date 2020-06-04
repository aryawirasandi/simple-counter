import React from "react";
import HeadingValue from './Heading.styled';
const HeadingText = props => {
    return (
        <HeadingValue>
            {props.text}
        </HeadingValue>
    )
}

export default HeadingText