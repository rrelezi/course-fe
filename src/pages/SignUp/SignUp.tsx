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
    fname?: string
    lname?: string
    email?: string
    password?: string
}

const SignUp = () => {
    const navigate = useNavigate()

    const onFinish = (values: any) => {
        console.log('Success:', values)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }
    return (
        <Card title={'Create Account'}>
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
                            label="First Name"
                            name="fname"
                            labelCol={{ span: 24 }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your first name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Last Name"
                            name="lname"
                            labelCol={{ span: 24 }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your last name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Email"
                            name="email"
                            labelCol={{ span: 24 }}
                            rules={[
                                {
                                    required: true,
                                    type: 'email',
                                    message: 'Please input your email!',
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

                        <Form.Item wrapperCol={{ span: 12 }}>
                            <Button type="primary" htmlType="submit">
                                Create Account
                            </Button>
                        </Form.Item>
                    </Flex>
                </Form>
            </Flex>
        </Card>
    )
}

export default SignUp
