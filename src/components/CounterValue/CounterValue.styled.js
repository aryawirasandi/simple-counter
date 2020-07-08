import styled from 'styled-components';

const Value = styled.h1`
    color: ${props => props.status};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
`

export default Value;