import { useFindHeroProfile } from "@/app/(features)/(hero)/[...heroId]/react-queries/useFindHeroProfile";
import { renderHook, waitFor } from "@testing-library/react";
import { TestQueryWrapper } from "@tests/config/TestQueryWrapper";
import { generateHeroPaginatedResponseMock } from "@tests/mocks/generateHeroPaginatedMock";
import { rest } from "msw";
import { setupServer } from "msw/node";

const hero = generateHeroPaginatedResponseMock();

const handler = [
  rest.get(
    new RegExp(`${process.env.NEXT_MARVEL_API_URL}characters.*`),
    (_req, res, ctx) => {
      return res(ctx.json(hero));
    }
  ),
];

const server = setupServer(...handler);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("findHeroProfile", () => {
  test("should handle hero profile response", async () => {
    const { result } = renderHook(
      () => useFindHeroProfile({ heroId: hero.data.results[0].id }),
      {
        wrapper: TestQueryWrapper,
      }
    );

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data?.data).toEqual(hero.data);
  });
});
