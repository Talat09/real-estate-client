import { Form, Input, Button, Typography, Card, Row, Col } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import image1 from "../../assets/login/register.jpg";
// import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const { Title, Text } = Typography;

const Register = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const resetForm = () => {
    form.resetFields();
  };
  const handleRegistration = async (values) => {
    const { username, email, password } = values;
    const user = { username, email, password };

    try {
      const response = await fetch(
        "http://localhost:5000/api/V1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (response.ok) {
        const data = await response.json();
        toast.success("Registration successful!");
        console.log("Registration successful:", data);
        navigate("/login");
        resetForm(); // Call reset function here
      } else {
        console.error("Failed:", response.statusText);
        toast.error("Registration failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred: " + error.message);
    }
  };

  return (
    <div style={styles.container}>
      <Toaster position="top-center" reverseOrder={false} />{" "}
      {/* Toast configuration */}
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
              src={image1}
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
              form={form} // Pass the form instance here
              name="register"
              onFinish={handleRegistration}
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
