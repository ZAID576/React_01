import React from 'react'

 const ProductCard = ({ product, setCartItems }) => {

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">

      {/* Product Image */}
      <div className="flex h-64 items-center justify-center bg-gray-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Category */}
        <p className="mb-2 text-sm font-medium capitalize text-blue-600">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-md bg-green-100 px-2 py-1 text-sm font-semibold text-green-700">
            ⭐ {product.rating.rate}
          </span>

          <span className="text-sm text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Description */}
        <p className="mb-4 line-clamp-2 text-sm leading-5 text-gray-500">
          {product.description}
        </p>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>

          <button onClick={() => setCartItems((prev) => [...prev, product])} className="rounded-lg bg-black px-5 py-2.5 font-medium text-white transition hover:bg-gray-800">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;  


// import React from "react";

// const ProductCard = ({ product, setCartItems }) => {
//   return (
//     <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
//       <div className="flex h-64 items-center justify-center bg-gray-50 p-6">
//         <img src={product.image} alt={product.title} className="h-full w-full object-contain" />
//       </div>

//       <div className="p-5">
//         <p className="mb-2 text-sm font-medium capitalize text-blue-600">{product.category}</p>
//         <h2 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-800">{product.title}</h2>

//         <div className="mb-3 flex items-center gap-2">
//           <span className="rounded-md bg-green-100 px-2 py-1 text-sm font-semibold text-green-700">
//             {product.rating.rate}
//           </span>
//           <span className="text-sm text-gray-500">({product.rating.count} reviews)</span>
//         </div>

//         <p className="mb-4 line-clamp-2 text-sm leading-5 text-gray-500">{product.description}</p>

//         <div className="flex items-center justify-between gap-3">
//           <span className="text-2xl font-bold text-gray-900">${product.price}</span>
//           <button
//             onClick={() => setCartItems((previousItems) => [...previousItems, product])}
//             className="rounded-lg bg-black px-5 py-2.5 font-medium text-white transition hover:bg-gray-800"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;