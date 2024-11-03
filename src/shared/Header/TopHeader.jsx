import { Layout, Menu, Button, Drawer } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./Header.css";
import { useAuth } from "../../context/AuthProvider";

const { Header } = Layout;

const TopHeader = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { isAuthenticated } = useAuth();
  // const navigate = useNavigate();
  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <Header className="navbar-header">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Real<span style={{ color: "red" }}>Estate</span>
        </Link>
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
        <Menu.Item key="profile">
          {isAuthenticated && <Link to="/profile">Profile</Link>}
        </Menu.Item>
      </Menu>

      <Button
        type="primary"
        className="login-button"
        // onClick={() => (isAuthenticated ? logout(navigate) : login(navigate))}
      >
        <Link to="/login"> {isAuthenticated ? "Logout" : "Login"}</Link>
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
        open={drawerVisible}
      >
        <Menu mode="vertical">
          <Menu.Item key="home">
            <Link to="/" onClick={onClose}>
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about" onClick={onClose}>
              About
            </Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/contact" onClick={onClose}>
              Contact
            </Link>
          </Menu.Item>
          <Menu.Item key="agents">
            {isAuthenticated && <Link to="/profile">Profile</Link>}
          </Menu.Item>
          <Button
            type="primary"
            className="drawer-login-button"
            // onClick={() =>
            //   isAuthenticated ? logout(navigate) : login(navigate)
            // }
          >
            {isAuthenticated ? "Logout" : "Login"}
          </Button>
        </Menu>
      </Drawer>
    </Header>
  );
};

export default TopHeader;
