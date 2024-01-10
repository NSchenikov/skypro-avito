export const baseUrl = "http://localhost:8090";

export async function getAds() {
  const response = await fetch(`${baseUrl}/ads`);

  if (!response.ok) {
    throw new Error("ошибка сервера");
  }

  const data = await response.json();
  // console.log(data);
  return data;
}

export const registerUser = async (
  id,
  email,
  password,
  name,
  surname,
  phone,
  city
) => {
  const response = await fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    body: JSON.stringify({
      id: id,
      email: email,
      password: password,
      name: name,
      surname: surname,
      role: "user",
      phone: phone,
      city: city,
    }),
    headers: {
      "content-type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    console.log(data);
    const error = data.message ?? data.detail[0].msg;
    console.log(error);
    throw new Error(error);
  } else {
    console.log(data);
    return data;
  }
};

export const getToken = async (email, password) => {
  const response = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "content-type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    console.log(data);
    const error = data.detail[0].msg ?? data.detail;
    console.log(error);
    throw new Error(error);
  } else {
    // console.log(data)
    return data;
  }
};

export async function fetchCurrentUserData() {
  let token = localStorage.getItem("refresh"); // текущий токен
  const endpoint = `${baseUrl}/user`; // эндпоинт для получения данных

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 401) {
      // Если получили ошибку 401, значит токен устарел
      // Здесь можно обновить токен и попробовать получить данные заново
      const refreshedToken = await refreshAccessToken(token);
      if (refreshedToken) {
        token = refreshedToken;
        const updatedResponse = await fetch(endpoint, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${refreshedToken}`,
          },
        });
        const data = await updatedResponse.json();
        // Обработка полученных данных после обновления токена
        return data;
      }
    } else {
      const data = await response.json();
      // Обработка полученных данных
      // console.log(" /user at fetchCurrentUserData with no 401");
      return data;
    }
  } catch (error) {
    // Обработка других ошибок
    const err = error.detail[0].msg ?? error.detail;
    throw new Error(err);
  }
}

export async function refreshAccessToken(token) {
  const refreshToken = localStorage.getItem("refresh"); // refresh token

  try {
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_token: token,
        refresh_token: refreshToken,
      }),
    });

    if (response.ok) {
      const newToken = await response.json();
      return newToken.access_token;
    } else {
      throw new Error("Не удалось обновить токен");
    }
  } catch (error) {
    console.error("Ошибка при обновлении токена:", error);
    return null;
  }
}

export const getMyAllAds = async () => {
  let token = localStorage.getItem("refresh");
  const endpoint = `${baseUrl}/ads/me`;

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 401) {
      const refreshedToken = await refreshAccessToken(token);
      if (refreshedToken) {
        token = refreshedToken;
        const updatedResponse = await fetch(endpoint, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${refreshedToken}`,
          },
        });
        const data = await updatedResponse.json();
        return data;
      }
    } else {
      const data = await response.json();
      // console.log("ads/me at getMyAllAds with no 401");
      return data;
    }
  } catch (error) {
    const err = error.detail[0].msg ?? error.detail;
    throw new Error(err);
  }
};

export async function uploadAvatar(file) {
  let token = localStorage.getItem("refresh");
  const data = new FormData();
  data.append("file", file);
  fetch(`${baseUrl}/user/avatar`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: data,
  })
    .then((response) => {
      if (response.status === 401) {
        const refreshedToken = refreshAccessToken(token); //
        if (refreshedToken) {
          token = refreshedToken;
          const updatedResponse = fetch(`${baseUrl}/user`, {
            //
            method: "GET",
            headers: {
              Authorization: `Bearer ${refreshedToken}`,
            },
          });
          const data = updatedResponse.json(); //
          return data;
        }
      } else {
        const data = response.json(); //
        return data;
      }
    })
    .then((data) => {
      console.log("File uploaded successfully", data);
      return data;
    })
    .catch((error) => {
      console.error("There was a problem with the file upload", error);
      return error;
    });
}

export const updateUserData = ({ formData }) => {
  let token = localStorage.getItem("refresh");
  const jsonBody = JSON.stringify(formData);
  fetch(`${baseUrl}/user`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: jsonBody,
  })
    .then((response) => {
      if (response.status === 401) {
        const refreshedToken = refreshAccessToken(token); //
        if (refreshedToken) {
          token = refreshedToken;
          const updatedResponse = fetch(`${baseUrl}/user`, {
            //
            method: "GET",
            headers: {
              Authorization: `Bearer ${refreshedToken}`,
            },
          });
          const data = updatedResponse.json(); //
          return data;
        }
      } else {
        const data = response.json(); //
        return data;
      }
    })
    .then((data) => {
      console.log("Success:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const createAddWithNoImg = ({ data }) => {
  let token = localStorage.getItem("refresh");
  const jsonBody = JSON.stringify(data);
  console.log(jsonBody);
  fetch(`${baseUrl}/adstext`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: jsonBody,
  })
    .then((response) => {
      if (response.status === 401) {
        const refreshedToken = refreshAccessToken(token); //
        if (refreshedToken) {
          token = refreshedToken;
          const updatedResponse = fetch(`${baseUrl}/user`, {
            //
            method: "GET",
            headers: {
              Authorization: `Bearer ${refreshedToken}`,
            },
          });
          const data = updatedResponse.json(); //
          return data;
        }
      } else {
        const data = response.json(); //
        return data;
      }
    })
    .then((data) => {
      console.log("Success:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const deleteAd = async ({ id }) => {
  let token = localStorage.getItem("refresh");

  const deleteRequest = async () => {
    try {
      const response = await fetch(`${baseUrl}/ads/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          const refreshedToken = await refreshAccessToken(token);
          token = refreshedToken;
          return fetch(`${baseUrl}/ads/${id}`, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${refreshedToken}`,
              "Content-Type": "application/json",
            },
          });
        } else {
          throw new Error("Failed to delete ad");
        }
      }

      return response.json();
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  try {
    const data = await deleteRequest();
    console.log("Success:", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getAllComments = async ({ advId }) => {
  let token = localStorage.getItem("refresh");
  const endpoint = `${baseUrl}/ads/${advId}/comments`;

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 401) {
      const refreshedToken = await refreshAccessToken(token);
      if (refreshedToken) {
        token = refreshedToken;
        const updatedResponse = await fetch(endpoint, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${refreshedToken}`,
          },
        });
        return updatedResponse;
      }
    } else {
      return response;
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const sendComment = async ({ advId, text }) => {
  let token = localStorage.getItem("refresh");
  const response = await fetch(`${baseUrl}/ads/${advId}/comments`, {
    method: "POST",
    body: JSON.stringify({
      text: text,
    }),
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    console.log(data);
    const error = data.detail[0].msg ?? data.detail;
    console.log(error);
    throw new Error(error);
  } else {
    return data;
  }
};

export const deleteImg = async ({ id, fileUrl }) => {
  let token = localStorage.getItem("refresh");

  const deleteRequest = async () => {
    try {
      const response = await fetch(`${baseUrl}/ads/${id}/image`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: {
          fileUrl: fileUrl,
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          const refreshedToken = await refreshAccessToken(token);
          token = refreshedToken;
          return fetch(`${baseUrl}/ads/${id}/image`, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${refreshedToken}`,
              "Content-Type": "application/json",
            },
          });
        } else {
          throw new Error("Failed to delete ad");
        }
      }

      return response.json();
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  try {
    const data = await deleteRequest();
    console.log("Success:", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const handleFileAdd = async ({ event, advId }) => {
  const token = localStorage.getItem("refresh");
  const files = Array.from(event.target.files);

  for (const file of files) {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`${baseUrl}/ads/${advId}/image`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const uploadedImage = await response.json();
      console.log("uploadedImage", uploadedImage);
      return uploadedImage;
      // setAdData((prevState) => ({
      //   ...prevState,
      //   images: [
      //     ...prevState.images,
      //     {
      //       url: uploadedImage?.images[uploadedImage?.images?.length - 1].url,
      //     },
      //   ],
      // }))
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }
};

export const updateAd = async ({ advId, adData }) => {
  const token = localStorage.getItem("refresh");
  try {
    const response = await fetch(`${baseUrl}/ads/${advId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(adData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const updatedAd = await response.json();
    console.log("Ad updated:", updatedAd);
  } catch (error) {
    console.error("Error updating ad:", error);
  }
};

export const handleImgDelete = async ({ index, advId, adData, setAdData }) => {
  const token = localStorage.getItem("refresh");
  const imageToDelete = adData.images[index];

  if (imageToDelete.file) {
    const updatedImages = adData.images.filter((_, idx) => idx !== index);
    setAdData({ ...adData, images: updatedImages });
  } else {
    try {
      const response = await fetch(
        `${baseUrl}/ads/${advId}/image?file_url=${encodeURIComponent(
          imageToDelete.url
        )}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const updatedImages = adData.images.filter((_, idx) => idx !== index);
      setAdData({ ...adData, images: updatedImages });
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  }
};
