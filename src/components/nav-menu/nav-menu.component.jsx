import React from 'react';

import { 
  NavMenuContainer,
  NavMenuOption
} from './nav-menu.styles';

import './nav-menu.styles.scss';

class NavMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const { isFooter } = this.props;
    if (isFooter) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    if (this.props.isFooter) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll = () => {
    // check whether window is scrolled past header nav
    const scrollTop = window.scrollY < 113;
    if (!scrollTop) {
      this.setState({ scrolled: true });
    }
    else {
      this.setState({ scrolled: false });
    }
  };

  render() {
    const { navItems, ...otherProps } = this.props;
    return (
      <NavMenuContainer isScrolled={this.state.scrolled} {...otherProps} >
        {navItems.map(({ id, title, name }) => (
          <NavMenuOption key={id} >
            <a href={`#${title ? title : name}`}>{title ? title : name}</a>
          </NavMenuOption>
        ))}
      </NavMenuContainer>
    )
  }
};

export default NavMenu;
