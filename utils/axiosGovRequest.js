import axios from "axios";
// this queries the api.gov
const baseUrl = process.env.GOV_DATA_BASE_URL;

const axiosRequest = () => {
  return axios.create({
    baseURL: baseUrl,
    headers: {
      Accept: "application/json",
    },
    responseType: "json",
  });
};

export default axiosRequest;
