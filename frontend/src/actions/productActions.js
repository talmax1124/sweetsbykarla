import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_DELETE_REVIEW_FAIL,
  PRODUCT_DELETE_REVIEW_REQUEST,
  PRODUCT_DELETE_REVIEW_SUCCESS,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL,
  PRODUCT_LIST_BY_CATEGORY_REQUEST,
  PRODUCT_LIST_BY_CATEGORY_SUCCESS,
  PRODUCT_LIST_BY_CATEGORY_FAIL,
  PRODUCTS_ORDER_BY_PRICE,
  PRODUCT_LATEST_REQUEST,
  PRODUCT_LATEST_SUCCESS,
  PRODUCT_LATEST_FAIL,
} from "../constants/productConstants";
import { logout } from "./userActions";

export const listProducts = (keyword = "", pageNumber = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    if (process.env.NODE_ENV === "development") {
      const { data } = await axios.get(
        `/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
      );
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    } else {
      const { data } = await axios.get(
        `https://backend.sweetsbykarla.net/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
      );
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//LIST PRODUCT BY CATEGORY

export const listProductByCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_BY_CATEGORY_REQUEST });

    if (process.env.NODE_ENV === "development") {
      const { data } = await axios.get(`/api/products/category/${category}`);
      dispatch({
        type: PRODUCT_LIST_BY_CATEGORY_SUCCESS,
        payload: data,
      });
    }
    if (process.env.NODE_ENV === "production") {
      const { data } = await axios.get(
        `https://backend.sweetsbykarla.net/api/products/category/${category}`
      );
      dispatch({
        type: PRODUCT_LIST_BY_CATEGORY_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_BY_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//LIST PRODUCT BY BRAND

export const listProductByBrand = (brand) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_BY_CATEGORY_REQUEST });

    if (process.env.NODE_ENV === "development") {
      const { data } = await axios.get(`/api/products/brand/${brand}`);
      dispatch({
        type: PRODUCT_LIST_BY_CATEGORY_SUCCESS,
        payload: data,
      });
    }
    if (process.env.NODE_ENV === "production") {
      const { data } = await axios.get(
        `https://backend.sweetsbykarla.net/api/products/brand/${brand}`
      );
      dispatch({
        type: PRODUCT_LIST_BY_CATEGORY_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_BY_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    if (process.env.NODE_ENV === "development") {
      const { data } = await axios.get(`/api/products/${id}`);
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    }
    if (process.env.NODE_ENV === "production") {
      const { data } = await axios.get(
        `https://backend.sweetsbykarla.net/api/products/${id}`
      );
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    if (process.env.NODE_ENV === "development") {
      await axios.delete(`/api/products/${id}`, config);

      dispatch({
        type: PRODUCT_DELETE_SUCCESS,
      });
    }
    if (process.env.NODE_ENV === "production") {
      await axios.delete(
        `https://backend.sweetsbykarla.net/api/products/${id}`,
        config
      );

      dispatch({
        type: PRODUCT_DELETE_SUCCESS,
      });
    }
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload: message,
    });
  }
};

export const createProduct = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    if (process.env.NODE_ENV === "development") {
      const { data } = await axios.post(`/api/products`, {}, config);
      dispatch({
        type: PRODUCT_CREATE_SUCCESS,
        payload: data,
      });
    }
    if (process.env.NODE_ENV === "production") {
      const { data } = await axios.post(
        `https://backend.sweetsbykarla.net/api/products`,
        {},
        config
      );
      dispatch({
        type: PRODUCT_CREATE_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload: message,
    });
  }
};

export const updateProduct = (product) => async (dispatch, getState) => {
  console.log("product in update action", product);
  try {
    dispatch({
      type: PRODUCT_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    if (process.env.NODE_ENV === "development") {
      const { data } = await axios.put(
        `/api/products/${product._id}`,
        product,
        config
      );

      dispatch({
        type: PRODUCT_UPDATE_SUCCESS,
        payload: data,
      });
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    }
    if (process.env.NODE_ENV === "production") {
      const { data } = await axios.put(
        `https://backend.sweetsbykarla.net/api/products/${product._id}`,
        product,
        config
      );

      dispatch({
        type: PRODUCT_UPDATE_SUCCESS,
        payload: data,
      });
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    }
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PRODUCT_UPDATE_FAIL,
      payload: message,
    });
  }
};

export const createProductReview = (productId, review) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: PRODUCT_CREATE_REVIEW_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    if (process.env.NODE_ENV === "development") {
      await axios.post(`/api/products/${productId}/reviews`, review, config);

      dispatch({
        type: PRODUCT_CREATE_REVIEW_SUCCESS,
      });
    }
    if (process.env.NODE_ENV === "production") {
      await axios.post(
        `https://backend.sweetsbykarla.net/api/products/${productId}/reviews`,
        review,
        config
      );

      dispatch({
        type: PRODUCT_CREATE_REVIEW_SUCCESS,
      });
    }
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PRODUCT_CREATE_REVIEW_FAIL,
      payload: message,
    });
  }
};

export const deleteProductReview = (productId, review) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: PRODUCT_DELETE_REVIEW_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
      data: review,
    };

    if (process.env.NODE_ENV === "development") {
      await axios.delete(`/api/products/${productId}/reviews`, config);

      dispatch({
        type: PRODUCT_DELETE_REVIEW_SUCCESS,
      });
    }
    if (process.env.NODE_ENV === "production") {
      await axios.delete(
        `https://backend.sweetsbykarla.net/api/products/${productId}/reviews`,
        config
      );

      dispatch({
        type: PRODUCT_DELETE_REVIEW_SUCCESS,
      });
    }
    dispatch(listProductDetails(productId));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PRODUCT_DELETE_REVIEW_FAIL,
      payload: message,
    });
  }
};

export const listTopProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_TOP_REQUEST });

    if (process.env.NODE_ENV === "development") {
      const { data } = await axios.get(`/api/products/top`);

      dispatch({
        type: PRODUCT_TOP_SUCCESS,
        payload: data,
      });
    }
    if (process.env.NODE_ENV === "production") {
      const { data } = await axios.get(
        `https://backend.sweetsbykarla.net/api/products/top`
      );

      dispatch({
        type: PRODUCT_TOP_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: PRODUCT_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listLatestProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LATEST_REQUEST });

    if (process.env.NODE_ENV === "development") {
      const { data } = await axios.get(`/api/products/latest`);

      dispatch({
        type: PRODUCT_LATEST_SUCCESS,
        payload: data,
      });
    }
    if (process.env.NODE_ENV === "production") {
      const { data } = await axios.get(
        `https://backend.sweetsbykarla.net/api/products/latest`
      );

      dispatch({
        type: PRODUCT_LATEST_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: PRODUCT_LATEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const sortProducts = (products, sort, pages, page) => (dispatch) => {
  const items = products.slice();
  if (sort !== "") {
    if (sort === "lowestprice") {
      items.sort((a, b) =>
        sort === "lowestprice"
          ? a.price > b.price
            ? 1
            : -1
          : a.price < b.price
          ? 1
          : -1
      );
    } else if (sort === "highestprice") {
      items.sort((a, b) =>
        sort === "highestprice"
          ? a.price < b.price
            ? 1
            : -1
          : a.price > b.price
          ? 1
          : -1
      );
    } else if (sort === "toprated") {
      items.sort((a, b) =>
        sort === "toprated"
          ? a.rating < b.rating
            ? 1
            : -1
          : a.rating > b.rating
          ? 1
          : -1
      );
    } else if (sort === "popularity") {
      items.sort((a, b) =>
        sort === "popularity"
          ? a.numReviews < b.numReviews
            ? 1
            : -1
          : a.numReviews > b.numReviews
          ? 1
          : -1
      );
    }
  } else {
    items.sort((a, b) => (a._id > b._id ? 1 : -1));
  }

  dispatch({
    type: PRODUCTS_ORDER_BY_PRICE,
    payload: {
      products: items,
      sort: sort,
      pages: pages,
      page: page,
    },
  });
};
