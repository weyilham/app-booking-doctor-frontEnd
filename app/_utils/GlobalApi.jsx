const { default: axios } = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

const getCategory = () => {
  return axiosClient.get("categories?populate=*");
};

const getDoctors = () => {
  return axiosClient.get("doctors?populate=*");
};

const getDoctorByCategory = (category) => {
  return axiosClient.get(
    `/doctors?filters[categories][name][$in]=${category}&populate=*`
  );
};

const getDoctorById = (id) => {
  return axiosClient.get(`/doctors/${id}?populate=*`);
};

export default { getCategory, getDoctors, getDoctorByCategory, getDoctorById };
