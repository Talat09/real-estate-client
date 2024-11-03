/* eslint-disable react/no-unescaped-entities */
import { Form, Input, Button, Card, Typography, Row, Col } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const Contact = () => {
  const onFinish = (values) => {
    console.log("Form Values:", values);
  };
  return (
    <div style={styles.container}>
      <Row gutter={16} style={styles.row}>
        {/* Contact Information Column */}
        <Col xs={24} md={10} style={styles.infoCol}>
          <Card style={styles.infoCard}>
            <Title level={3} style={{ fontWeight: "bold" }}>
              Get in <span style={{ color: "red" }}>Touch</span>
            </Title>
            <Text type="secondary">
              We're here to help! Reach out to us for inquiries, viewings, or
              consultations.
            </Text>
            <div style={styles.contactDetails}>
              <div style={styles.contactItem}>
                <PhoneOutlined style={styles.icon} />
                <Text>+1 (123) 456-7890</Text>
              </div>
              <div style={styles.contactItem}>
                <MailOutlined style={styles.icon} />
                <Text>contact@realestateapp.com</Text>
              </div>
              <div style={styles.contactItem}>
                <EnvironmentOutlined style={styles.icon} />
                <Text>123 Real Estate St, New York, NY</Text>
              </div>
            </div>
            <div style={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24176.10311483983!2d-74.0120839991587!3d40.70979999964886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDAlNDInMzUuMyJOIDc0wrAwMCc1OS40Ilc!5e0!3m2!1sen!2sus!4v1616464296378!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={styles.map}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </Card>
        </Col>

        {/* Contact Form Column */}
        <Col xs={24} md={14} style={styles.formCol}>
          <Card style={styles.formCard}>
            <Title level={3}>Contact Us</Title>
            <Form
              name="contact_form"
              onFinish={onFinish}
              style={styles.form}
              layout="vertical"
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please enter your name!" }]}
              >
                <Input placeholder="Your Name" size="large" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please enter your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input placeholder="Your Email" size="large" />
              </Form.Item>
              <Form.Item
                name="phone"
                label="Phone"
                rules={[
                  {
                    required: true,
                    message: "Please enter your phone number!",
                  },
                ]}
              >
                <Input placeholder="Your Phone Number" size="large" />
              </Form.Item>
              <Form.Item
                name="message"
                label="Message"
                rules={[
                  { required: true, message: "Please enter your message!" },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Your Message" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  size="large"
                  style={styles.submitButton}
                >
                  Send Message
                </Button>
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
    padding: "40px 20px",
    display: "flex",
    justifyContent: "center",
    // backgroundColor: "#f0f2f5",
  },
  row: {
    width: "100%",
    maxWidth: 1200,
  },
  infoCol: {
    padding: "10px",
  },
  infoCard: {
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    padding: "20px",

  
  },
  contactDetails: {
    marginTop: "20px",
    textAlign: "left",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  icon: {
    fontSize: "20px",
    color: "#1890ff",
    marginRight: "10px",
  },
  mapContainer: {
    marginTop: "20px",
  },
  map: {
    border: "0",
    borderRadius: "8px",
  },
  formCol: {
    padding: "10px",
  },
  formCard: {
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    padding: "20px",
  },
  form: {
    marginTop: "20px",
  },
  submitButton: {
    fontWeight: "bold",
  },
};
export default Contact;
