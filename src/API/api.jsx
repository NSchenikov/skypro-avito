const baseUrl = "http://localhost:8090";

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
