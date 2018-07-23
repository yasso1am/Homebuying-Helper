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
      <HeaderImage>
        <HeaderText inverted> Home Helper </HeaderText>
      </HeaderImage>
      </div>
    );
  }
}

const HeaderImage = styled.div`
  background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url('https://previews.dropbox.com/p/thumb/AAJpcX9YfCMGktrNgKIcvnEvyazIUA7_e1La_odq_MCFKQjL8g99XJP_XHND_HsLpSUOIzRyFeCda_ic99MOcT5LnqR_zuvfIJq2Kx5m5WQ_Zpl2VbS_mJudqkYDLKKh-ROpFjmzPllY4IsQ35hnRKH3IwlKmkgVXliYW3t0q-wtzA/p.jpeg?size=2048x1536&size_mode=3');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  text-align: center;
  justify-content: center;
  ${'' /* align-items: center; */}
  margin-bottom: 30px;
  color: white;
`

const HeaderText = styled.div`
font-size: 4em;
padding-top: 40px;
`

export default Home;
