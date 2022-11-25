// import colors from './colors'
import styled from 'styled-components'

export const PrimaryButton = styled.button`
  padding: 3px 5px;
  border-radius: 6px;
  border: none;
  // box-shadow: 1px 1px 1px ${(prop) => prop.minorColor};
  min-width: 128px;
  background-color: ${(prop) => prop.majorColor};
  color: white;
  font-size: larger;
  font-weight: 500;
  letter-spacing: 1px;
  height: 50px;
  transition: box-shadow 750ms ease-out;
  text-shadow: 1px 1px 1px black;

  &:hover {
    box-shadow: 2px 2px 2px ${(prop) => prop.minorColor};
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: 3px 3px 3px ${(prop) => prop.minorColor};
    color: ${(prop) => prop.minorColor};
  }
`
// export const accessButton = styled.button`

// `
