import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        menuOpen: false,
      };
    }

    handleStateChange(state) {
      this.setState({ menuOpen: state.isOpen });
    }

    closeMenu() {
      this.setState({ menuOpen: false });
    }

    render() {
      const { menuOpen } = this.state;
      return (
        <Menu
          customBurgerIcon={<h2 className="text-black">Navbar</h2>}
          isOpen={menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                onClick={() => this.closeMenu()}
                className="text-decoration-none"
              >
                <h3 className="text-white">Home</h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/1"
                onClick={() => this.closeMenu()}
                className="text-decoration-none"
              >
                <h3 className="text-white">Lorem </h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/2"
                onClick={() => this.closeMenu()}
                className="text-decoration-none"
              >
                <h3 className="text-white">Lorem </h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/3"
                onClick={() => this.closeMenu()}
                className="text-decoration-none"
              >
                <h3 className="text-white">Lorem</h3>
              </Link>
            </li>
          </ul>
        </Menu>
      );
    }
  }
