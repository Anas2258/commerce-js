import React, { Component } from "react";
import { stripHtml } from "string-strip-html";
import PropTypes from "prop-types";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

const ProductItem = ({ product, onAddToCart }) => {

  const { result } = stripHtml(product.description);

  const handleAddToCart = () => {
    onAddToCart(product.id, 1);
  };

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        sx={{
          height: 0,
          paddingTop: "56.25%",
        }}
        image={product.image?.url}
        title={product.name}
      />
      <CardContent>
        <div sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography>{product.price.formatted_with_symbol}</Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {result}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <IconButton aria-label="Add to Card" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;
