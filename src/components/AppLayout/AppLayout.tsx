import React, { useEffect } from 'react'

import { Layout, Menu, Col, Row, Space } from 'antd'

import ShoppingCart from '../ShoppingCart/ShoppingCart'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import { useLocation } from 'react-router-dom'

const { Header, Content, Footer } = Layout

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation()

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        })
    }, [location])

    const getContentHeight = () => {
        if (location.pathname === '/') return 'auto'
        return '100vh'
    }
    return (
        <Layout>
            <Header>
                <AppHeader />
            </Header>
            <Content
                style={{
                    height: getContentHeight(),
                }}
            >
              {children}
            </Content>
            <Footer children={<AppFooter />} />
        </Layout>
    )
}

export default AppLayout
