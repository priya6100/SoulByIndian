/** @format */

import axios from "../helpers/axios";
import { productConstants } from "./constants";

export const getAllProduct = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/products`);
      let product;
      let images;
      if (res.status === 200) {
        product = res.data.Products;

        images = res.data.Products.map((e) =>
          typeof e.productPictures[0] !== "undefined"
            ? e.productPictures[0]
            : ""
        );

        dispatch({
          type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
          payload: { product, images },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: productConstants.GET_ALL_PRODUCTS_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const priceFilter = (filter, product) => {
  let products = [];

  if (!filter.length) {
    products = [...product.filteredItems];
  } else {
    filter.map((filter) => {
      switch (filter) {
        case "priceOption1": {
          products = [
            ...products,
            ...product.filteredItems.filter((product) => product.price <= 499),
          ];

          break;
        }
        case "priceOption2": {
          products = [
            ...products,
            ...product.filteredItems.filter(
              (product) => product.price >= 500 && product.price <= 999
            ),
          ];
          console.log(products);

          break;
        }
        case "priceOption3": {
          products = [
            ...products,
            ...product.filteredItems.filter(
              (product) => product.price >= 1000 && product.price <= 4999
            ),
          ];

          break;
        }
        case "priceOption4": {
          products = [
            ...products,
            ...product.filteredItems.filter(
              (product) => product.price >= 5000 && product.price <= 9999
            ),
          ];

          break;
        }
        case "priceOption5": {
          products = [
            ...products,
            ...product.filteredItems.filter(
              (product) => product.price >= 10000 && product.price <= 49999
            ),
          ];

          break;
        }
        case "priceOption6": {
          products = [
            ...products,
            ...product.filteredItems.filter(
              (product) => product.price >= 50000 && product.price <= 74999
            ),
          ];

          break;
        }
        default:
          break;
      }
    });
  }

  product.filteredItems = products;
  product.images = products.map((e) =>
    typeof e.productPictures[0] !== "undefined" ? e.productPictures[0] : ""
  );

  return product;
};

const sizeFilter = (filter, product) => {
  let products = [];
  // const productFiltered = product.filteredItems.map((prod) => prod);

  // console.log(productFiltered);
  if (!filter.length) {
    products = [...product.filteredItems];
  } else {
    filter.map((filter) => {
      switch (filter) {
        case "S": {
          products = [
            ...products,
            ...product.filteredItems.filter(
              (product) => product.size.S_quantity > 0
            ),
          ];
          const temp_prod = products;
          products = Array.from(new Set(temp_prod.map(JSON.stringify))).map(
            JSON.parse
          );
          break;
        }
        case "M": {
          products = [
            ...products,
            ...product.filteredItems.filter(
              (product) => product.size.M_quantity > 0
            ),
          ];
          const temp_prod = products;
          products = Array.from(new Set(temp_prod.map(JSON.stringify))).map(
            JSON.parse
          );
          break;
        }
        case "X": {
          products = [
            ...products,
            ...product.filteredItems.filter(
              (product) => product.size.X_quantity > 0
            ),
          ];
          const temp_prod = products;
          products = Array.from(new Set(temp_prod.map(JSON.stringify))).map(
            JSON.parse
          );
          break;
        }
        case "XL": {
          products = [
            ...products,
            ...product.filteredItems.filter(
              (product) => product.size.XL_quantity > 0
            ),
          ];
          const temp_prod = products;
          products = Array.from(new Set(temp_prod.map(JSON.stringify))).map(
            JSON.parse
          );
          break;
        }
        case "XXL": {
          products = [
            ...products,
            ...product.filteredItems.filter(
              (product) => product.size.X2L_quantity > 0
            ),
          ];
          const temp_prod = products;
          products = Array.from(new Set(temp_prod.map(JSON.stringify))).map(
            JSON.parse
          );
          break;
        }
        case "XXXL": {
          products = [
            ...products,
            ...product.filteredItems.filter(
              (product) => product.size.X3L_quantity > 0
            ),
          ];
          const temp_prod = products;
          products = Array.from(new Set(temp_prod.map(JSON.stringify))).map(
            JSON.parse
          );
          break;
        }
        default:
          break;
      }
    });
  }

  product.filteredItems = products;
  product.images = products.map((e) =>
    typeof e.productPictures[0] !== "undefined" ? e.productPictures[0] : ""
  );

  return product;
};

const colorFilter = (filter, product) => {
  let products = [];
  if (!filter.length) {
    products = [...product.filteredItems];
  } else {
    filter.map((filter) => {
      switch (filter) {
        case "green": {
          products = [
            ...products,
            ...product.filteredItems.filter(
              (product) => product.color.indexOf("green") > -1
            ),
          ];
          const temp_prod = products;
          products = Array.from(new Set(temp_prod.map(JSON.stringify))).map(
            JSON.parse
          );
          break;
        }

        case "blue": {
          products = [
            ...products,
            ...product.filteredItems.filter(
              (product) => product.color.indexOf("blue") > -1
            ),
          ];

          const temp_prod = products;
          products = Array.from(new Set(temp_prod.map(JSON.stringify))).map(
            JSON.parse
          );
          break;
        }
        case "white": {
          products = [
            ...products,
            ...product.filteredItems.filter(
              (product) => product.color.indexOf("white") > -1
            ),
          ];

          const temp_prod = products;
          products = Array.from(new Set(temp_prod.map(JSON.stringify))).map(
            JSON.parse
          );
          break;
        }
        case "red": {
          products = [
            ...products,
            ...product.filteredItems.filter(
              (product) => product.color.indexOf("green") > -1
            ),
          ];
          const temp_prod = products;
          products = Array.from(new Set(temp_prod.map(JSON.stringify))).map(
            JSON.parse
          );

          break;
        }
        case "black": {
          products = [
            ...products,
            ...product.filteredItems.filter(
              (product) => product.color.indexOf("black") > -1
            ),
          ];
          const temp_prod = products;
          products = Array.from(new Set(temp_prod.map(JSON.stringify))).map(
            JSON.parse
          );

          break;
        }
        case "purple": {
          products = [
            ...products,
            ...product.filteredItems.filter(
              (product) => product.color.indexOf("purple") > -1
            ),
          ];
          const temp_prod = products;
          products = Array.from(new Set(temp_prod.map(JSON.stringify))).map(
            JSON.parse
          );

          break;
        }
        case "yellow": {
          products = [
            ...products,
            ...product.filteredItems.filter(
              (product) => product.color.indexOf("yellow") > -1
            ),
          ];
          const temp_prod = products;
          products = Array.from(new Set(temp_prod.map(JSON.stringify))).map(
            JSON.parse
          );

          break;
        }
        case "orange": {
          products = [
            ...products,
            ...product.filteredItems.filter(
              (product) => product.color.indexOf("orange") > -1
            ),
          ];
          const temp_prod = products;
          products = Array.from(new Set(temp_prod.map(JSON.stringify))).map(
            JSON.parse
          );

          break;
        }
        case "grey": {
          products = [
            ...products,
            ...product.filteredItems.filter(
              (product) => product.color.indexOf("grey") > -1
            ),
          ];
          const temp_prod = products;
          products = Array.from(new Set(temp_prod.map(JSON.stringify))).map(
            JSON.parse
          );

          break;
        }
        case "brown": {
          products = [
            ...products,
            ...product.filteredItems.filter(
              (product) => product.color.indexOf("brown") > -1
            ),
          ];
          const temp_prod = products;
          products = Array.from(new Set(temp_prod.map(JSON.stringify))).map(
            JSON.parse
          );
          break;
        }

        default:
          break;
      }
    });
  }

  product.filteredItems = products;
  product.images = products.map((e) =>
    typeof e.productPictures[0] !== "undefined" ? e.productPictures[0] : ""
  );

  return product;
};

const filteredProducts = (filter, product) => {
  const arrPriceFilter = [];
  const arrSizeFilter = [];
  const arrColorFilter = [];
  filter.map((filter) => {
    switch (filter) {
      case "green":
        arrColorFilter.push(filter);
        break;
      case "blue":
        arrColorFilter.push(filter);
        break;
      case "white":
        arrColorFilter.push(filter);
        break;
      case "red":
        arrColorFilter.push(filter);
        break;
      case "black":
        arrColorFilter.push(filter);
        break;
      case "purple":
        arrColorFilter.push(filter);
        break;
      case "yellow":
        arrColorFilter.push(filter);
        break;
      case "orange":
        arrColorFilter.push(filter);
        break;
      case "grey":
        arrColorFilter.push(filter);
        break;
      case "brown":
        arrColorFilter.push(filter);
        break;
      case "S":
        arrSizeFilter.push(filter);
        break;

      case "M":
        arrSizeFilter.push(filter);
        break;

      case "X":
        arrSizeFilter.push(filter);
        break;

      case "XL":
        arrSizeFilter.push(filter);
        break;

      case "XXL":
        arrSizeFilter.push(filter);
        break;

      case "XXXL":
        arrSizeFilter.push(filter);
        break;
      case "priceOption1":
        arrPriceFilter.push(filter);
        break;

      case "priceOption2":
        arrPriceFilter.push(filter);
        break;

      case "priceOption3":
        arrPriceFilter.push(filter);
        break;

      case "priceOption4":
        arrPriceFilter.push(filter);
        break;

      case "priceOption5":
        arrPriceFilter.push(filter);
        break;

      case "priceOption6":
        arrPriceFilter.push(filter);
        break;

      default:
        break;
    }
  });

  product.filteredItems = product.products;
  product.images = product.products.map((e) =>
    typeof e.productPictures[0] !== "undefined" ? e.productPictures[0] : ""
  );

  const product1 = sizeFilter(arrSizeFilter, product);
  const product2 = colorFilter(arrColorFilter, product1);
  const product3 = priceFilter(arrPriceFilter, product2);
  // product =
  // console.log(product);

  return product3;
};

export const filterProducts = (filter, product) => async (dispatch) => {
  product = filteredProducts(filter, product);
  const filteredItems = product.filteredItems;
  const products = product.products;
  const images = product.filteredItems.map((e) =>
    typeof e.productPictures[0] !== "undefined" ? e.productPictures[0] : ""
  );
  return dispatch({
    type: productConstants.FILTER_PRODUCTS_BY_PRICE,
    payload: {
      filteredItems,
      products,
      images,
    },
  });
};

export const sortingProducts = (sorting, product) => async (dispatch) => {
  const filteredItems = product.filteredItems;
  sorting === "Price: Low to High"
    ? filteredItems.sort((a, b) => a.price - b.price)
    : filteredItems.sort((a, b) => b.price - a.price);
  console.log(filteredItems);
  return dispatch({
    type: productConstants.SORTING_PRODUCTS_BY_PRICE,
    payload: {
      filteredItems,
      products: product.products,
    },
  });
};

export const getProductsBySlug = (slug) => {
  return async (dispatch) => {
    const res = await axios.get(`/products/${slug}`);
    if (res.status === 200) {
      console.log(res.data);
      dispatch({
        type: productConstants.GET_PRODUCTS_BY_SLUG,
        payload: res.data,
      });
    } else {
    }
  };
};

export const getProductPage = (payload) => {
  return async (dispatch) => {
    try {
      const { cid, type } = payload.params;
      const res = await axios.get(`/page/${cid}/${type}`);
      dispatch({ type: productConstants.GET_PRODUCT_PAGE_REQUEST });
      if (res.status === 200) {
        const { page } = res.data;
        dispatch({
          type: productConstants.GET_PRODUCT_PAGE_SUCCESS,
          payload: { page },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: productConstants.GET_PRODUCT_PAGE_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProductDetailsById = (payload) => {
  return async (dispatch) => {
    dispatch({ type: productConstants.GET_PRODUCTS_DETAILS_BY_ID_REQUEST });
    let res;
    try {
      const { productId } = payload.params;
      res = await axios.get(`/product/${productId}`);
      console.log(res);
      dispatch({
        type: productConstants.GET_PRODUCTS_DETAILS_BY_ID_SUCCESS,
        payload: { productDetails: res.data.product },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: productConstants.GET_PRODUCTS_DETAILS_BY_ID_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
