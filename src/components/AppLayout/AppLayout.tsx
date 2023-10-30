import React from "react";

import {
  Layout,
  Menu,
  Col,
  Row,
  Space
} from "antd";

import ShoppingCart from "../ShoppingCart/ShoppingCart";

const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#c7a64e",
          justifyItems: "center",
        }}
      >
        <Row justify={"space-between"} className={"w-full container"}>
          <Col>
            <div className="text-white cursor-pointer">Logo</div>
          </Col>

          <Col className={"flex justify-end"}>
            <Space direction="horizontal" size={8} className={"w-full"}>
              <Col>
                <Menu
                  theme="light"
                  mode="horizontal"
                  className={"rounded-md bg-transparent text-white w-full"}
                  defaultSelectedKeys={["2"]}
                >
                  <Menu.Item>
                    <Col>Tab 1</Col>
                  </Menu.Item>
                  <Menu.Item>
                    <Col>Tab 2</Col>
                  </Menu.Item>
                  <Menu.Item>
                    <Col>Tab 3</Col>
                  </Menu.Item>
                </Menu>
              </Col>

              <Col>
                <div>Account</div>
              </Col>
            </Space>
          </Col>
        </Row>
      </Header>

      <Content
        className="site-layout"
        style={{ padding: "0 50px", height: "100vh" }}
      >
        <ShoppingCart />
        {children}
      </Content>

      <Footer style={{ textAlign: "center" }}>@2023</Footer>
    </Layout>
  );
};

export default AppLayout;
