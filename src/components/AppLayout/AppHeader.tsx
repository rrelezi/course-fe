import { Button, Col, Row, Space } from 'antd'
import React from 'react'
import { ICheckoutStore, useCheckoutStore } from '../../store'
import { cartItemsMock } from '../../mocks/ShoppingCart/cartItems.mock'

const AppHeader = () => {
    const { addItem } = useCheckoutStore((state) => state as ICheckoutStore)

    return (
        <Row justify={'space-between'} className={'w-full container'}>
            <Col>
                <div className="text-white cursor-pointer">Logo</div>
            </Col>

            <Col className={'flex justify-end'}>
                <Space direction="horizontal" size={8} className={'w-full'}>
                    <Col>Links</Col>
                    <Col>
                        <div>Account</div>
                    </Col>
                    <Button
                        type={'primary'}
                        onClick={() => addItem(cartItemsMock[0])}
                    >
                        Add Item Test
                    </Button>
                </Space>
            </Col>
        </Row>
    )
}

export default AppHeader
