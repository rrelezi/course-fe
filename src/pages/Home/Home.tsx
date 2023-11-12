import React from 'react'
import {Card, Col, Divider, Flex, Row, Image} from 'antd'
import {courseImage} from "../../mocks/ShoppingCart/other.mocks";


const Home = () => {
    return (
        <Row className={'w-full'}>
            <Col span={24}>
                <Card>
                    <Flex>
                        <Image src={courseImage}/>
                    </Flex>
                </Card>
            </Col>

            <Divider />

            <Col span={24}>
                <Card></Card>
            </Col>
        </Row>
    )
}

export default Home
