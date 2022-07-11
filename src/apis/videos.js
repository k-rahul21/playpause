import axios from "axios";
import { useAuth } from "../contexts/index";

const getVideos = async () => {
  try {
    const response = await axios({
      method: "get",
      url: "/api/videos",
    });
    if (response.status === 200) return response.data;
  } catch (error) {
    console.error(error.response);
    alert(error);
  }
};

const getCategories = async () => {
  try {
    const response = await axios({
      method: "get",
      url: "/api/categories",
    });
    if (response.status === 200) return response.data;
  } catch (error) {
    console.error(error.response);
    alert(error);
  }
};

export { getVideos };
