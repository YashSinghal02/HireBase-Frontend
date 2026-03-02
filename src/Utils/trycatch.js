import toast from "react-hot-toast";

export const apiTryCatch  = async (fn) => {
  try {
    return await fn();
  } catch (error) {
    const message =
      error.response?.data?.message || error.message || "Something went wrong";

    console.log(message);
    toast.error(message);

    throw error;
  }
};


