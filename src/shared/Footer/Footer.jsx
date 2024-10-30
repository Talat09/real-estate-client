import { Typography, Row, Col } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import "./Footer.css";

const { Title, Text } = Typography;

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#001529",
        color: "#fff",
        padding: "40px 20px",
        borderRadius: "10px",
      }}
    >
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8}>
          <Title level={3} className="footer-title">
            Real<span style={{ color: "red" }}>Estate</span>
          </Title>
          <Text
            style={{
              color: "rgba(255, 255, 255, 0.65)",
              textAlign: "center",
              display: "block",
            }}
          >
            Bringing quality services and products to you.
          </Text>
        </Col>
        <Col xs={24} sm={12} md={8} style={{ textAlign: "center" }}>
          <Title level={4} style={{ color: "#fff" }}>
            Follow Us
          </Title>
          <div style={{ fontSize: "1.5rem" }}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", marginRight: "10px" }}
            >
              <FacebookOutlined />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", marginRight: "10px" }}
            >
              <TwitterOutlined />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", marginRight: "10px" }}
            >
              <InstagramOutlined />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff" }}
            >
              <LinkedinOutlined />
            </a>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} style={{ textAlign: "center" }}>
          <Title level={4} style={{ color: "#fff" }}>
            Contact Us
          </Title>
          <Text
            style={{ color: "rgba(255, 255, 255, 0.65)", display: "block" }}
          >
            contact@mycompany.com
          </Text>
          <Text
            style={{ color: "rgba(255, 255, 255, 0.65)", display: "block" }}
          >
            +123 456 7890
          </Text>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: "20px", textAlign: "center" }}>
        <Text style={{ color: "rgba(255, 255, 255, 0.45)" }}>
          © {new Date().getFullYear()} MyCompany. All rights reserved.
        </Text>
      </Row>
    </div>
  );
};

export default Footer;
