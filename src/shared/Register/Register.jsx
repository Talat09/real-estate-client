import { Form, Input, Button, Typography, Card, Row, Col } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import image1 from "../../assets/login/register.jpg";
const { Title, Text } = Typography;

const Register = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div style={styles.container}>
      <Row style={styles.row} gutter={16}>
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
              alt="Register Illustration"
              style={styles.image}
            />
          </div>
        </Col>

        {/* Register Form Column */}
        <Col xs={24} md={12} style={styles.col}>
          <Card style={styles.card}>
            <Title level={3} style={styles.title}>
              Create an Account
            </Title>
            <Text type="secondary">Please fill in the details below</Text>
            <Form
              name="register"
              onFinish={onFinish}
              style={styles.form}
              initialValues={{}}
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
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                  { type: "email", message: "Please enter a valid Email!" },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Email"
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
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  size="large"
                  style={styles.button}
                >
                  Register
                </Button>
              </Form.Item>
              <Form.Item style={styles.links}>
                <Text type="secondary">Already have an account? </Text>
                <Link to="/login" style={styles.link}>
                  Log in
                </Link>
              </Form.Item>
            </Form>
          </Card>
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
  imageCol: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageColSmall: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    marginBottom: "30px",
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

export default Register;
