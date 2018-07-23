import React, { Component } from 'react';
import { 
  Menu,
  Image,
  Header,
} from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';

class NavBar extends Component {
  state = {activeItem: ''}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  rightNavs = () => {
    const { activeItem } = this.state
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position="right">
           
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
    return (
      <div>
        <Menu fluid pointing secondary>
        <Menu.Item>
          <Image size="tiny" src="https://previews.dropbox.com/p/thumb/AALOe574p8wwYXRmU7Ubr-4kQHduQzpThOT3a5RFNRyvhqqhhXL7dlLFe3R6hEMMIJlsa8c83EnGOGuclt2pEXkjP5PD2u2hhOxLo2TaUZpMqq9sJIj07_NEs8rKb7nyFXDFai1Bbkha9QTkplsQGQqJO7tIKFCDfQI14JS4tk6qO3r1lkl8dL8PRlGLztlBQQ-31Xnya-YydM5qjUglJOvZzhr2KL8zol4PvOLHaLb6sg/p.png?preserve_transparency=1&size=2048x1536&size_mode=3" />

        </Menu.Item>
          <Link to='/'>
            <Menu.Item name='home' />
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
