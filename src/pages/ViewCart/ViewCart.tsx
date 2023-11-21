import {CartList} from "../../components/ShoppingCart/CartList";
import React from "react";
import {ICheckoutStore, useCheckoutStore} from "../../store";
import {Card, Flex} from "antd";

const ViewCart = () => {
    const { items, drawerVisible, setDrawerVisible } = useCheckoutStore(
        (state) => state as ICheckoutStore
    )

    return(
        <Card title={'Cart'} className={'px-10 min-h-fit w-full'}>
            <Flex vertical justify={'center'}>
                <CartList items={items} />
            </Flex>
        </Card>
    );
}

export default ViewCart;