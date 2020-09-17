import React from 'react';

import { 
  NavMenuContainer, 
  NavMenuOptionContainer 
} from './nav-menu.styles';

class NavMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      scrolled: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  
  // if nav menu is a footer, add scroll event listener
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

  // if user scrolls past header nav, set scrolled to true.
  handleScroll = () => {
    const scrollTop = window.scrollY < 112;
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
        {navItems.map(({ title, name }) => (
          <NavMenuOptionContainer key={title ? title : name} >
            <a href={`#${title ? title : name}`}>{title ? title : name}</a>
          </NavMenuOptionContainer>
        ))}
      </NavMenuContainer>
    )
  }
};

export default NavMenu;
