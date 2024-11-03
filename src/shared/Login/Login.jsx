import {
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  Card,
  Row,
  Col,
} from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import image1 from "../../assets/login/login.jpg";
const { Title, Text } = Typography;

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div style={styles.container}>
      <Row style={styles.row} gutter={16}>
        {/* Login Form Column */}
        <Col xs={24} md={12} style={styles.col}>
          <Card style={styles.card}>
            <Title level={3} style={styles.title}>
              Welcome Back!
            </Title>
            <Text type="secondary">Please login to your account</Text>
            <Form
              name="login"
              onFinish={onFinish}
              style={styles.form}
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                  size="large"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Password"
                  size="large"
                />
              </Form.Item>
              <Form.Item
                name="remember"
                valuePropName="checked"
                style={styles.remember}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  size="large"
                  style={styles.button}
                >
                  Log in
                </Button>
              </Form.Item>
              <Form.Item style={styles.links}>
                <a href="#forgot-password" style={styles.link}>
                  Forgot password?
                </a>
                <Text type="secondary" style={styles.separator}>
                  |
                </Text>
                <Link to="/register" style={styles.link}>
                  Register now!
                </Link>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        {/* Image Column */}
        <Col
          xs={24}
          md={12}
          style={
            window.innerWidth < 768 ? styles.imageColSmall : styles.imageCol
          }
        >
          <div style={styles.imageContainer}>
            <img
              src={image1} // Example Unsplash URL
              alt="Login Illustration"
              style={styles.image}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    marginBottom: "20px",
  },
  row: {
    width: "100%",
    maxWidth: 900,
  },
  col: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "100%",
    maxWidth: 400,
    padding: "40px 20px",
    textAlign: "center",
    boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
  },
  title: {
    marginBottom: 0,
  },
  form: {
    marginTop: 20,
  },
  remember: {
    textAlign: "left",
  },
  button: {
    marginTop: 10,
    fontWeight: "bold",
  },
  links: {
    marginTop: 10,
    textAlign: "center",
  },
  link: {
    color: "#1890ff",
  },
  separator: {
    margin: "0 8px",
  },
  imageCol: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageColSmall: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px", // Margin for small screens
    marginBottom: "20px", // Margin for small screens
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: "8px",
    objectFit: "cover",
  },
};

export default Login;
