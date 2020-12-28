import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

const navigationItems = (props) => (
  <ul className="nav__items">
    <Menu theme="dark" mode="horizontal">
      {props.routes.map((route) => (
        <Menu.Item key={route.title}>
          <NavLink to={route.path}>{route.title}</NavLink>
        </Menu.Item>
      ))}
    </Menu>
  </ul>
);

export default navigationItems;
