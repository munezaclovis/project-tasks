import { createStore } from "redux";
import { taskReducer } from "./store/tasks/reducer";

export const store = createStore(taskReducer);
