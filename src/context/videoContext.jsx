import { createContext, useEffect, useState } from "react";
import { categories } from "../constants";
import api from "../utils/api";

//context temeli
export const VideoContext = createContext();

// sağlayıcı bilesen
export const VideoProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [videos, SetVideos] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const type = selectedCategory.type;

    if (type === "menu") return;

    setIsLoading(true);

    const url =
      type === "home"
        ? "/home"
        : type === "trending"
        ? "/trending"
        : type === "category"
        ? `/search?query=${selectedCategory.name}`
        : "";

    api
      .get(url)
      .then((res) => SetVideos(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [selectedCategory]);

  return (
    <VideoContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        videos,
        error,
        isLoading,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
