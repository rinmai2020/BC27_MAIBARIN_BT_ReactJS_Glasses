import React from "react";
import ProductDetail from "./ProductDetail";
import Model from "./Model";

const Info = ({ product, isOpen }) => {
	return (
		<div className="row container-fluid text-center mt-5 ms-0">
			<ProductDetail product={product} />
			<Model product={product} isOpen={isOpen} />
		</div>
	);
};

export default Info;
