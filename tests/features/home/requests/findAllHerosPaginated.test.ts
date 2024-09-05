import { useFindAllHerosPaginated } from "@/app/(features)/(home)/react-queries/useFindAllHerosPaginated";
import { renderHook, waitFor } from "@testing-library/react";
import { TestQueryWrapper } from "@tests/config/TestQueryWrapper";
import { generateHeroPaginatedResponseMock } from "@tests/mocks/generateHeroPaginatedMock";
import { rest } from "msw";
import { setupServer } from "msw/node";

const heros = generateHeroPaginatedResponseMock();

const handler = [
  rest.get(
    new RegExp(`${process.env.NEXT_MARVEL_API_URL}characters.*`),
    (_req, res, ctx) => {
      return res(ctx.json(heros));
    }
  ),
];

const server = setupServer(...handler);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("findAllHerosPaginated", () => {
  test("should handle hero paginated response", async () => {
    const { result } = renderHook(
      () =>
        useFindAllHerosPaginated({
          limit: 1,
          offset: 0,
          orderBy: "-name",
          name: heros.data.results[0].name,
        }),
      {
        wrapper: TestQueryWrapper,
      }
    );

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data?.data).toEqual(heros.data);
  });
});
