
// ✅ Right: custom hook
import { useState, useEffect } from "react";
import axios from "axios";

export const usePackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/packages",
          { withCredentials: true }
        );
        setPackages(response.data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchPackages();
  }, []);

  return packages;
};
