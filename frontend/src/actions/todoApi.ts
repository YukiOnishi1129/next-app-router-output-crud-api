"use server";

import { getFetch } from "@/actions/fetch";
import {
  TodoListResponseType,
  TodoType,
  GetTodoRequest,
  //   CreateTodoRequest,
  //   UpdateTodoRequest,
  //   DeleteTodoRequest,
} from "@/types/todo";
import { ResponseType } from "@/types/ApiResponse";

export const getTodoList = async (): Promise<
  TodoListResponseType | undefined
> => {
  try {
    const response = await getFetch({
      path: "todos",
      tagName: "getTodoList",
    });
    const data: TodoListResponseType = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTodo = async (req: GetTodoRequest) => {
  try {
    const response = await getFetch({
      path: `todos/${req.id}`,
      tagName: "getTodoList",
    });
    const data = await response.json();
    const status = response.status;
    if (status === 200) {
      const res: ResponseType<TodoType> = {
        status: status,
        data: data,
      };
      return res;
    }
    const res: ResponseType = {
      status: status,
      errorCode: data.code,
      errorMessage: data.message,
    };
    return res;
  } catch (error) {
    const res: ResponseType = {
      status: 500,
      errorCode: "500",
      errorMessage: `Internet Server Error: ${error}`,
    };
    return res;
  }
};
