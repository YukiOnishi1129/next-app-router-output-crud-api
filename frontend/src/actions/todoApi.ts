"use server";

import { getFetch } from "@/actions/fetch";
import {
  TodoListResponseType,
  //   TodoType,
  //   GetTodoRequest,
  //   CreateTodoRequest,
  //   UpdateTodoRequest,
  //   DeleteTodoRequest,
} from "@/types/todo";
// import { IErrorResponse, ResponseType } from "@/types/ApiResponse";

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
