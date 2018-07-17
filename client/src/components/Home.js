import React from 'react';
import { 
  Header,
  Button,
  Sidebar,
} from 'semantic-ui-react';
import styled from 'styled-components'
import HomeForm from './HomeForm'

class Home extends React.Component {
  state = { visible: false}

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })
  
  render() {
    return (
      <div>
        <Button
          fluid
          onClick={this.handleButtonClick}
        >
          Toggle visibility
        </Button>
      <HeaderImage>
        <Header as="h1" inverted> Home Helper </Header>
      <Sidebar
        animation='push'
        direction='right'
        inverted="true"
        vertical="true"
        visible={this.state.visible}
      >
        <HomeForm />
      </Sidebar>
      </HeaderImage>
      </div>
    );
  }
}

const HeaderImage = styled.div`
  background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url('https://photos-4.dropbox.com/t/2/AADd-IPubyxMaptsjpPwovndw_PZBHAXjtbIFWGQ-OkezQ/12/42845243/jpeg/32x32/1/_/1/2/architecture-beautiful-exterior-106399.jpg/ENim4CAYqOkCIAIoAg/igTHUhwQnqfdxHfG91i4omT73qv_YHs4Oex8bRMc_Y8?size=2048x1536&size_mode=3');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 45vh;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  color: white;
`

export default Home;
