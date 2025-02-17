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
