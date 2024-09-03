"use server";

import {
  FetchDefaultError,
  FetchWrapperError,
} from "@/app/types/fetchWrapper/fetchWrapperError.types";
import { env } from "process";
import md5 from "md5";

export const marvelServiceFetch = async <TData = unknown>(
  path: string,
  init: RequestInit
): Promise<TData | null> => {
  const ts = new Date().getTime();
  const hash = md5(
    `${ts}${env.NEXT_PRIVATE_KEY_MARVEL}${env.NEXT_PUBLIC_KEY_MARVEL}`
  );

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const defaultInit: RequestInit = {
    headers,
    ...init,
  };

  const res = await fetch(
    `${env.NEXT_MARVEL_API_URL}${path}&ts=${ts}&apikey=${env.NEXT_PUBLIC_KEY_MARVEL}&hash=${hash}`,
    defaultInit
  );

  const text = await res.text();

  if (!res.ok) {
    const error = {
      statusCode: res.status,
      message: (text as FetchDefaultError).message ?? "Algo deu errado!",
      error: text,
    } as unknown as FetchWrapperError;

    throw error;
  }

  return JSON.parse(text);
};
