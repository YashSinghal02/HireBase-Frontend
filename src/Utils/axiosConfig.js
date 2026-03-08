// import axios from "axios";
// export const api = axios.create({
//   baseURL: 'http://localhost:3000/api',
//   withCredentials : true

// });


// const res=await api.get("server-status");
// console.log(res.data)


import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true, // IMPORTANT for cookies
});


// ✅ Request Interceptor
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);


// ✅ Response Interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If access token expired then immediately againg requesh the same URL
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await axios.post(
          "http://localhost:3000/api/user/refreshToken",
          {},
          { withCredentials: true }
        );

        // const newAccessToken = res.data.accessToken;
        // ***********//
        const newAccessToken =res.headers.authorization.split(" ")[1];
        console.log("newAccessToken",newAccessToken)
        // ***********//
        // Save new token
        localStorage.setItem("accessToken", newAccessToken);

        // Update header
        originalRequest.headers["Authorization"] =
          `Bearer ${newAccessToken}`;

        // Retry original request
        return api(originalRequest);

      } catch (refreshError) {
        console.log("Refresh token expired");

        // Optional: logout user
        localStorage.removeItem("accessToken");
        window.location.href = "/login";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
