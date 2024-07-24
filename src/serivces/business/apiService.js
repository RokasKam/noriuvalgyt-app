import axios from 'axios';
import {
  API_ENDPOINTS_USER,
  API_ENDPOINTS_RECIPE,
} from '../../constants/apiEndpoints';

const REACT_APP_API = 'https://ee8e-78-61-24-56.ngrok-free.app/api';

const login = loginInfo =>
  axios.post(`${REACT_APP_API}${API_ENDPOINTS_USER.LOGIN}`, loginInfo);

const fetchUserInfo = headers =>
  axios.get(`${REACT_APP_API}${API_ENDPOINTS_USER.GET_ME}`, {
    headers: headers,
  });

const register = registerInfo =>
  axios.post(`${REACT_APP_API}${API_ENDPOINTS_USER.REGISTER}`, registerInfo);

const uploadNewRecipe = recipe =>
  axios.post(`${REACT_APP_API}${API_ENDPOINTS_RECIPE.CREATE}`, recipe);

const fetchRecipes = params =>
  axios.get(`${REACT_APP_API}${API_ENDPOINTS_RECIPE.GET_ALL}`, {
    params: params,
  });

const updateRating = (id, updateRequest) =>
  axios.put(
    `${REACT_APP_API}${API_ENDPOINTS_RECIPE.UPDATE}${id}`,
    updateRequest,
  );

const fetchSuggestions = params =>
  axios.get(`${REACT_APP_API}${API_ENDPOINTS_RECIPE.GET_SUG}`, {
    params: params,
  });

const fetchUserRecipes = (params, headers) =>
  axios.get(`${REACT_APP_API}${API_ENDPOINTS_USER.GET_USER_RECIPES}`, {
    params: params,
    headers: headers,
  });

const addLikedRecipe = (params, headers) =>
  axios.post(`${REACT_APP_API}${API_ENDPOINTS_USER.ADD_LIKED}`, null, {
    params: params,
    headers: headers,
  });

const removeLikedRecipe = (params, headers) =>
  axios.delete(`${REACT_APP_API}${API_ENDPOINTS_USER.REMOVE_LIKED}`, {
    params: params,
    headers: headers,
  });

export const apiService = {
  login,
  fetchUserInfo,
  register,
  uploadNewRecipe,
  fetchRecipes,
  updateRating,
  fetchSuggestions,
  fetchUserRecipes,
  addLikedRecipe,
  removeLikedRecipe,
};
