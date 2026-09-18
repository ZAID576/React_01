const ProductsCard = ({ product , setcartItem}) => {
  return (
    <div className="w-72 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      
      {/* Product Image */}
      <div className="h-64 flex items-center justify-center bg-gray-100 p-5">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Category */}
        <p className="text-sm text-gray-500 capitalize mb-2">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-yellow-500">
            ⭐ {product.rating.rate}
          </span>

          <span className="text-sm text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-5">
          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>

          <button onClick={()=>{setcartItem((prev)=>[...prev, product])}} className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductsCard;