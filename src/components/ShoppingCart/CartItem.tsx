import React, { useEffect } from 'react'
import {
    Button,
    Card,
    Col,
    Image,
    InputNumber,
    Row,
    Space,
    Typography,
} from 'antd'
import { CheckoutItem, ICheckoutStore, useCheckoutStore } from '../../store'

const { Text, Title } = Typography

interface CartItemProps {
    item: CheckoutItem
    highlightItem?: boolean
}

const CartItem = ({ item, highlightItem = false }: CartItemProps) => {
    const { removeItem, onQuantityChange } = useCheckoutStore(
        (state) => state as ICheckoutStore
    )

    const {
        id,
        name,
        price,
        quantity,
        total,
        image,
        description,
        discountText,
        coupon,
    } = item

    const renderCartItemHeader = () => {
        return (
            <Col xs={24} sm={24} md={12} className={'pr-6'}>
                <Space direction={'vertical'} align={'center'} size={16}>
                    <Image src={image} alt={''} />
                    <Space direction="vertical" size={8}>
                        <Text className={'font-semibold'}>{name}</Text>
                    </Space>
                </Space>
            </Col>
        )
    }

    const renderDetailsCartItem = () => {
        return (
            <Col
                xs={24}
                sm={24}
                md={12}
                className={'cart-item-quantity w-full'}
            >
                <Row align="middle" justify="space-around">
                    <Col className="cart-item-quantity-left">
                        <Text>{price}</Text>
                    </Col>

                    <Col>
                        <Row
                            className="flex-col"
                            justify="center"
                            align="middle"
                        >
                            <Col>
                                <InputNumber
                                    min={1}
                                    max={9999}
                                    controls
                                    value={quantity}
                                    onChange={(value) =>
                                        onQuantityChange(id, value)
                                    }
                                    className={'px-4'}
                                />
                            </Col>
                            <Col>
                                <Button
                                    type="link"
                                    size="small"
                                    onClick={() => removeItem(id)}
                                >
                                    Remove
                                </Button>
                            </Col>
                        </Row>
                    </Col>

                    <Col className="cart-item-quantity-right">
                        <Space direction="vertical" size={0}>
                            <Text>{total}</Text>
                        </Space>
                    </Col>
                </Row>
            </Col>
        )
    }

    return (
        <Card
            type="inner"
            bordered={false}
            className={`w-full cart-item shadow-2xl`}
        >
            <Space
                direction={'horizontal'}
                size={16}
                align="start"
                className={`w-full ${highlightItem ? 'highlighted' : ''}`}
            >
                <Row
                    gutter={[12, 12]}
                    justify={'space-between'}
                    align="middle"
                    className={`w-full`}
                >
                    {renderCartItemHeader()}
                    {renderDetailsCartItem()}
                </Row>
            </Space>
        </Card>
    )
}

export default CartItem
