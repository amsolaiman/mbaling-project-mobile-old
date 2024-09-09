import axios from "axios";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_HOST_API,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;

export const API_ENDPOINTS = {
  auth: {
    me: "/api/auth/me",
    login: "/api/auth/login",
  },
  landlord: {
    list: "/api/landlord/list",
    get: (id: string) => `/api/landlord/list/${id}`,
    search: "/api/landlord/search",
  },
  student: {
    list: "/api/student/list",
    search: "/api/student/search",
  },
  post: {
    list: "/api/post/list",
    search: "/api/post/search",
  },
};
