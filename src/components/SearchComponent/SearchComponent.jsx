import { Tabs, Input, Row, Col, Button, Typography, Grid } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;
const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const SearchComponent = () => {
  const screens = useBreakpoint();

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Buy" key="1">
          <Row gutter={8} style={{ marginBottom: "20px" }}>
            <Col
              xs={24}
              sm={8}
              style={{ marginTop: screens.xs ? "20px" : "0" }}
            >
              <Input placeholder="City Location" style={{ padding: "15px" }} />
            </Col>
            <Col
              xs={12}
              sm={8}
              style={{ marginTop: screens.xs ? "20px" : "0" }}
            >
              <Input
                placeholder="Min Price"
                type="number"
                style={{ padding: "15px" }}
              />
            </Col>
            <Col
              xs={12}
              sm={8}
              style={{ marginTop: screens.xs ? "20px" : "0" }}
            >
              <Input
                placeholder="Max Price"
                type="number"
                style={{ padding: "15px" }}
              />
            </Col>
            <Col
              xs={24}
              sm={4}
              style={{ marginTop: screens.xs ? "20px" : "10px" }}
            >
              <Button type="primary" icon={<SearchOutlined />} block>
                Search
              </Button>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Rent" key="2">
          <Row gutter={8} style={{ marginBottom: "20px" }}>
            <Col
              xs={24}
              sm={8}
              style={{
                marginTop: screens.xs ? "20px" : "0",
                marginBottom: "10px",
              }}
            >
              <Input placeholder="City Location" style={{ padding: "15px" }} />
            </Col>
            <Col
              xs={12}
              sm={8}
              style={{
                marginTop: screens.xs ? "20px" : "0",
                marginBottom: "10px",
              }}
            >
              <Input
                placeholder="Min Price"
                type="number"
                style={{ padding: "15px" }}
              />
            </Col>
            <Col
              xs={12}
              sm={8}
              style={{ marginTop: screens.xs ? "20px" : "0" }}
            >
              <Input
                placeholder="Max Price"
                type="number"
                style={{ padding: "15px" }}
              />
            </Col>
            <Col
              xs={24}
              sm={4}
              style={{ marginTop: screens.xs ? "20px" : "0" }}
            >
              <Button type="primary" icon={<SearchOutlined />} block>
                Search
              </Button>
            </Col>
          </Row>
        </TabPane>
      </Tabs>

      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={8} style={{ textAlign: "center" }}>
          <Title
            level={3}
            style={{ fontSize: "3rem", fontWeight: "bold", color: "#001529" }}
          >
            16+
          </Title>
          <Text>Years of Experience</Text>
        </Col>
        <Col xs={24} sm={8} style={{ textAlign: "center" }}>
          <Title
            level={3}
            style={{ fontSize: "3rem", fontWeight: "bold", color: "#001529" }}
          >
            200
          </Title>
          <Text>Award Gained</Text>
        </Col>
        <Col xs={24} sm={8} style={{ textAlign: "center" }}>
          <Title
            level={3}
            style={{ fontSize: "3rem", fontWeight: "bold", color: "#001529" }}
          >
            2000+
          </Title>
          <Text>Property Ready</Text>
        </Col>
      </Row>
    </div>
  );
};

export default SearchComponent;
