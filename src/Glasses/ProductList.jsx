import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, onSelect }) => {
	return (
		<div className="row bg-white w-75 mx-auto mt-5">
			{products.map((product, index) => {
				return (
					<ProductItem
						key={index}
						product={product}
						onSelect={onSelect}
					/>
				);
			})}
		</div>
	);
};

export default ProductList;
