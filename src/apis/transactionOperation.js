const apiUrl = `${process.env.REACT_APP_BACKEND_BASE_URL}/transaction`;

const transactionType = async () => {
  const response = await fetch(`${apiUrl}/types`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
    credentials: "include",
  });
  return response.json();
};

const transactionCategories = async () => {
  const response = await fetch(`${apiUrl}/categories`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
  return response.json();
};

const getListBank = async (data) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/bank/listBank`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
      body: JSON.stringify(data),
    }
  );
  return response.json();
};

const createTransaction = async (data) => {
  const response = await fetch(`${apiUrl}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
    credentials: "include",
    body: JSON.stringify(data),
  });
  return response.json();
};

const reportTransaction = async (data) => {
  const response = await fetch(`${apiUrl}/report`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
    credentials: "include",
    body: JSON.stringify(data),
  });
  return response.json();
};

export {
  transactionType,
  transactionCategories,
  createTransaction,
  getListBank,
  reportTransaction,
};
