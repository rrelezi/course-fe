import React from 'react'
import { Card, Col, Divider, Flex, Row, Image, Typography, Space } from "antd";
import { courseImage } from '../../mocks/ShoppingCart/other.mocks'
import CountUp from "react-countup";
import { useWindowDimensions } from "../../hooks";
import { RiTiktokFill } from "react-icons/ri";
import ReactPlayer from "react-player/lazy";
import { categeories, coursesList } from "../../mocks/Courses/courses.list";
import CoursesList from "../../components/Courses/CoursesList";


const { Paragraph, Text } = Typography


const Home = () => {
    const { windowDimensions} = useWindowDimensions();

    const { width } = windowDimensions;

    return (
        <Row className={'w-full container flex justify-center items-center'}>
          <Col span={24}>
                <Card>
                    <Row justify={'center'} gutter={[32,24]} className={'px-10 py-7 items-center'}>
                      <Col span={24}>
                        <Text strong className={'text-xl'}>What do we offer?</Text>
                      </Col>
                      <Col sm={24} md={12} className={'pb-0 md:pb-5'}>
                        <Image src={courseImage} className={'w-auto'} />
                      </Col>

                      <Col sm={24} md={12} className={'pt-0 md:p-5'}>
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

          <Col span={24} className={'max-w-screen-lg'}>
            <Card className={'tik-tok-bg text-white'}>
              <Row gutter={[32,24]} justify={'center'} className={'p-7 items-center'}>
                <Flex gap={'middle'} align={'center'} justify={'center'} className={'cursor-pointer'}>
                  <RiTiktokFill size={45} className={'w-auto'} />

                  <Text className={'text-xl text-white text-center font-semibold'}>
                    Tik Tok Channel
                  </Text>
                </Flex>

                <Col span={24} className={'flex justify-center items-center text-2xl font-semibold'}>
                  <CountUp
                    end={250000}
                    duration={10}
                  />
                  <Text className={'pl-3 text-xl text-white text-center font-semibold'}>
                    followers
                  </Text>
                </Col>
              </Row>
            </Card>
          </Col>

          <Divider />

          <Col span={24}>
                <Card>
                  <Flex vertical={ width < 1024 ?? 0 } align={'items-center'} className={'p-7'}>
                      <Paragraph className={'font-semibold text-lg px-4 w-full'}>
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

                    <div className={'video-wrapper'}>
                      <ReactPlayer url={'https://www.youtube.com/watch?v=C0DPdy98e4c'} controls />
                    </div>
                  </Flex>
                </Card>
            </Col>

          <Divider />

          <Col span={24}>

          <CoursesList items={categeories} type={'course-category'} />
          </Col>
        </Row>
    )
}

export default Home
