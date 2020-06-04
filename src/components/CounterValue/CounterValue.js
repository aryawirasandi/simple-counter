import React from 'react';
import Value from './CounterValue.styled';
const CounterValue = props => {
    return (
        <Value>
            {props.value}
        </Value>
    )
}


export default CounterValue;