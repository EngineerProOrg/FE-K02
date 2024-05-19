import { useSelector } from "react-redux";
import { AppState } from "./store";

export const useTodosSelector = () => useSelector((state: AppState) => state.todos.todos);