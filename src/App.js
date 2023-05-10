import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import './App.css'
import {
  AppContainer,
  ContentContainer,
  ImageAndHeadingContainer,
  Heading,
  Image,
  UlButtonContainer,
  LiButtonContainer,
  Button,
  TextContainer,
  NavBar,
  Textarea,
} from './styledComponents'

const textEditorImageUrl =
  'https://assets.ccbp.in/frontend/react-js/text-editor-img.png'

//  alt should be text editor

// Replace your code here\

class App extends Component {
  state = {inputText: '', isBold: false, isItalic: false, isUnderLine: false}

  /* <textarea id="w3review" name="w3review" rows="4" cols="50"> */

  onclickBoldIcon = () => {
    this.setState(preState => ({isBold: !preState.isBold}))
  }

  onclickItalicIcon = () => {
    this.setState(preState => ({isItalic: !preState.isItalic}))
  }

  onclickUnderLineIcon = () => {
    this.setState(preState => ({isUnderLine: !preState.isUnderLine}))
  }

  render() {
    const {inputText, isBold, isItalic, isUnderLine} = this.state
    return (
      <AppContainer>
        <ContentContainer>
          <ImageAndHeadingContainer>
            <Heading>Text Editor</Heading>
            <Image alt="text editor" src={textEditorImageUrl} />
          </ImageAndHeadingContainer>
          <TextContainer>
            <NavBar>
              <UlButtonContainer>
                <LiButtonContainer key={0}>
                  <Button
                    isActive={isBold}
                    onClick={this.onclickBoldIcon}
                    type="button"
                    data-testid="bold"
                  >
                    <VscBold size={25} />
                  </Button>
                </LiButtonContainer>
                <LiButtonContainer key={1}>
                  <Button
                    isActive={isItalic}
                    onClick={this.onclickItalicIcon}
                    type="button"
                    data-testid="italic"
                  >
                    <GoItalic size={25} />
                  </Button>
                </LiButtonContainer>
                <LiButtonContainer key={2}>
                  <Button
                    isActive={isUnderLine}
                    onClick={this.onclickUnderLineIcon}
                    type="button"
                    data-testid="underline"
                  >
                    <AiOutlineUnderline size={25} />
                  </Button>
                </LiButtonContainer>
              </UlButtonContainer>
            </NavBar>
            <Textarea
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderLine}
            >
              {inputText}
            </Textarea>
          </TextContainer>
        </ContentContainer>
      </AppContainer>
    )
  }
}

export default App
