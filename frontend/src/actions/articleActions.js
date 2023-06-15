import axios from "axios";
import {
  ARTICLE_LIST_REQUEST,
  ARTICLE_LIST_SUCCESS,
  ARTICLE_LIST_FAIL,
  ARTICLE_DETAILS_REQUEST,
  ARTICLE_DETAILS_SUCCESS,
  ARTICLE_DETAILS_FAIL,
  ARTICLE_DELETE_SUCCESS,
  ARTICLE_DELETE_REQUEST,
  ARTICLE_DELETE_FAIL,
  ARTICLE_CREATE_REQUEST,
  ARTICLE_CREATE_SUCCESS,
  ARTICLE_CREATE_FAIL,
  ARTICLE_UPDATE_REQUEST,
  ARTICLE_UPDATE_SUCCESS,
  ARTICLE_UPDATE_FAIL,
} from "../constants/articleConstants";

export const listArticles =
  (keyword = "", pageNumber = "") =>
  async (dispatch) => {
    try {
      if (process.env.NODE_ENV === "development") {
        dispatch({ type: ARTICLE_LIST_REQUEST });

        const { data } = await axios.get(
          `/api/articles?keyword=${keyword}&pageNumber=${pageNumber}`
        );

        dispatch({
          type: ARTICLE_LIST_SUCCESS,
          payload: data,
        });
      } else {
        dispatch({ type: ARTICLE_LIST_REQUEST });

        const { data } = await axios.get(
          `https://backend.sweetsbykarla.net/api/articles?keyword=${keyword}&pageNumber=${pageNumber}`
        );

        dispatch({
          type: ARTICLE_LIST_SUCCESS,
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: ARTICLE_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listArticleDetails = (id) => async (dispatch) => {
  try {
    if (process.env.NODE_ENV === "development") {
      dispatch({ type: ARTICLE_DETAILS_REQUEST });

      const { data } = await axios.get(`/api/articles/${id}`);

      dispatch({
        type: ARTICLE_DETAILS_SUCCESS,
        payload: data,
      });
    } else if (process.env.NODE_ENV === "production") {
      dispatch({ type: ARTICLE_DETAILS_REQUEST });

      const { data } = await axios.get(
        `https://backend.sweetsbykarla.net/api/articles/${id}`
      );

      dispatch({
        type: ARTICLE_DETAILS_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: ARTICLE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteArticle = (id) => async (dispatch, getState) => {
  try {
    if (process.env.NODE_ENV === "development") {
      dispatch({
        type: ARTICLE_DELETE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.delete(`/api/articles/${id}`, config);

      dispatch({
        type: ARTICLE_DELETE_SUCCESS,
      });
    } else if (process.env.NODE_ENV === "production") {
      dispatch({
        type: ARTICLE_DELETE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.delete(
        `https://backend.sweetsbykarla.net/api/articles/${id}`,
        config
      );

      dispatch({
        type: ARTICLE_DELETE_SUCCESS,
      });
    }
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ARTICLE_DELETE_FAIL,
      payload: message,
    });
  }
};

export const createArticle = () => async (dispatch, getState) => {
  try {
    if (process.env.NODE_ENV === "development") {
      dispatch({
        type: ARTICLE_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(`/api/articles`, {}, config);

      dispatch({
        type: ARTICLE_CREATE_SUCCESS,
        payload: data,
      });
    }
    if (process.env.NODE_ENV === "production") {
      dispatch({
        type: ARTICLE_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `https://backend.sweetsbykarla.net/api/articles`,
        {},
        config
      );

      dispatch({
        type: ARTICLE_CREATE_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ARTICLE_CREATE_FAIL,
      payload: message,
    });
  }
};

export const updateArticle = (article) => async (dispatch, getState) => {
  try {
    if (process.env.NODE_ENV === "development") {
      dispatch({
        type: ARTICLE_UPDATE_REQUEST,
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

      const { data } = await axios.put(
        `/api/articles/${article._id}`,
        article,
        config
      );

      dispatch({
        type: ARTICLE_UPDATE_SUCCESS,
        payload: data,
      });
      dispatch({ type: ARTICLE_DETAILS_SUCCESS, payload: data });
    }
    if (process.env.NODE_ENV === "production") {
      dispatch({
        type: ARTICLE_UPDATE_REQUEST,
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

      const { data } = await axios.put(
        `https://backend.sweetsbykarla.net/api/articles/${article._id}`,
        article,
        config
      );

      dispatch({
        type: ARTICLE_UPDATE_SUCCESS,
        payload: data,
      });
      dispatch({ type: ARTICLE_DETAILS_SUCCESS, payload: data });
    }
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ARTICLE_UPDATE_FAIL,
      payload: message,
    });
  }
};
