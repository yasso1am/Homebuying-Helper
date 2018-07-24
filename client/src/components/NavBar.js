import React, { Component } from 'react';
import { 
  Menu,
  Image,
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
        <Link to='/houses'>
          <Menu.Item 
            name='Your Homes' 
            active={activeItem === 'Your Homes'} 
            onClick={this.handleItemClick}
          />   
        </Link>
        <Link to='/homeform'>
          <Menu.Item 
            name='Add A Home'          
            active={activeItem === 'Add A Home'}
            onClick={this.handleItemClick}
          /> 
        </Link>
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
        <Link to='/register'>
          <Menu.Item name='Register' />
        </Link>
        
        <Link to='/login'>
          <Menu.Item name='Login' />
        </Link>

      </Menu.Menu>
    );
  }

  render() {
    const {activeItem} = this.state
    return (
      <div>
        <Menu borderless fluid pointing secondary>
          <Link to='/'>
      <LogoStyle>
        <Menu.Item
          fitted={true}
          name="Home"
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        >
          <Image 
            floated="left" 
            size="tiny" 
            src="https://previews.dropbox.com/p/thumb/AALOe574p8wwYXRmU7Ubr-4kQHduQzpThOT3a5RFNRyvhqqhhXL7dlLFe3R6hEMMIJlsa8c83EnGOGuclt2pEXkjP5PD2u2hhOxLo2TaUZpMqq9sJIj07_NEs8rKb7nyFXDFai1Bbkha9QTkplsQGQqJO7tIKFCDfQI14JS4tk6qO3r1lkl8dL8PRlGLztlBQQ-31Xnya-YydM5qjUglJOvZzhr2KL8zol4PvOLHaLb6sg/p.png?preserve_transparency=1&size=2048x1536&size_mode=3" 
            alt="The logo for the Home Helper website"
          />
          Home Helper
        </Menu.Item>
      </LogoStyle>
          </Link>
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

const LogoStyle = styled.h1`
background-color: #E1E1E4;
display: flex;
font-size: 2.5em;
flex-direction: column;
justify-content: center;
`

export default withRouter(connect(mapStateToProps)(NavBar));
