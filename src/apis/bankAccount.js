const apiUrl = `${process.env.REACT_APP_BACKEND_BASE_URL}/bank`;

const bankCurrencies = async () => {
  const response = await fetch(`${apiUrl}/currencies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
    credentials: "include",
  });
  return response.json();
};

const typesAccount = async () => {
  const response = await fetch(`${apiUrl}/typeAccounts`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
  return response.json();
};

const createBankAccount = async (bankAccount) => {
  const response = await fetch(`${apiUrl}/createAccount`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
    credentials: "include",
    body: JSON.stringify(bankAccount),
  });
  return response.json();
};

const listAllAccountBank = async (data) => {
  const response = await fetch(`${apiUrl}/listAllAccountBank`, {
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

export { bankCurrencies, typesAccount, createBankAccount, listAllAccountBank };
