import { TextDecoder, TextEncoder } from "util";
import fetch, { Headers, Request, Response } from "node-fetch";

process.env.NEXT_MARVEL_API_URL = "https://gateway.marvel.com/v1/public/";

Object.defineProperties(globalThis, {
  TextDecoder: { value: TextDecoder },
  TextEncoder: { value: TextEncoder },
  TransformStream: { value: TransformStream },
  performance: { value: performance },
});

Object.defineProperties(globalThis, {
  fetch: { value: fetch, writable: true },
  Headers: { value: Headers },
  Request: { value: Request },
  Response: { value: Response },
});
