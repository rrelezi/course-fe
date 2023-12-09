import React from 'react';
import {Col, Flex, Space, Typography} from 'antd';

import {RiMailSendFill, RiTiktokLine} from "react-icons/ri";
import {useNavigate} from "react-router-dom";
import {useWindowDimensions} from "../../hooks";

const { Text } = Typography;

const AppFooter = () => {
    //For short time reasons styling is not handled correctly

    const navigate = useNavigate();
    const { windowDimensions } = useWindowDimensions();
    const { width } = windowDimensions;


    return (
        <Flex vertical={width < 512 ?? false } justify={'center'} className={'w-full container text-black py-7 h-full text-lg md:text-xl'}>
            <Col span={width < 512 ? '24' : '8'} >
                <Flex vertical align={`${width < 512 ? 'center' : 'start'}`} gap={'middle'} className={'px-5 w-full'}>
                    <Space
                        className={'cursor-pointer hover:transition hover:bg-indigo-600 hover:shadow-md hover:scale-105 w-full px-5 py-2 rounded-md mx-7'}
                        direction={'horizontal'}
                        wrap
                    >
                        <RiMailSendFill size={25} /> Contact Us
                    </Space>

                    <Space className={'cursor-pointer hover:transition hover:bg-indigo-600 hover:shadow-md hover:scale-105 w-full px-5 py-2 rounded-md mx-7'}
                           direction={'horizontal'}
                           wrap
                    >
                        <RiTiktokLine size={25} /> TikTok Channel Name
                    </Space>
                </Flex>
            </Col>

            <Col
                span={width < 512 ? '24' : '8'}
                className={'flex justify-center items-center'}
            >
                <Space className={'flex justify-center cursor-pointer hover:transition hover:bg-indigo-600 hover:shadow-md hover:scale-105 w-full p-7 rounded-md mx-7 text-center'}
                       direction={'horizontal'}
                       wrap
                >
                <Text className={'text-2xl'} onClick={() => navigate('/')}>Big Logo</Text>
                </Space>
            </Col>

            <Col
                span={width < 512 ? '24' : '8'}
                className={'flex justify-center items-center'}
            >
                <Space className={`flex ${width < 512 ? 'justify-start' : 'justify-end'} cursor-pointer hover:transition hover:bg-indigo-600 hover:shadow-md hover:scale-105 w-full px-5 py-2 rounded-md mx-7 sm:mr-10`}
                       direction={'horizontal'}
                       wrap
                >
                    More About Us
                </Space>
            </Col>
        </Flex>
    )
}

export default AppFooter
