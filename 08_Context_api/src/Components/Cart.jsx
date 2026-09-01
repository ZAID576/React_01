import React from "react";

const Cart = ({ cartItems }) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">
        My Cart
      </h1>

      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">

          {cartItems.length === 0 ? (
            <div className="rounded-xl bg-white p-8 text-center shadow-md">
              <p className="text-lg text-gray-500">Your cart is empty.</p>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex items-center gap-6 rounded-xl bg-white p-5 shadow-md"
              >
                
            {/* Product Image */}
            <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-lg bg-gray-50 p-3">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1">
              <p className="mb-1 text-sm capitalize text-blue-600">
                {item.category}
              </p>

              <h2 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-800">
                {item.title}
              </h2>

              <div className="mb-2 flex items-center gap-2">
                <span className="rounded-md bg-green-100 px-2 py-1 text-sm font-semibold text-green-700">
                  ⭐ {item.rating.rate}
                </span>

                <span className="text-sm text-gray-500">
                  ({item.rating.count} reviews)
                </span>
              </div>

              <p className="text-2xl font-bold text-gray-900">
                ${item.price}
              </p>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-3">
              <button className="h-9 w-9 rounded-lg border border-gray-300 text-lg hover:bg-gray-100">
                -
              </button>

              <span className="font-semibold">1</span>

              <button className="h-9 w-9 rounded-lg border border-gray-300 text-lg hover:bg-gray-100">
                +
              </button>
            </div>

            {/* Remove */}
            <button className="rounded-lg bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-600">
              Remove
            </button>
              </div>
            ))
          )}
        </div>
        
        {/* Order Summary */}
        <aside className="h-fit rounded-xl bg-white p-6 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            Order Summary
          </h2>

          <div className="mb-4 flex justify-between text-lg text-gray-600">
            <span>No. of Items</span>
            <span className="font-semibold text-gray-900">{cartItems.length}</span>
          </div>

          <div className="mb-6 flex justify-between border-t border-gray-200 pt-4 text-xl font-bold text-gray-800">
            <span>Total Amount</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>

          <button
            disabled={cartItems.length === 0}
            className="w-full rounded-lg bg-black px-5 py-3 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            Order Now
          </button>
        </aside>
      </div>
    </div>
  );
};

export default Cart;