import { Layout, Menu, Button, Drawer } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./Header.css";

const { Header } = Layout;

const TopHeader = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <Header className="navbar-header">
      <div className="logo">
        Real<span style={{ color: "blue" }}>Estate</span>
      </div>
      
      <Menu mode="horizontal" className="navbar-menu">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link to="/contact">Contact</Link>
        </Menu.Item>
        <Menu.Item key="agents">
          <Link to="/agents">Agents</Link>
        </Menu.Item>
      </Menu>

      <Button type="primary" className="login-button">
        Login
      </Button>

      <Button
        type="primary"
        className="menu-icon"
        onClick={showDrawer}
        icon={<MenuOutlined />}
      />

      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={drawerVisible}
      >
        <Menu mode="vertical">
          <Menu.Item key="home">
            <Link to="/" onClick={onClose}>Home</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about" onClick={onClose}>About</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/contact" onClick={onClose}>Contact</Link>
          </Menu.Item>
          <Menu.Item key="agents">
            <Link to="/agents" onClick={onClose}>Agents</Link>
          </Menu.Item>
          <Button type="primary" className="drawer-login-button" onClick={onClose}>
            Login
          </Button>
        </Menu>
      </Drawer>
    </Header>
  );
};

export default TopHeader;
