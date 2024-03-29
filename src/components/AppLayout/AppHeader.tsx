import React from 'react'
import {
    Button,
    Col,
    Flex,
    MenuProps,
    message,
    Row,
    Space,
    Typography,
    Dropdown,
} from 'antd'
import { useNavigate } from 'react-router-dom'
import { useWindowDimensions } from '../../hooks'
import { RiUserLine } from 'react-icons/ri'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import { ICheckoutStore, useCheckoutStore } from '../../store'

const { Text } = Typography

const AppHeader = () => {
    const navigate = useNavigate()
    const { addItem } = useCheckoutStore((state) => state as ICheckoutStore)
    const { windowDimensions } = useWindowDimensions()
    const { width } = windowDimensions

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        message.info('Click on menu item.')
    }

    const items: MenuProps['items'] = [
        {
            label: (
                <Col className={'cursor-pointer font-semibold px-5 py-2'}>
                    <Text className="p-3">Links</Text>
                </Col>
            ),
            key: '1',
        },
        {
            label: (
                <Col className={'cursor-pointer font-semibold px-5 py-2'}>
                    <Text className="p-3">Account</Text>
                </Col>
            ),
            key: '2',
        },
    ]

    const menuProps = {
        items,
        onClick: handleMenuClick,
    }

    if (width < 768)
        return (
            <Row
                className={
                    'w-full container sm:text-lg md:text-xl font-semibold'
                }
            >
                <Flex
                    className={
                        'cursor-pointer hover:transition hover:scale-110 mx-5'
                    }
                    align={''}
                    onClick={() => navigate('/')}
                >
                    <Text className="cursor-pointer text-center text-2xl p-3">
                        Logo
                    </Text>
                </Flex>

                <Col span={12}>
                    <Space
                        direction="horizontal"
                        size={12}
                        className={
                            'w-full px-2 cursor-pointer flex items-center justify-end'
                        }
                    >
                        <Dropdown menu={menuProps} placement={'bottom'}>
                            <Col
                                className={
                                    'rounded-full p-2 bg-indigo-600 hover:bg-indigo-700'
                                }
                            >
                                <RiUserLine size={25} />
                            </Col>
                        </Dropdown>
                        <Col>
                            <ShoppingCart />
                        </Col>
                    </Space>
                </Col>
            </Row>
        )

    return (
        <Row
            justify={'space-between'}
            className={'w-full container sm:text-lg md:text-xl font-semibold'}
        >
            <Flex
                className={
                    'cursor-pointer hover:transition hover:scale-110 mx-5'
                }
                align={'center'}
                onClick={() => navigate('/')}
            >
                <Text className="cursor-pointer text-2xl p-3">Logo</Text>
            </Flex>

            <Col className={'flex justify-end'}>
                <Space direction="horizontal" size={8} className={'w-full'}>
                    <Col
                        className={
                            'cursor-pointer hover:transition hover:scale-110 '
                        }
                    >
                        <Text className="p-3">Links</Text>
                    </Col>
                    <Col
                        className={
                            'cursor-pointer hover:transition hover:scale-110 '
                        }
                    >
                        <Text className="p-3">Account</Text>
                    </Col>

                    <Col>
                        <Button
                            type={'primary'}
                            onClick={() => navigate('/login')}
                            className={'hover:transition hover:scale-110 '}
                        >
                            Log In
                        </Button>
                    </Col>

                    <Col>
                        <ShoppingCart />
                    </Col>
                </Space>
            </Col>
        </Row>
    )
}

export default AppHeader
