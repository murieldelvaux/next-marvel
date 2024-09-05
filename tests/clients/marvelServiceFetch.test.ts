import { marvelServiceFetch } from "@/app/clients/marvelServiceFetch";
import { rest } from "msw";
import { setupServer } from "msw/node";

const handlers = [
  rest.get(
    new RegExp(`${process.env.NEXT_MARVEL_API_URL}.*`),
    (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ message: "success" }));
    }
  ),
  rest.get(
    new RegExp(`${process.env.NEXT_MARVEL_API_URL}.*`),
    (_req, res, ctx) => {
      return res(ctx.status(500));
    }
  ),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("marvelServiceFetch", () => {
  test("should simulate success request", async () => {
    const result = await marvelServiceFetch("/test", {
      method: "GET",
    });

    expect(result).toEqual({ message: "success" });
  });

  test("should handle non-ok responses", async () => {
    server.use(handlers[1]);
    try {
      const result = await marvelServiceFetch("/test", {
        method: "GET",
      });
      expect(result).toBeNull();
    } catch (error) {
      expect(error).toHaveProperty("message", "Algo deu errado!");
    }
  });
});
