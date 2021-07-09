import axios from 'axios'

const baseUrl = process.env.SCHOOL_DATA_BASE_URL

console.log({baseUrl})
const axiosRequest = () =>  {
  return axios.create({
  baseURL: baseUrl,
  headers: {  
    Accept: 'application/json'
  },
  responseType: 'json'
  
})}

export default axiosRequest