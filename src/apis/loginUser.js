const apiUrl = `${process.env.REACT_APP_BACKEND_BASE_URL}`;

const registerUser = async (data) => {
  const response = await fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });
  return response.json();
};

const loginUser = async (data) => {
  const response = await fetch(`${apiUrl}/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  /*if (response.status === 200) {
    const dataResponse = await response.json();
    console.log(dataResponse.data[0]);
    localStorage.setItem("userToken", dataResponse.data[0].user_token);
    localStorage.setItem("userId", dataResponse.data[0].user_id);
    return dataResponse.data[0];
  }*/

  return response.json();
};

export { registerUser, loginUser };
