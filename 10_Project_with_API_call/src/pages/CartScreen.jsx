// import React from 'react'

// const CartScreen = () => {
//   return (
//     <div className='h-screen text-6xl'>
//       <h1>this is cart section</h1>
//     </div>
//   )
// }

// export default CartScreenimport React from "react";

const CartScreen = () => {
  const product = {
    title: "Fjallraven Backpack",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    quantity: 1,
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          Shopping Cart
        </h1>

        {/* Product Card */}
        <div className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-md sm:flex-row sm:items-center">
          
          {/* Product Image */}
          <div className="flex h-40 w-full items-center justify-center rounded-xl bg-gray-50 sm:w-40">
            <img
              src={product.image}
              alt={product.title}
              className="h-32 w-32 object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-800">
              {product.title}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Premium quality backpack for everyday use.
            </p>

            <p className="mt-3 text-xl font-bold text-gray-900">
              ${product.price}
            </p>

            {/* Quantity */}
            <div className="mt-4 flex items-center gap-3">
              <button className="flex h-9 w-9 items-center justify-center rounded-lg border text-lg hover:bg-gray-100">
                -
              </button>

              <span className="font-semibold">
                {product.quantity}
              </span>

              <button className="flex h-9 w-9 items-center justify-center rounded-lg border text-lg hover:bg-gray-100">
                +
              </button>
            </div>
          </div>

          {/* Remove Button */}
          <button className="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-50">
            Remove
          </button>
        </div>

        {/* Cart Summary */}
        <div className="mt-6 rounded-2xl bg-white p-6 shadow-md">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>${product.price}</span>
          </div>

          <div className="mt-3 flex justify-between text-gray-600">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="my-4 border-t"></div>

          <div className="flex justify-between text-xl font-bold text-gray-800">
            <span>Total</span>
            <span>${product.price}</span>
          </div>

          <button className="mt-6 w-full rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-gray-800">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;



