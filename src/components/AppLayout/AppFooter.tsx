import { Col, Row } from 'antd'
import React from 'react'

const AppFooter = () => {
    return (
        <Row justify={'space-between'} className={'w-full text-black'}>
            <Col span={8} className={'flex justify-center items-center'}>
                Left Section
            </Col>

            <Col span={8} className={'flex justify-center items-center'}>
                Middle Section
            </Col>

            <Col span={8} className={'flex justify-center items-center'}>
                Right Section
            </Col>
        </Row>
    )
}

export default AppFooter
