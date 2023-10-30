import React, { useState } from "react";

import { RiShoppingCart2Fill } from "react-icons/ri";
import { Drawer } from "antd";

const ShoppingCart = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className={"shopping-cart-container"}>
        <div
          className={"shopping-cart-display"}
          onClick={() => setVisible(true)}
        >
          <div className={"shopping-cart-items-number"}>{0}</div>
          <RiShoppingCart2Fill size={35} className={"shopping-cart-icon"} />
        </div>
      </div>

      <Drawer
        open={visible}
        title={"Shopping Cart"}
        onClose={() => setVisible(false)}
      >
        <div>Here will be Cart Items</div>
      </Drawer>
    </>
  );
};

export default ShoppingCart;
