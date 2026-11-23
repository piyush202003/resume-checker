// import axios from "axios";

// export const apiClient = axios.create({
//     baseURL: import.meta.env.BACKEND_URL || 'http://127.0.0.1:8000/api/',
//     withCredentials: true,
//     headers: {
//         'Content-Type' : 'application/json', 
//         // 'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
//     }
// })

// apiClient.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem("access_token");
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         const message = error.response?.data?.message || error.message || 'Access token did not got!'
//         return Promise.reject({
//             message
//         });
//     }
// );

// apiClient.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         const message = error.response?.data?.message || error.message || 'Request failed'
//         return Promise.reject({
//             status: error.response?.status,
//             message,
//             details: error.response?.data?.error?.details,
//             original: error,
//         })
//     }
// )

export const apiCLient = null