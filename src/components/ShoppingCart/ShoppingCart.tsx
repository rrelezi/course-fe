import React from 'react'

import { Drawer } from 'antd'

import { ICheckoutStore, useCheckoutStore } from '../../store'
import { useWindowDimensions } from '../../hooks'

import { RiShoppingCart2Fill } from 'react-icons/ri'
import { CartList } from './CartList'
import SidebarFooter from './SidebarFooter'

const ShoppingCart = () => {
    const { width } = useWindowDimensions()

    const { items, drawerVisible, setDrawerVisible } = useCheckoutStore(
        (state) => state as ICheckoutStore
    )

    const getShoppingCartIconSize = () => {
        if (width > 768) {
            return 25
        }
        return 20
    }

    const getDrawerWidth = () => {
        if (width > 1300) return '40%'
        if (width > 1024) return '50%'
        if (width > 768) return '60%'
        return '100%'
    }

    return (
        <>
            <div className={'shopping-cart-container'}>
                <div
                    className={'shopping-cart-display'}
                    onClick={() => setDrawerVisible(true)}
                >
                    <RiShoppingCart2Fill
                        size={getShoppingCartIconSize()}
                        className={'shopping-cart-icon'}
                    />
                    <div className={'shopping-cart-items-number'}>
                        {items.length}
                    </div>
                </div>
            </div>

            <Drawer
                open={drawerVisible}
                title={'Shopping Cart'}
                onClose={() => setDrawerVisible(false)}
                width={getDrawerWidth()}
                footer={<SidebarFooter />}
            >
                <CartList items={items} />
            </Drawer>
        </>
    )
}

export default ShoppingCart
