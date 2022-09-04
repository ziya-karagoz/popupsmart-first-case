import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { apiURL } from "../utils/constants";

export const fetchTodos = () => {
  return axios.get(apiURL).then((res) => res.data);
};

export const useTodosData = (onSuccess, onError) => {
  return useQuery(["todos"], () => fetchTodos(), {
    onSuccess,
    onError,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    select: (data) => {
      return [
        data.filter((todo) => !todo.isCompleted),
        data.filter((todo) => todo.isCompleted),
      ];
    },
  });
};
