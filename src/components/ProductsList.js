import React from "react";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";
import Grid from "@mui/material/Grid";

const ProductsList = ({ products, onAddToCart }) => {
  return (
    <main>
      <Grid container jusify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductItem
              product={product}
              onAddToCart={onAddToCart}
            />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array,
};

export default ProductsList;
