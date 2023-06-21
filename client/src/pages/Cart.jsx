import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
import { clearCart } from "../redux/productSlice";
import { toast } from "react-hot-toast";
const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  const dispatch = useDispatch();

  const totalPrice = productCartItem.reduce((acc, curr) => acc + parseInt(curr.total), 0);
    const totalQty =productCartItem.reduce((acc, curr) => acc + parseInt(curr.qty), 0);

    const handlePayment = () => {
        if (productCartItem.length === 0) {
          toast.error("Kindly add items to your cart before checking out");
        } else {
          toast.success("Checkout successful. Kindly wait for your order");
          dispatch(clearCart());
        }
      };

  return (
    <div className="p-2 md:p-4">
      <h1 className="text-lg font-bold text-slate-600 md:text-2xl">
        Your Cart Items
      </h1>

      <div className="my-4">
        {/* display cart item */}
        <div className="lg:flex">
          <div className="w-full max-w-3xl justify-center items-center">
            {productCartItem.map((list) => {
              return (
                <CartProduct
                  key={list._id}
                  id={list._id}
                  name={list.name}
                  image={list.image}
                  category={list.category}
                  qty={list.qty}
                  total={list.total}
                  price={list.price}
                />
              );
            })}
          </div>
        

        {/* total cart items */}
        <div className="w-full max-w-md bg-slate-200 m-auto rounded p-2">
            <h2 className="bg-blue-500 text-white p-2 text-lg rounded">Summary</h2>

            <div className="flex w-full gap-2 py-2 text-lg border-b">
                <p>Total Qty</p>
                <p className="ml-auto w-32 font-bold">{totalQty}</p>
            </div>

            <div className="flex w-full gap-2 py-2 text-lg border-b">
                <p>Total Price</p>
                <p className="ml-auto w-32 font-bold"><span className="text-red-500">$</span>{totalPrice}</p>
            </div>

            <button onClick={handlePayment} className="bg-red-500 w-full text-lg font-bold py-2 rounded hover:bg-green-400 transition-all">Checkout</button>

        </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;
