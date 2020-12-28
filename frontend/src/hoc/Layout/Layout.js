import React, { Component } from "react";
import "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

class MyLayout extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <Toolbar routes={this.props.routes} />
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">{this.props.children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>DBS Assignment 2 ©2020</Footer>
      </Layout>
    );
  }
}
export default MyLayout;
