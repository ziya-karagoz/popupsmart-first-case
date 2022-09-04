import axios from "axios";

const apiURL = "https://6314bde1fc9dc45cb4f2f7a1.mockapi.io/todos";

export const fetchTodos = async () => {
  return await axios.get(apiURL).then((res) => res.data);
};

export const addTodo = async (todo) => {
  return await axios.post(apiURL, todo).then((res) => res.data);
};

export const deleteTodo = async (id) => {
  return await axios.delete(`${apiURL}/${id}`).then((res) => res.data);
};
