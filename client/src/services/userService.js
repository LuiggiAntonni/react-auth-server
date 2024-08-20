import httpClient from "./httpClient";

export const fetchUserData = async () => {
  try {
    const user = localStorage.getItem("user") || null;

    // if (!user || !user.token) {
    //   throw new Error("User token not found");
    // }

    const config = {
      headers: {
        Authorization: `Bearer ${user}`,
      },
    };

    const response = await httpClient.get("/api/me", config);

    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    throw error;
  }
};
