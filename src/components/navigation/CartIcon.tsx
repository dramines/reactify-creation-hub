import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../cart/CartProvider';

const CartIcon = () => {
  const { cartItems } = useCart();
  const itemCount = cartItems.length;

  return (
    <div className="relative">
      <ShoppingCart className="w-6 h-6 text-[#1A1F2C]" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#700100] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;