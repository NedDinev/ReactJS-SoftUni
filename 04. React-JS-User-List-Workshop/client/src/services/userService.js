const baseUrl = "http://localhost:3005/api/users";

export const getAll = async () => {
  const response = await fetch(baseUrl);
  const result = await response.json();

  return result.users;
};

export const getOne = async (userId) => {
  const response = await fetch(`${baseUrl}/${userId}`);
  const result = await response.json();

  return result.user;
};

export const create = async (userData) => {
  const { country, city, street, streetNumber } = userData;
  userData.address = { streetNumber, street, city, country };

  const response = await fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  const result = await response.json();

  return result.user;
};

export const edit = async (userData, userId) => {
  const { country, city, street, streetNumber } = userData;
  userData.address = { streetNumber, street, city, country };

  const response = await fetch(`${baseUrl}/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  const result = await response.json();

  return result.user;
};

export const deleteUser = async (userId) =>
  fetch(`${baseUrl}/${userId}`, { method: "DELETE" });
