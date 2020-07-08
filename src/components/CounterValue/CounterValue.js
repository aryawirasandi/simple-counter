import React from 'react';
import Value from './CounterValue.styled';

const CounterValue = props => {
    return (
        <Value status={props.value > 5 ? "green" : "red"}>
            {props.value}
        </Value>
    )
}


export default CounterValue;