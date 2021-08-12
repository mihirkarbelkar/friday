import axios from 'axios';
import { API_ENDPOINT } from 'app/constants/common';

export default async function apiCall(payload) {

  const {
    API_CALL,
    url,
    headers = {},
    isFormData = false
  } = payload;

  const API_URL = `${API_ENDPOINT}${url}`;

  let reqHeaders = { ...headers };
  if (isFormData) reqHeaders = { ...reqHeaders, 'Content-Type': 'multipart/form-data' };
  reqHeaders = { ...reqHeaders,
    'Content-Type': 'application/json' };

  // Setting API parameters
  const apiParams = {
    ...API_CALL,
    url: API_URL,
    headers: reqHeaders
  };

  try {
    // Make API call
    const apiResponse = await axios(apiParams);

    if (apiResponse) {
      // API call success
      return apiResponse;
    }
  } catch (err) {
    // Read failure message if any
    let errMessage = err?.message;
    if (err?.response) {
      errMessage = err.response?.data?.message || err?.response?.data?.error?.message;
    }

    // Logging the error
    if (errMessage) {
      console.log(errMessage);
    }

    return err?.response;
  }
  return null;
}