import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
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
