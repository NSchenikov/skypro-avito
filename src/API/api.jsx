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

export const getCurrentUser = async (token) => {
  const response = await fetch(`${baseUrl}/user`, {
    method: "GET",
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
    // console.log(data)
    return data;
  }
};
