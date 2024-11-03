/* eslint-disable react/no-unescaped-entities */

import {
  Card,
  Typography,
  Row,
  Col,
  Avatar,
  Divider,
  Layout,
  Space,
} from "antd";
import { TeamOutlined, HomeOutlined, MessageOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";


const { Title, Text } = Typography;
const { Content } = Layout;

const About = () => {
  return (
    <Content style={styles.container}>
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={styles.section}
      >
        <Title level={2} style={styles.title}>
          Welcome to Real Estate App
        </Title>
        <Text type="secondary" style={styles.text}>
          We are committed to providing the best real estate services to help
          you find your dream home or investment property. Our mission is to
          simplify the real estate process through transparency, integrity, and
          innovation.
        </Text>
      </motion.div>

      <Divider />

      {/* Our Mission Section */}
      <Row gutter={[24, 24]} style={styles.section}>
        <Col xs={24} md={12}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card style={styles.card} hoverable>
              <HomeOutlined style={styles.icon} />
              <Title level={3}>Our Mission</Title>
              <Text>
                Our mission is to empower clients with data-driven insights and
                a personal touch to guide them through every real estate
                decision. We strive to bring trust and excellence to every
                transaction, one property at a time.
              </Text>
            </Card>
          </motion.div>
        </Col>
        <Col xs={24} md={12}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card style={styles.card} hoverable>
              <TeamOutlined style={styles.icon} />
              <Title level={3}>Our Values</Title>
              <Text>
                Integrity, dedication, and a customer-first approach define our
                values. We believe in fostering lifelong relationships with
                clients by putting their needs above all else.
              </Text>
            </Card>
          </motion.div>
        </Col>
      </Row>

      <Divider />

      {/* Meet Our Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={styles.section}
      >
        <Title level={2} style={styles.title}>
          Meet Our Team
        </Title>
        <Row gutter={[24, 24]}>
          {teamData.map((member, index) => (
            <Col xs={24} sm={12} md={8} key={member.name}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card style={styles.teamCard} hoverable>
                  <Space direction="vertical" align="center" size="large">
                    <Avatar
                      src={member.photo}
                      size={120}
                      style={styles.avatar}
                    />
                    <Title level={4}>{member.name}</Title>
                    <Text type="secondary">{member.position}</Text>
                    <Text style={styles.text}>{member.bio}</Text>
                  </Space>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>

      <Divider />

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        style={styles.section}
      >
        <Title level={2} style={styles.title}>
          What Our Clients Say
        </Title>
        <Row gutter={[24, 24]}>
          {testimonials.map((testimonial, index) => (
            <Col xs={24} md={12} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card style={styles.testimonialCard} hoverable>
                  <MessageOutlined style={styles.quoteIcon} />
                  <Text style={styles.quote}>"{testimonial.quote}"</Text>
                  <Text strong>- {testimonial.client}</Text>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </Content>
  );
};

// Sample Data
const teamData = [
  {
    name: "Alice Johnson",
    position: "CEO",
    photo: "https://randomuser.me/api/portraits/women/45.jpg",
    bio: "Alice brings over 20 years of real estate experience and leads our team with dedication and vision.",
  },
  {
    name: "Michael Smith",
    position: "Lead Agent",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Michael is passionate about connecting clients with the perfect properties and knows the market inside out.",
  },
  {
    name: "Sarah Lin",
    position: "Operations Manager",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    bio: "Sarah ensures smooth operations and a seamless experience for both clients and agents.",
  },
];

const testimonials = [
  {
    client: "John Doe",
    quote:
      "Amazing experience! They helped us find the perfect home with professionalism and care.",
  },
  {
    client: "Emily Stone",
    quote:
      "The team was fantastic. They made the entire process easy and stress-free.",
  },
];

const styles = {
  container: {
    padding: "40px 20px",
    maxWidth: "1200px",
    margin: "auto",
    // backgroundColor: "#f7f9fc",
  },
  section: {
    marginBottom: "40px",
    textAlign: "center",
  },
  title: {
    // color: "#1890ff",
    marginBottom: "20px",
    textTransform: "uppercase",
  
  },
  text: {
    color: "#666",
    fontSize: "16px",
  },
  card: {
    textAlign: "center",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    padding: "20px",
    height: "100%",
    transition: "all 0.3s ease",
  },
  icon: {
    fontSize: "48px",
    color: "#1890ff",
    marginBottom: "20px",
  },
  teamCard: {
    textAlign: "center",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    padding: "20px",
    height: "100%",
    transition: "all 0.3s ease",
  },
  avatar: {
    marginBottom: "20px",
    border: "4px solid #1890ff",
  },
  testimonialCard: {
    textAlign: "center",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    padding: "30px 20px",
    backgroundColor: "#ffffff",
    height: "100%",
    transition: "all 0.3s ease",
  },
  quote: {
    fontStyle: "italic",
    fontSize: "18px",
    color: "#333",
    marginBottom: "20px",
    display: "block",
  },
  quoteIcon: {
    fontSize: "36px",
    color: "#1890ff",
    marginBottom: "20px",
  },
};

export default About;
