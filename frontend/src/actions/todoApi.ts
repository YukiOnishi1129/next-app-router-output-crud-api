"use server";

import { getFetch, postFetch, putFetch } from "@/actions/fetch";
import {
  TodoListResponseType,
  TodoType,
  GetTodoRequest,
  CreateTodoRequest,
  UpdateTodoRequest,
  //   DeleteTodoRequest,
} from "@/types/todo";
import { ResponseType, IErrorResponse } from "@/types/ApiResponse";

export const getTodoList = async () => {
  try {
    const response = await getFetch({
      path: "todos",
      tagName: "getTodoList",
    });
    const data = await response.json();
    const status = response.status;
    if (status === 200) {
      const res: ResponseType<TodoListResponseType> = {
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

export const createTodo = async (req: CreateTodoRequest) => {
  try {
    const response = await postFetch({
      path: "todos",
      body: req,
    });
    const data = await response.json();
    const status = response.status;
    if (status === 201) {
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
    const fetchError = error as IErrorResponse;
    res.errorCode = fetchError.status.toString();
    res.errorMessage = fetchError.statusText;
    return res;
  }
};

export const updateTodo = async (req: UpdateTodoRequest) => {
  try {
    const response = await putFetch({ path: `todos/${req.id}`, body: req });
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
    const fetchError = error as IErrorResponse;
    res.errorCode = fetchError?.status?.toString();
    res.errorMessage = fetchError?.statusText;
    return res;
  }
};
