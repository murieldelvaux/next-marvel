import { useFindHeroComics } from "@/app/(features)/(hero)/[...heroId]/react-queries/useFindHeroComics";
import { renderHook, waitFor } from "@testing-library/react";
import { TestQueryWrapper } from "@tests/config/TestQueryWrapper";
import { generateHeroComicResponseMock } from "@tests/mocks/generateHeroComicsMock";
import { rest } from "msw";
import { setupServer } from "msw/node";

const comics = generateHeroComicResponseMock();

const handler = [
  rest.get(
    new RegExp(`${process.env.NEXT_MARVEL_API_URL}characters.*`),
    (_req, res, ctx) => {
      return res(ctx.json(comics));
    }
  ),
];

const server = setupServer(...handler);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("findHeroComics", () => {
  test("should handle hero comics response", async () => {
    const { result } = renderHook(
      () => useFindHeroComics({ heroId: comics.data.results[0].id }),
      {
        wrapper: TestQueryWrapper,
      }
    );

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data?.data).toEqual(comics.data);
  });
});
