import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Search from '../Search/Search';

class Header extends React.Component {
  static propTypes = {
    iconName: PropTypes.node,
  }

  static defaultProps = {
    iconName: settings.headerIcon,
  }
  render() {
    const {iconName} = this.props;
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={iconName}/>
            </Link>
            <Search/>
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/FAQ' activeClassName='active'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>      
    );
  }
}
  
export default Header;