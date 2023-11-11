import React, { useMemo } from 'react'
import { Col, Row } from 'antd'
import CartItem from './CartItem'
import { CheckoutItem } from '../../store'

interface ICartList {
    items: CheckoutItem[]
    highlightItem?: string
}

export const CartList = ({ items, highlightItem = '' }: ICartList) => {
    const renderCartList = useMemo(() => {
        if (items.length < 1) return <div>There are no items in your cart.</div>

        return items.map((item, index) => (
            <Row justify="center" align="middle" key={index}>
                <Col
                    span={24}
                    className={`${
                        index < items.length - 1
                            ? 'border-b border-gray-200'
                            : ''
                    } py-4`}
                >
                    <CartItem item={{ ...item }} />
                </Col>
            </Row>
        ))
    }, [items])

    return <>{renderCartList}</>
}
