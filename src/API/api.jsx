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

export const updateUserData = (formData) => {
  let token = localStorage.getItem("refresh");
  fetch(`${baseUrl}/user`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
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
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
