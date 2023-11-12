import React from 'react'
import { Card, Col, Divider, Flex, Row, Image, Typography, Space } from "antd";
import { courseImage } from '../../mocks/ShoppingCart/other.mocks'
import ReactPlayer from "react-player";
import { useWindowDimensions } from "../../hooks";

const { Paragraph } = Typography

const Home = () => {
    const { windowDimensions, getVideoWidth } = useWindowDimensions();

    const { width } = windowDimensions;

    return (
        <Row className={'w-full'}>
            <Col span={24}>
                <Card title={'What do we offer?'}>
                    <Row justify={'center'} gutter={[32,24]} className={'px-5 items-center'}>
                      <Col sm={24} md={12} className={'px-10 py-5'}>
                        <Image src={courseImage} className={'w-auto'} />
                      </Col>

                      <Col sm={24} md={12} className={'p-5'}>
                        <Paragraph className={'text-xl text-center font-semibold'}>
                          What is Lorem Ipsum? Lorem Ipsum is simply dummy
                          text of the printing and typesetting industry. Lorem
                          Ipsum has been the industry's standard dummy text
                          ever since the 1500s, when an unknown printer took a
                          galley of type and scrambled it to make a type
                          specimen book.
                        </Paragraph>
                      </Col>
                    </Row>
                </Card>
            </Col>

            <Divider />

            <Col span={24}>
                <Card>
                  <Row justify={'center'} gutter={[32,24]} className={'px-5 items-center'}>
                    <Col sm={24} md={12} className={'px-10 py-5'}>
                      <Image src={courseImage} className={'w-auto'} />
                    </Col>

                    <Col sm={24} md={12} className={'p-5 flex items-center'}>
                      <Paragraph className={'text-lg font-semibold'}>
                        What is Lorem Ipsum? Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type
                        specimen book. It has survived not only five
                        centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </Paragraph>
                    </Col>
                  </Row>
                </Card>
            </Col>

              <Divider />

              <Col span={24}>
                <Card>
                  <Flex vertical={ width < 1024 ?? 0 } align={'items-center'} className={'p-7'}>
                      <Paragraph className={'font-semibold text-lg px-4 w-full lg:w-1/2'}>
                        What is Lorem Ipsum? Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type
                        specimen book. It has survived not only five
                        centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </Paragraph>


                    <video src={'https://www.youtube.com/watch?v=C0DPdy98e4c'}  controls />
                  </Flex>
                </Card>
            </Col>
        </Row>
    )
}

export default Home
