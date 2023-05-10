import styled from 'styled-components'

//   AppContainer,
//   ContentContainer,
//   Heading,
//   Image,
//   Button,
//   TextContainer,
//   NavBar,
//   ImageAndHeadingContainer,
//   Textarea,

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: #293d3d;
`

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #00091a;
`

export const ImageAndHeadingContainer = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`

export const Image = styled.img`
  width: 400px;
`

export const UlButtonContainer = styled.ul`
  padding: 0;
  display: flex;
  width: 100%;
`

export const LiButtonContainer = styled.li`
  list-style: none;
  margin-right: 20px;
`

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
`

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  border: 1px solid '#cbd5e1';
  border-radius: 8px;

  align-self: flex-start;
  display: flex;
  flex-direction: column;
`

export const NavBar = styled.div`
  width: 100%;
  border: 1px solid yellow;
  border-radius: 8px;
  padding: 20px 30px 20px 30px;
`

export const Textarea = styled.textarea`
  width: 100%;
  flex-grow: 1;
  height: 100%;
  flex-shrink: 2;
  background-color: transparent;
  outline: none;
  border: 1px solid yellow;
  border-top: none;
  border-radius: 8px;
  color: #ffffff;
  font-size: 25px;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
  padding: 20px 10px 20px 10px;
`
