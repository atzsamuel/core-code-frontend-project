const apiUrl = `${process.env.REACT_APP_BACKEND_BASE_URL}/transaction`;

const createTransfer = async (data) => {
  const response = await fetch(`${apiUrl}/transferAmount`, {
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

const reportTransfer = async (data) => {
  const response = await fetch(`${apiUrl}/reportTransfer`, {
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

export { createTransfer, reportTransfer };
