import * as request from "./requester";

const baseUrl = "http://localhost:3030/jsonstore/games";

export const getAll = async () => {
  const result = await request.get(baseUrl);
  const games = Object.values(result);

  return games;
};

export const getOne = async (id) => {
  const result = await request.get(`${baseUrl}/${id}`);

  return result;
};

export const create = async (data) => {
  console.log(data);
  await request.post(baseUrl, data);
};
