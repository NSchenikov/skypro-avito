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
      // localStorage.setItem("advId", data.id);
      // console.log("storage in api", localStorage.getItem("advId"));
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

// export const createAddWithImg = ({ data, files }) => {
//   let token = localStorage.getItem("refresh");
//   const photos = new FormData();
//   photos.append("file", files);
//   const jsonBody = JSON.stringify(data);
//   console.log(jsonBody);
//   fetch(`${baseUrl}/ads`, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//     },
//     body: { jsonBody, photos },
//   })
//     .then((response) => {
//       if (response.status === 401) {
//         const refreshedToken = refreshAccessToken(token); //
//         if (refreshedToken) {
//           token = refreshedToken;
//           const updatedResponse = fetch(`${baseUrl}/user`, {
//             //
//             method: "GET",
//             headers: {
//               Authorization: `Bearer ${refreshedToken}`,
//             },
//           });
//           const data = updatedResponse.json(); //
//           return data;
//         }
//       } else {
//         const data = response.json(); //
//         return data;
//       }
//     })
//     .then((data) => {
//       console.log("Success:", data);
//       return data;
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// };

export const addImagesToAdv = ({ file, data }) => {
  let token = localStorage.getItem("refresh");
  console.log(data);
  for (let pair of file.entries()) {
    console.log(pair[0] + ", " + pair[1]);
  }
  const searchParams = new URLSearchParams();
  searchParams.append("title", data[0].title);
  searchParams.append("description", data[0].description);
  searchParams.append("price", data[0].price);
  console.log("ценник", data[0].title);
  console.log("ценник type", typeof data[0].title);
  // for (const key in data) {
  //   searchParams.append(key, data[key]);
  // }

  const formData = new FormData();

  const arrData = [...data];
  const length = arrData.length;

  for (let i = 1; i < length - 2; i++) {
    formData.append(`files`, file.get(`image${i}`));
    console.log("form", formData);
  }

  fetch(`${baseUrl}/ads?${searchParams.toString()}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: formData,
  })
    .then((response) => {
      if (response.status === 401) {
        const refreshedToken = refreshAccessToken(token);
        if (refreshedToken) {
          token = refreshedToken;
          const updatedResponse = fetch(`${baseUrl}/user`, {
            //
            method: "GET",
            headers: {
              Authorization: `Bearer ${refreshedToken}`,
            },
          });
          const data = updatedResponse.json();
          return data;
        }
      } else {
        const data = response.json();
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

export const createAdvWithImg = ({ data, imgObj }) => {
  let token = localStorage.getItem("refresh");
  const jsonBody = JSON.stringify(data);
  // console.log(jsonBody);
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
        const refreshedToken = refreshAccessToken(token);
        if (refreshedToken) {
          token = refreshedToken;
          const updatedResponse = fetch(`${baseUrl}/user`, {
            //
            method: "GET",
            headers: {
              Authorization: `Bearer ${refreshedToken}`,
            },
          });
          const data = updatedResponse.json();
          return data;
        }
      } else {
        const data = response.json();
        return data;
      }
    })
    .then((res) => {
      console.log("Success:", res);
      // console.log(data.id);
      // Object.keys(imgObj).forEach((key) => {
      //   addImagesToAdv({ file: imgObj[key], id: data.id });
      // });
      const formData = new FormData();
      Object.keys(imgObj).forEach((image, index) => {
        formData.append(`image${index + 1}`, image);
      });
      addImagesToAdv({ file: formData, data: res });
      return res;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
