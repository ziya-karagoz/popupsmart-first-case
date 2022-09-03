import axios from "axios";
export const fetchTodos = async () => {
  return axios
    .get("https://63127da9f5cba498da936eb4.mockapi.io/todos")
    .then((res) => res.data);
};
