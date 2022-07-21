import React from "react";

const ProductDetail = ({ product }) => {
	return (
		<div className="col-md-6">
			<div
				style={{ width: "300px", height: "350px" }}
				className="mx-auto position-relative"
			>
				<img
					src="./glassesImage/model.jpg"
					alt="model"
					width="100%"
					height="100%"
				/>
				<img
					className="img-glasses"
					src={product.url}
					alt="glasses"
					width="150px"
					height="50px"
				/>
				<div className="info p-2 text-white">
					<h4 className="text-primary fs-5 mb-1">{product.name}</h4>
					<p className="my-1 fs-5">$ {product.price}</p>
					<p className="fs-6 lh-sm mb-0">{product.desc}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
