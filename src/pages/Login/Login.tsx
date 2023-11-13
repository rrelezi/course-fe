import {
    Button,
    Card,
    Checkbox,
    Col,
    Flex,
    Form,
    Input,
    Typography,
} from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const { Text } = Typography

type FieldType = {
    user?: string
    password?: string
    remember?: string
}

const Login = () => {
    const navigate = useNavigate()

    const onFinish = (values: any) => {
        console.log('Success:', values)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }
    return (
        <Card title={'Login'}>
            <Flex
                wrap={'wrap'}
                align={'center'}
                justify={'center'}
                gap={'small'}
                className={'w-full p-7'}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    className={'w-full max-w-2xl'}
                >
                    <Flex vertical gap={'large'} justify={'start'}>
                        <Form.Item<FieldType>
                            label="User"
                            name="user"
                            labelCol={{ span: 24 }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Password"
                            name="password"
                            labelCol={{ span: 24 }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item<FieldType>
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{ span: 16 }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ span: 12 }}>
                            <Button type="primary" htmlType="submit">
                                Log In
                            </Button>
                        </Form.Item>

                        <Col span={'8'}>
                            <Button
                                type={'link'}
                                className={'pl-0'}
                                onClick={() => navigate('/signup')}
                            >
                                <Text className={'text-indigo-500'}>
                                    Click here to sign up.
                                </Text>
                            </Button>
                        </Col>
                    </Flex>
                </Form>
            </Flex>
        </Card>
    )
}

export default Login
