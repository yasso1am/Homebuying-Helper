import React, { Component } from 'react';
import { 
  Menu,
  Image,
  Header,
} from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';
import styled from 'styled-components'

class NavBar extends Component {
  state = {activeItem: ''}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  

  leftNavs = () => {
    const {activeItem } = this.state
    const { user } = this.props
    if (user.id){
      return(
        <div>
        <Menu.Menu position="left">
          <Menu.Item 
            as={Link} to="/houses"
            name='Your Homes' 
            active={activeItem === 'Your Homes'} 
            onClick={this.handleItemClick}
          />   
          <Menu.Item 
            as={Link} to="/homeform"
            name='Add A Home'          
            active={activeItem === 'Add A Home'}
            onClick={this.handleItemClick}
          /> 
        </Menu.Menu>
      </div>
    )
  }
  }
  
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position="right">
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position="right">
          <Menu.Item 
            as={Link} to="/register"
            name='Register' 
          />
          <Menu.Item 
            as={Link} to="/login"
            name='Login' 
          />
      </Menu.Menu>
    );
  }

  render() {
    const {activeItem} = this.state
    return (
      <div>
        <Menu 
          size="small" 
          borderless 
          pointing 
        >
        <LogoStyle>
        <Menu.Item 
          as={Link} to="/"
          fitted="vertically"
          name="Home"
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        >
          <Image
            centered
            size="tiny" 
            src="https://previews.dropbox.com/p/thumb/AALOe574p8wwYXRmU7Ubr-4kQHduQzpThOT3a5RFNRyvhqqhhXL7dlLFe3R6hEMMIJlsa8c83EnGOGuclt2pEXkjP5PD2u2hhOxLo2TaUZpMqq9sJIj07_NEs8rKb7nyFXDFai1Bbkha9QTkplsQGQqJO7tIKFCDfQI14JS4tk6qO3r1lkl8dL8PRlGLztlBQQ-31Xnya-YydM5qjUglJOvZzhr2KL8zol4PvOLHaLb6sg/p.png?preserve_transparency=1&size=2048x1536&size_mode=3" 
            alt="The logo for the Home Helper website"
          />
          <MyHeader
          >
            Home Helper
          </MyHeader>
        </Menu.Item>
        </LogoStyle>
          { this.leftNavs() }
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

const LogoStyle = styled.div`
background-color: #E1E1E4;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const MyHeader = styled.div`
font-size: 2.5em;
font-weight: 500;
`

export default withRouter(connect(mapStateToProps)(NavBar));
