"use server";

import { headers } from "next/headers";

const BASE_URL = "http://localhost:4000/api/v1";

type GetFetchArgs = {
  path: string;
  tagName: string;
  cacheType?: RequestCache;
};

export const getFetch = async ({ path, tagName, cacheType }: GetFetchArgs) => {
  const header = await headers();
  return fetch(`${BASE_URL}/${path}`, {
    headers: new Headers(header),
    next: { tags: [tagName] },
    cache: cacheType,
  });
};

type PostFetchArgs = {
  path: string;
  body: Record<string, unknown>;
};

export const postFetch = async ({ path, body }: PostFetchArgs) => {
  const header = await headers();
  return fetch(`${BASE_URL}/${path}`, {
    method: "POST",
    headers: new Headers(header),
    body: JSON.stringify(body),
  });
};

type PutFetchArgs = {
  path: string;
  body: Record<string, unknown>;
};

export const putFetch = async ({ path, body }: PutFetchArgs) => {
  const header = await headers();
  return fetch(`${BASE_URL}/${path}`, {
    method: "PUT",
    headers: new Headers(header),
    body: JSON.stringify(body),
  });
};

type DeleteFetchArgs = {
  path: string;
};

export const deleteFetch = async ({ path }: DeleteFetchArgs) => {
  const header = await headers();
  return fetch(`${BASE_URL}/${path}`, {
    method: "DELETE",
    headers: new Headers(header),
  });
};
