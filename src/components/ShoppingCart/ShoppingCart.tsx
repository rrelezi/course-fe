import React from 'react'

import { Drawer } from 'antd'

import { ICheckoutStore, useCheckoutStore } from '../../store'
import { useWindowDimensions } from '../../hooks'

import { RiShoppingCart2Fill } from 'react-icons/ri'
import { CartList } from './CartList'
import SidebarFooter from './SidebarFooter'

const ShoppingCart = () => {
    const { windowDimensions } = useWindowDimensions();
    const { width } = windowDimensions;

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

                <div
                    className={'shopping-cart-container'}
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


            <Drawer
                open={drawerVisible}
                title={'Shopping Cart'}
                onClose={() => setDrawerVisible(false)}
                width={getDrawerWidth()}
                footer={<SidebarFooter setDrawerVisible={setDrawerVisible} />}
                zIndex={2200}
            >
                <CartList items={items} />
            </Drawer>
        </>
    )
}

export default ShoppingCart
