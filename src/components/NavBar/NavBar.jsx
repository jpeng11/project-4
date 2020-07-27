import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

import { Menu, Segment } from "semantic-ui-react";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "home" };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return this.props.user ? (
      <Segment>
        <Menu pointing secondary>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="xxxx"
            active={activeItem === "xxxx"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="xxxx"
            active={activeItem === "xxxx"}
            onClick={this.handleItemClick}
          />
          <Menu.Item name="Log in" as={Link} to="/login" position="right" />
          <Menu.Item
            name="Log out"
            onClick={this.props.handleLogout}
            as={Link}
            to=""
          />
        </Menu>
      </Segment>
    ) : (
      <Segment>
        <Menu pointing secondary>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
            as={Link}
            to="/"
          />
          <Menu.Item
            name="xxxx"
            active={activeItem === "xxxx"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="xxxx"
            active={activeItem === "xxxx"}
            onClick={this.handleItemClick}
          />
          <Menu.Item name="Log in" as={Link} to="/login" position="right" />
          <Menu.Item name="Sign up" as={Link} to="/signup" />
        </Menu>
      </Segment>
    );
  }
}

export default NavBar;
