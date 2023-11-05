import React from 'react'

import { Layout, Menu, Col, Row, Space } from 'antd'

import ShoppingCart from '../ShoppingCart/ShoppingCart'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'

const { Header, Content, Footer } = Layout

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Layout>
            <Header>
                <AppHeader />
            </Header>

            <Content
                className="site-layout"
                style={{ padding: '0 50px', height: '100vh' }}
            >
                <ShoppingCart />
                {children}
            </Content>

            <Footer>
                <AppFooter />
            </Footer>
        </Layout>
    )
}

export default AppLayout
