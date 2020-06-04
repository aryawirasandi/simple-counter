import styled from 'styled-components';

const ButtonWrapper = styled.div `
  display: flex;
  justify-content: center;
`

const ButtonGeneral = styled.button `
  padding: 25px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  border: none;
  border-radius: 5px;
  margin-right: 5px;
  width: 20%;
`

const ButtonDanger = styled(ButtonGeneral)`
  background: #ff0000;
  border-color : red;
  color : white;
`

const ButtonSuccess = styled(ButtonGeneral)`
  background: green;
  border-color : green;
  color : white;
`
export {ButtonWrapper, ButtonDanger, ButtonSuccess};